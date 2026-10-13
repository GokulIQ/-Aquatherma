const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PORT = 8899;
const ROOT_DIR = path.resolve(__dirname, '..');

// Simple static server
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(ROOT_DIR, decodeURIComponent(reqPath));

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

const pagesToTest = [
  'index.html',
  'home-02.html',
  'about.html',
  'services.html',
  'service-detail.html?id=tankless-water-heater-installation',
  'service-detail.html?id=tank-water-heater-installation',
  'service-detail.html?id=emergency-water-heater-repair',
  'projects.html',
  'project-detail.html?id=whole-home-tankless-upgrade',
  'project-detail.html?id=compact-tankless-utility-room',
  'blog.html',
  'blog-detail.html?id=tank-vs-tankless-water-heaters',
  'pricing.html',
  'contact.html',
  '404.html',
  'coming-soon.html',
  'maintenance.html',
  'privacy-policy.html',
  'terms.html'
];

const viewports = [
  { name: '320px (Mobile S)', width: 320, height: 800 },
  { name: '375px (Mobile M)', width: 375, height: 800 },
  { name: '425px (Mobile L)', width: 425, height: 850 },
  { name: '768px (Tablet P)', width: 768, height: 1024 },
  { name: '1024px (Tablet L)', width: 1024, height: 768 },
  { name: '1280px (Laptop)', width: 1280, height: 800 },
  { name: '1440px (Desktop)', width: 1440, height: 900 }
];

