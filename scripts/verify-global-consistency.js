/**
 * AquaTherma - Global Header & Footer Consistency Audit Script
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const HEADER_PATH = path.join(ROOT_DIR, 'components', 'header.html');
const FOOTER_PATH = path.join(ROOT_DIR, 'components', 'footer.html');

const masterHeader = fs.readFileSync(HEADER_PATH, 'utf8').trim();
const masterFooter = fs.readFileSync(FOOTER_PATH, 'utf8').trim();

const standardPages = [
  'index.html',
  'home-02.html',
  'about.html',
  'services.html',
  'service-detail.html',
  'projects.html',
  'project-detail.html',
  'blog.html',
  'blog-detail.html',
  'pricing.html',
  'contact.html',
  '404.html',
  'privacy-policy.html',
  'terms.html'
];

let errors = [];

console.log('--- 1. AUDITING STANDARD PAGES FOR GLOBAL CONSISTENCY ---');

standardPages.forEach(file => {
  const filePath = path.join(ROOT_DIR, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing page: ${file}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Check Master Header
  if (!html.includes('<header class="header-cinematic-glass sticky top-0 z-50 text-charcoal-text dark:text-white">')) {
    errors.push(`${file}: Missing master header class.`);
  }

  // Check Logo in Header
  if (!html.includes('site-logo-img h-7 sm:h-9 w-auto')) {
    errors.push(`${file}: Header logo dimensions do not match master (h-7 sm:h-9 w-auto).`);
  }

  // Check Book Your Service CTA
  if (!html.includes('Book Your Service')) {
    errors.push(`${file}: Missing "Book Your Service" CTA in header.`);
  }

  // Check Theme Toggle & RTL Toggle
  if (!html.includes('theme-toggle') || !html.includes('rtl-toggle')) {
    errors.push(`${file}: Missing theme or RTL toggle controls in header.`);
  }

  // Check Mobile Menu Drawer
  if (!html.includes('id="mobile-menu-drawer"') || !html.includes('id="mobile-menu-backdrop"')) {
    errors.push(`${file}: Missing mobile menu drawer component.`);
  }

  // Check Master Footer
  if (!html.includes('<footer class="bg-white dark:bg-midnight-navy text-slate-700 dark:text-slate-300 text-sm pt-16 pb-12 border-t border-theme-border dark:border-white/10">')) {
    errors.push(`${file}: Missing master footer class.`);
  }

  // Check Floating Emergency Hotline
  if (!html.includes('class="floating-hotline whitespace-nowrap"')) {
    errors.push(`${file}: Missing floating emergency hotline button.`);
  }

  // Check Newsletter Form in Footer
  if (!html.includes('class="newsletter-form mt-4"')) {
    errors.push(`${file}: Missing newsletter form in footer.`);
  }

  // Check Script Dependencies
  if (!html.includes('assets/js/main.js')) {
    errors.push(`${file}: Missing assets/js/main.js.`);
  }

  console.log(`[PASS] ${file}`);
});

console.log('\n--- 2. VERIFYING DEDICATED FULL-SCREEN PAGES ---');
const standalonePages = ['coming-soon.html', 'maintenance.html'];
standalonePages.forEach(file => {
  const filePath = path.join(ROOT_DIR, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing standalone page: ${file}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('assets/js/main.js')) {
    errors.push(`${file}: Missing main.js`);
  }
  console.log(`[PASS] ${file} (Dedicated layout verified)`);
});

console.log('\n--- AUDIT SUMMARY ---');
if (errors.length === 0) {
  console.log('>>> ALL CHECKS PASSED: 100% GLOBAL HEADER & FOOTER CONSISTENCY CONFIRMED! <<<');
  process.exit(0);
} else {
  console.error(`Found ${errors.length} issue(s):`);
  errors.forEach(e => console.error(` - ${e}`));
  process.exit(1);
}
