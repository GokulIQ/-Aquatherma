const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let brokenLinks = [];
let checkedCount = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match hrefs
  const hrefMatches = [...content.matchAll(/href=["']([^"'#]+)(#[^"']*)?["']/g)];
  hrefMatches.forEach(m => {
    let target = m[1];
    // Ignore template literal expressions
    if (target.includes('${')) return;
    if (target.startsWith('http') || target.startsWith('tel:') || target.startsWith('mailto:')) return;
    // Strip query string if any
    target = target.split('?')[0];
    checkedCount++;
    if (!fs.existsSync(target)) {
      brokenLinks.push({ file: f, link: target });
    }
  });

  // Match srcs
  const srcMatches = [...content.matchAll(/src=["']([^"']+)["']/g)];
  srcMatches.forEach(m => {
    let target = m[1];
    if (target.includes('${')) return;
    if (target.startsWith('http') || target.startsWith('//')) return;
    target = target.split('?')[0];
    checkedCount++;
    if (!fs.existsSync(target)) {
      brokenLinks.push({ file: f, asset: target });
    }
  });
});

console.log('Checked references:', checkedCount);
console.log('Broken links/assets count:', brokenLinks.length);
if (brokenLinks.length > 0) {
  console.log(brokenLinks);
} else {
  console.log('>>> 100% INTERNAL LINKS AND STATIC ASSETS VERIFIED (ZERO BROKEN LINKS)!');
}