async function runAudit() {
  server.listen(PORT);
  console.log(`Static server running at http://localhost:${PORT}`);

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  let totalTests = 0;
  let issuesFound = [];

  for (const pagePath of pagesToTest) {
    console.log(`\n==================================================`);
    console.log(`AUDITING PAGE: ${pagePath}`);
    console.log(`==================================================`);

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });

      const modes = [
        { name: 'Light LTR', dark: false, rtl: false },
        { name: 'Dark LTR', dark: true, rtl: false },
        { name: 'Light RTL', dark: false, rtl: true }
      ];

      for (const mode of modes) {
        totalTests++;
        const consoleErrors = [];
        const failedRequests = [];

        const consoleHandler = msg => {
          if (msg.type() === 'error') {
            const text = msg.text();
            // Ignore external CDN net aborts/disconnections in headless runs
            if (!text.includes('net::ERR_') && !text.includes('Failed to load resource')) {
              consoleErrors.push(text);
            }
          }
        };
        const pageErrorHandler = err => {
          consoleErrors.push(err.message);
        };
        const requestFailedHandler = req => {
          const u = req.url();
          // Filter to local server requests only (ignore third-party external CDNs or maps)
          if (u.includes(`localhost:${PORT}`) || u.startsWith(`http://localhost:${PORT}`)) {
            failedRequests.push(`${req.method()} ${req.url()} (${req.failure()?.errorText || 'failed'})`);
          }
        };

        page.on('console', consoleHandler);
        page.on('pageerror', pageErrorHandler);
        page.on('requestfailed', requestFailedHandler);

        const url = `http://localhost:${PORT}/${pagePath}`;
        try {
          await page.goto(url, { waitUntil: 'domcontentloaded' });
          await page.waitForTimeout(300);

          // Apply theme and direction
          await page.evaluate(({ dark, rtl }) => {
            document.documentElement.classList.toggle('dark', dark);
            document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
          }, mode);

          await page.waitForTimeout(200);

          // Check for horizontal overflow
          const overflowInfo = await page.evaluate(({ vpWidth, isRtl }) => {
            const docWidth = document.documentElement.scrollWidth;
            const bodyWidth = document.body ? document.body.scrollWidth : 0;
            const winWidth = window.innerWidth;
            const hasDocOverflow = docWidth > winWidth + 1;

            let overflowingElements = [];
            if (hasDocOverflow) {
              const allEls = document.querySelectorAll('*');
              allEls.forEach(el => {
                // Ignore elements hidden or drawers intended to be offscreen
                if (el.id === 'mobile-menu-drawer' || el.closest('#mobile-menu-drawer')) return;
                const rect = el.getBoundingClientRect();
                const style = window.getComputedStyle(el);
                if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;

                if (rect.right > winWidth + 2 || rect.left < -2) {
                  // Check if it has content or background
                  if (rect.width > 0 && rect.height > 0) {
                    overflowingElements.push({
                      tag: el.tagName.toLowerCase(),
                      id: el.id,
                      class: el.className ? String(el.className).substring(0, 80) : '',
                      rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
                      text: (el.textContent || '').trim().substring(0, 40)
                    });
                  }
                }
              });
            }

            // Check header nav wrap when desktop nav is visible
            let headerNavIssue = null;
            const nav = document.querySelector('header nav');
            const header = document.querySelector('header');
            if (nav && header) {
              const navStyle = window.getComputedStyle(nav);
              const navRect = nav.getBoundingClientRect();
              if (navStyle.display !== 'none' && navRect.width > 0) {
                const logo = document.querySelector('.site-logo-img');
                const logoRect = logo ? logo.getBoundingClientRect() : null;
                const actionBtns = header.querySelector('.btn-copper');
                const actionRect = actionBtns ? actionBtns.getBoundingClientRect() : null;

                if (navRect.height > 45) {
                  headerNavIssue = `Nav height ${Math.round(navRect.height)}px indicates multi-line wrapping`;
                }

                if (!isRtl) {
                  // LTR: Logo is on left, nav in center, action buttons on right
                  if (logoRect && navRect.left < logoRect.right + 4) {
                    headerNavIssue = `Nav overlaps with brand logo at ${vpWidth}px`;
                  }
                  if (actionRect && navRect.right > actionRect.left - 4) {
                    headerNavIssue = `Nav collides with header action buttons at ${vpWidth}px`;
                  }
                } else {
                  // RTL: Action buttons on left, nav in center, logo on right
                  if (actionRect && navRect.left < actionRect.right + 4) {
                    headerNavIssue = `Nav collides with header action buttons at ${vpWidth}px (RTL)`;
                  }
                  if (logoRect && navRect.right > logoRect.left - 4) {
                    headerNavIssue = `Nav overlaps with brand logo at ${vpWidth}px (RTL)`;
                  }
                }
              }
            }

            // Check floating hotline collision with interactive submit buttons
            let hotlineCollision = null;
            const hotline = document.querySelector('.floating-hotline');
            if (hotline) {
              const hlRect = hotline.getBoundingClientRect();
              const buttons = document.querySelectorAll('button[type="submit"], input[type="submit"]');
              buttons.forEach(btn => {
                const bRect = btn.getBoundingClientRect();
                if (
                  hlRect.right > bRect.left &&
                  hlRect.left < bRect.right &&
                  hlRect.bottom > bRect.top &&
                  hlRect.top < bRect.bottom
                ) {
                  hotlineCollision = `Hotline overlaps submit button: "${btn.textContent?.trim().substring(0, 30)}"`;
                }
              });
            }

            return {
              docWidth,
              winWidth,
              hasDocOverflow,
              overflowCount: overflowingElements.length,
              sampleOverflows: overflowingElements.slice(0, 5),
              headerNavIssue,
              hotlineCollision
            };
          }, { vpWidth: vp.width, isRtl: mode.rtl });

          const status = [];
          if (overflowInfo.hasDocOverflow) {
            status.push(`OVERFLOW (doc: ${overflowInfo.docWidth}px > win: ${overflowInfo.winWidth}px)`);
            issuesFound.push({
              page: pagePath,
              viewport: vp.name,
              mode: mode.name,
              issue: `Horizontal scroll: ${overflowInfo.docWidth}px vs ${overflowInfo.winWidth}px`,
              details: overflowInfo.sampleOverflows
            });
          }

          if (overflowInfo.headerNavIssue) {
            status.push(`HEADER_NAV: ${overflowInfo.headerNavIssue}`);
            issuesFound.push({
              page: pagePath,
              viewport: vp.name,
              mode: mode.name,
              issue: overflowInfo.headerNavIssue
            });
          }

          if (overflowInfo.hotlineCollision) {
            status.push(`HOTLINE: ${overflowInfo.hotlineCollision}`);
            issuesFound.push({
              page: pagePath,
              viewport: vp.name,
              mode: mode.name,
              issue: overflowInfo.hotlineCollision
            });
          }

          if (consoleErrors.length > 0) {
            status.push(`CONSOLE_ERRORS: ${consoleErrors.length}`);
            issuesFound.push({
              page: pagePath,
              viewport: vp.name,
              mode: mode.name,
              issue: `Console Errors: ${consoleErrors.join(' | ')}`
            });
          }

          if (failedRequests.length > 0) {
            status.push(`FAILED_REQS: ${failedRequests.length}`);
            issuesFound.push({
              page: pagePath,
              viewport: vp.name,
              mode: mode.name,
              issue: `Failed requests: ${failedRequests.join(' | ')}`
            });
          }

          if (status.length === 0) {
            console.log(`[PASS] [${vp.name}] [${mode.name}]`);
          } else {
            console.log(`[FAIL] [${vp.name}] [${mode.name}]: ${status.join(', ')}`);
          }

        } catch (err) {
          console.error(`[ERROR] [${vp.name}] [${mode.name}] loading error:`, err.message);
          issuesFound.push({
            page: pagePath,
            viewport: vp.name,
            mode: mode.name,
            issue: `Load exception: ${err.message}`
          });
        } finally {
          page.off('console', consoleHandler);
          page.off('pageerror', pageErrorHandler);
          page.off('requestfailed', requestFailedHandler);
        }
      }
    }
  }

  await browser.close();
  server.close();

  console.log(`\n==================================================`);
  console.log(`AUDIT SUMMARY`);
  console.log(`Total tests run: ${totalTests}`);
  console.log(`Issues detected: ${issuesFound.length}`);
  console.log(`==================================================`);

  if (issuesFound.length > 0) {
    fs.writeFileSync('scripts/qa_audit_issues.json', JSON.stringify(issuesFound, null, 2));
    console.log(`Detailed issues written to scripts/qa_audit_issues.json`);
  } else {
    console.log(`ALL PAGES, VIEWPORTS, THEMES & RTL COMBINATIONS PASSED WITH ZERO ISSUES!`);
  }
}

runAudit().catch(err => {
  console.error('Audit run failed:', err);
  server.close();
  process.exit(1);
});
