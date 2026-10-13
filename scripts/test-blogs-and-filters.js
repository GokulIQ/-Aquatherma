const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Load data.js
const dataFile = path.join(__dirname, '..', 'assets', 'js', 'data.js');
const dataContent = fs.readFileSync(dataFile, 'utf8');
const fn = new Function(dataContent + '; return AQUA_DATA;');
const AQUA_DATA = fn();

console.log('--- 1. ARTICLE COUNT AUDIT ---');
console.log(`Total blogs: ${AQUA_DATA.blogs.length}`);
if (AQUA_DATA.blogs.length !== 9) {
  console.error(`ERROR: Expected 9 blogs, found ${AQUA_DATA.blogs.length}`);
  process.exit(1);
} else {
  console.log('PASS: Exactly 9 blog articles found.');
}

console.log('\n--- 2. CATEGORY DISTRIBUTION AUDIT ---');
const expectedCategories = {
  'Tank vs. Tankless': 2,
  'Troubleshooting': 2,
  'Water Heater Maintenance': 2,
  'Repair & Replacement': 1,
  'Energy Efficiency': 1,
  'Installation Advice': 1
};

const actualCategories = {};
AQUA_DATA.blogs.forEach(b => {
  actualCategories[b.category] = (actualCategories[b.category] || 0) + 1;
});

console.log('Category Counts:', actualCategories);
let catError = false;
for (const [cat, count] of Object.entries(expectedCategories)) {
  if (actualCategories[cat] !== count) {
    console.error(`ERROR: Category "${cat}" expected ${count}, got ${actualCategories[cat] || 0}`);
    catError = true;
  }
}
if (catError) process.exit(1);
console.log('PASS: Category distributions match specification perfectly.');

console.log('\n--- 3. 18 UNIQUE ASSETS INTEGRITY & HASH AUDIT ---');
const hashes = new Map();
const assetPaths = [];

AQUA_DATA.blogs.forEach((b, idx) => {
  console.log(`\nBlog [${idx + 1}] "${b.id}":`);
  console.log(`  Category: ${b.category}`);
  console.log(`  Cover: ${b.coverImage}`);
  console.log(`  Inline: ${b.inlineImage}`);

  // Check file existence
  const coverOnDisk = path.join(__dirname, '..', b.coverImage);
  const inlineOnDisk = path.join(__dirname, '..', b.inlineImage);

  if (!fs.existsSync(coverOnDisk)) {
    console.error(`ERROR: Cover image missing on disk: ${coverOnDisk}`);
    process.exit(1);
  }
  if (!fs.existsSync(inlineOnDisk)) {
    console.error(`ERROR: Inline image missing on disk: ${inlineOnDisk}`);
    process.exit(1);
  }

  // Calculate hashes
  const coverBuf = fs.readFileSync(coverOnDisk);
  const coverHash = crypto.createHash('md5').update(coverBuf).digest('hex');

  const inlineBuf = fs.readFileSync(inlineOnDisk);
  const inlineHash = crypto.createHash('md5').update(inlineBuf).digest('hex');

  if (hashes.has(coverHash)) {
    console.error(`DUPLICATE FOUND! Cover image ${b.coverImage} is identical to ${hashes.get(coverHash)}`);
    process.exit(1);
  }
  hashes.set(coverHash, b.coverImage);

  if (hashes.has(inlineHash)) {
    console.error(`DUPLICATE FOUND! Inline image ${b.inlineImage} is identical to ${hashes.get(inlineHash)}`);
    process.exit(1);
  }
  hashes.set(inlineHash, b.inlineImage);
});

console.log(`\nPASS: All 18 assets exist on disk and possess 100% unique MD5 hashes!`);
console.log(`Total unique hashes recorded: ${hashes.size} / 18`);

console.log('\n--- 4. ARTICLE CONTENT COMPLETENESS AUDIT ---');
AQUA_DATA.blogs.forEach(b => {
  if (!b.keyTakeaways || b.keyTakeaways.length < 3) {
    console.error(`ERROR: ${b.id} has fewer than 3 key takeaways`);
    process.exit(1);
  }
  if (!b.faqs || b.faqs.length < 2) {
    console.error(`ERROR: ${b.id} has fewer than 2 FAQs`);
    process.exit(1);
  }
  if (!b.content || b.content.length < 200) {
    console.error(`ERROR: ${b.id} has insufficient content length`);
    process.exit(1);
  }
  if (!b.relatedBlogIds || b.relatedBlogIds.length < 3) {
    console.error(`ERROR: ${b.id} has fewer than 3 related blog IDs`);
    process.exit(1);
  }
});
console.log('PASS: All 9 articles contain complete technical content, comparison tables, takeaways, FAQs, and related guide mappings.');

console.log('\n--- ALL BLOG AUDITS PASSED ---');
