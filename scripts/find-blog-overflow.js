const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(__dirname, '..', urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath).toLowerCase();
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      res.end(data);
    }
  });
});

server.listen(8901, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 320, height: 800 } });
  await page.goto('http://localhost:8901/blog-detail.html?id=tank-vs-tankless-water-heaters');
  await page.waitForTimeout(1000);

  const testFix = await page.evaluate(() => {
    const before = document.documentElement.scrollWidth;

    // Apply min-w-0 and max-w-full to grid items and container
    const grid = document.querySelector('.grid.lg\\:grid-cols-12');
    const mainCol = grid ? grid.children[0] : null;
    const sidebar = grid ? grid.children[1] : null;
    const blogBody = document.getElementById('blog-content-body');

    if (grid) grid.classList.add('min-w-0');
    if (mainCol) mainCol.classList.add('min-w-0', 'w-full');
    if (sidebar) sidebar.classList.add('min-w-0', 'w-full');
    if (blogBody) blogBody.classList.add('min-w-0', 'w-full');

    const after = document.documentElement.scrollWidth;

    return { before, after };
  });

  console.log('TEST FIX RESULT:', testFix);

  await browser.close();
  server.close();
});
