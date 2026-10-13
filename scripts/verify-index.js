const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const checks = [
  { name: 'DOCTYPE present', pass: html.includes('<!DOCTYPE html>') },
  { name: 'Title has Hot Water. Better Living.', pass: html.includes('Hot Water. Better Living.') },
  { name: 'Section 1 (Cinematic Hero)', pass: html.includes('SECTION 01: FULL-WIDTH CINEMATIC HERO') },
  { name: 'Hero Headline: Hot Water. Better Living.', pass: html.includes('Hot Water.<br>') && html.includes('Better Living.') },
  { name: 'Hero Background Image', pass: html.includes('assets/images/home/hero-cinematic.jpg') && fs.existsSync('assets/images/home/hero-cinematic.jpg') },
  { name: 'Hero Info Strip', pass: html.includes('hero-info-strip') },
  { name: 'Section 2 (Bento Services)', pass: html.includes('Everything Your Hot Water System Needs.') },
  { name: 'Section 3 (Interactive Explorer)', pass: html.includes('Two Ways to Heat Water') && html.includes('One Better-Informed Choice.') },
  { name: 'Explorer Images', pass: fs.existsSync('assets/images/home/explorer-tank.jpg') && fs.existsSync('assets/images/home/explorer-tankless.jpg') },
  { name: 'Section 4 (Editorial Story)', pass: html.includes('Precision Behind Every Drop of Comfort.') },
  { name: 'Editorial Portrait Image', pass: html.includes('assets/images/home/editorial-tech-portrait.jpg') && fs.existsSync('assets/images/home/editorial-tech-portrait.jpg') },
  { name: 'Section 5 (Visual Timeline Process)', pass: html.includes('From First Call to Consistent Hot Water.') },
  { name: 'Process Images Exist', pass: [1,2,3,4].every(i => fs.existsSync(`assets/images/home/process-step-${i}.jpg`)) },
  { name: 'Section 6 (Featured Projects)', pass: html.includes('Crafted Installations. Everyday Comfort.') },
  { name: 'Section 7 (Conversion CTA)', pass: html.includes('Your Comfort Shouldn\'t Wait.') },
  { name: 'Script tags balanced', pass: (html.match(/<script/g) || []).length === (html.match(/<\/script>/g) || []).length },
  { name: 'Semantic tags properly closed', pass: html.includes('</main>') && html.includes('</footer>') },
];

console.log(checks);
const failed = checks.filter(c => !c.pass);
if (failed.length > 0) {
  console.error('FAILED CHECKS:', failed);
  process.exit(1);
} else {
  console.log('\n>>> ALL 17 MASTER ACCEPTANCE CRITERIA CHECKS PASSED!\n');
}
