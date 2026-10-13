const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');

console.log('=== AQUATHERMA PROJECTS & DETAILS VERIFICATION AUDIT ===\n');

// 1. Load data.js
const dataFile = 'assets/js/data.js';
if (!fs.existsSync(dataFile)) {
  console.error('FAIL: assets/js/data.js does not exist');
  process.exit(1);
}

const content = fs.readFileSync(dataFile, 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(content, ctx);
const AQUA_DATA = ctx.window.AQUA_DATA || ctx.AQUA_DATA;

if (!AQUA_DATA || !AQUA_DATA.projects) {
  console.error('FAIL: AQUA_DATA.projects is not defined in data.js');
  process.exit(1);
}

const projects = AQUA_DATA.projects;
console.log(`[PASS] Loaded ${projects.length} projects from AQUA_DATA.projects`);

// 2. Verify Count = 9
if (projects.length !== 9) {
  console.error(`FAIL: Expected exactly 9 projects, found ${projects.length}`);
  process.exit(1);
}
console.log('[PASS] Exact total count: 9 projects');

// 3. Verify Category Counts
const expectedCategories = {
  'tankless': 2,
  'emergency': 2,
  'energy-upgrades': 2,
  'tank-installation': 2,
  'maintenance': 1
};

const categoryCounts = {};
projects.forEach(p => {
  categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
});

let categoryMismatch = false;
for (const [cat, expected] of Object.entries(expectedCategories)) {
  const actual = categoryCounts[cat] || 0;
  if (actual !== expected) {
    console.error(`FAIL: Category '${cat}' has ${actual} projects, expected ${expected}`);
    categoryMismatch = true;
  } else {
    console.log(`[PASS] Category '${cat}': ${actual}/${expected} projects`);
  }
}
if (categoryMismatch) process.exit(1);

// 4. Verify Image Rules & Cryptographic Uniqueness
console.log('\n--- Verifying 18 Project Images & Hashes ---');
const hashes = new Set();
const imageFiles = [];

projects.forEach((p, idx) => {
  const num = idx + 1;
  const coverPath = p.coverImage;
  const detailHeroPath = p.detailHeroImage;
  const detailPath = p.detailImage;

  // Rule 1: Cover image equals detail hero image
  if (coverPath !== detailHeroPath) {
    console.error(`FAIL Project ${num}: coverImage (${coverPath}) does not match detailHeroImage (${detailHeroPath})`);
    process.exit(1);
  }

  // Rule 2: Cover image does NOT equal detail image
  if (coverPath === detailPath) {
    console.error(`FAIL Project ${num}: coverImage and detailImage must be different images!`);
    process.exit(1);
  }

  // Check file existence and size
  [coverPath, detailPath].forEach((imgPath, imgIdx) => {
    if (!fs.existsSync(imgPath)) {
      console.error(`FAIL Project ${num}: Image file missing: ${imgPath}`);
      process.exit(1);
    }
    const stat = fs.statSync(imgPath);
    if (stat.size < 10000) {
      console.error(`FAIL Project ${num}: Image file too small (${stat.size} bytes): ${imgPath}`);
      process.exit(1);
    }

    const buf = fs.readFileSync(imgPath);
    const hash = crypto.createHash('md5').update(buf).digest('hex');

    if (hashes.has(hash)) {
      console.error(`FAIL: Duplicate image content detected! Hash ${hash} reused at ${imgPath}`);
      process.exit(1);
    }
    hashes.add(hash);
    imageFiles.push({ path: imgPath, hash: hash.substring(0, 10), size: `${(stat.size / 1024).toFixed(1)} KB` });
  });

  console.log(`[PASS] Project ${num} (${p.title}):`);
  console.log(`       Cover:  ${coverPath} (Hero 1:1 match)`);
  console.log(`       Detail: ${detailPath} (Unique second view)`);
});

console.log(`\n[PASS] Verified ${hashes.size} completely unique image hashes out of 18 images! Zero duplicates!`);

// 5. Verify Case Study Content Completeness
console.log('\n--- Verifying Case Study Content Completeness ---');
const requiredFields = [
  'id', 'slug', 'title', 'category', 'categoryLabel', 'location', 'duration',
  'summary', 'specs', 'overview', 'challenge', 'problemAssessment', 'solution',
  'workPerformed', 'outcome', 'homeownerQuote', 'clientName', 'relatedProjectIds'
];

projects.forEach((p, idx) => {
  for (const field of requiredFields) {
    if (!p[field] || (Array.isArray(p[field]) && p[field].length === 0)) {
      console.error(`FAIL: Project ${idx + 1} (${p.id}) is missing required field: ${field}`);
      process.exit(1);
    }
  }
  const specKeys = Object.keys(p.specs || {});
  if (specKeys.length < 4) {
    console.error(`FAIL: Project ${idx + 1} (${p.id}) has only ${specKeys.length} specs (expected >= 4)`);
    process.exit(1);
  }
});
console.log('[PASS] All 9 projects have full, rich case-study content and >= 4 technical specifications.');

// 6. Verify projects.html markup & filter buttons
console.log('\n--- Verifying projects.html ---');
const projectsHtml = fs.readFileSync('projects.html', 'utf8');
const filterSlugs = ['all', 'tankless', 'emergency', 'energy-upgrades', 'tank-installation', 'maintenance'];
filterSlugs.forEach(slug => {
  if (!projectsHtml.includes(`data-filter="${slug}"`)) {
    console.error(`FAIL: projects.html missing button with data-filter="${slug}"`);
    process.exit(1);
  }
});
console.log('[PASS] projects.html contains all 6 required filter buttons (all + 5 categories).');

// 7. Verify project-detail.html 7-section structure
console.log('\n--- Verifying project-detail.html 7-section structure ---');
const detailHtml = fs.readFileSync('project-detail.html', 'utf8');
const requiredSections = [
  'SECTION 1: PROJECT HERO (1/7)',
  'SECTION 2: PROJECT OVERVIEW & EQUIPMENT SPECIFICATIONS (2/7)',
  'SECTION 3: INITIAL PROBLEM & DIAGNOSTIC ASSESSMENT (3/7)',
  'SECTION 4: SOLUTION & WORK PERFORMED (4/7)',
  'SECTION 5: PROJECT OUTCOME & VERIFIED HOMEOWNER FEEDBACK (5/7)',
  'SECTION 6: RELATED PROJECTS (6/7)',
  'SECTION 7: BOOKING / CONSULTATION CTA (7/7)'
];

requiredSections.forEach((sec, idx) => {
  if (!detailHtml.includes(sec)) {
    console.error(`FAIL: project-detail.html missing section marker: ${sec}`);
    process.exit(1);
  }
  console.log(`[PASS] Section ${idx + 1}/7 present: ${sec}`);
});

const requiredElements = [
  'id="proj-hero-image"',
  'id="proj-detail-image"',
  'id="proj-title"',
  'id="proj-category"',
  'id="proj-hero-desc"',
  'id="proj-location"',
  'id="proj-duration"',
  'id="proj-overview-text"',
  'id="proj-specs-grid"',
  'id="proj-challenge"',
  'id="proj-solution"',
  'id="proj-outcome"',
  'id="proj-quote"',
  'id="proj-related-grid"'
];

requiredElements.forEach(el => {
  if (!detailHtml.includes(el)) {
    console.error(`FAIL: project-detail.html missing element: ${el}`);
    process.exit(1);
  }
});
console.log('[PASS] project-detail.html contains all required IDs for dynamic population.');

console.log('\n=== ALL PROJECT AUDIT CHECKS PASSED WITH 100% SUCCESS! ===');
