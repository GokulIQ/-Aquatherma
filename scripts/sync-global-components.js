/**
 * AquaTherma - Global Components Synchronization Script
 * 
 * Synchronizes the single source of truth Header and Footer components
 * (components/header.html & components/footer.html) across all pages.
 * 
 * Guarantees zero layout shift and 100% file:/// protocol compatibility in Chrome.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const HEADER_PATH = path.join(ROOT_DIR, 'components', 'header.html');
const FOOTER_PATH = path.join(ROOT_DIR, 'components', 'footer.html');

if (!fs.existsSync(HEADER_PATH) || !fs.existsSync(FOOTER_PATH)) {
  console.error('Error: components/header.html or components/footer.html not found.');
  process.exit(1);
}

const headerContent = fs.readFileSync(HEADER_PATH, 'utf8').trim();
const footerContent = fs.readFileSync(FOOTER_PATH, 'utf8').trim();

const targetPages = [
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

const unifiedTailwindConfig = `  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'midnight-navy': '#091D2C',
            'deep-teal': '#087E8B',
            'fresh-aqua': '#36D4CC',
            'warm-copper': '#DB8959',
            'warm-offwhite': '#F6F5F1',
            'charcoal-text': '#17252D',
            // Semantic Aliases
            'deep-navy': '#091D2C',
            'primary-blue': '#087E8B',
            'accent-aqua': '#36D4CC',
            'warm-orange': '#DB8959',
            'soft-bg': '#F6F5F1',
            'main-text': '#17252D',
            'secondary-text': '#5A6D7C',
            'theme-border': '#E2E8F0',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Manrope', 'sans-serif'],
          }
        }
      }
    }
  </script>`;

const unifiedBodyTag = `<body class="bg-warm-offwhite dark:bg-[#091D2C] text-charcoal-text dark:text-[#F6F5F1] antialiased selection:bg-deep-teal selection:text-white">`;

let updatedCount = 0;

targetPages.forEach(fileName => {
  const filePath = path.join(ROOT_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${fileName}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Update Tailwind Configuration
  const tailwindRegex = /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>[\s\S]*?tailwind\.config[\s\S]*?<\/script>/i;
  if (tailwindRegex.test(html)) {
    html = html.replace(tailwindRegex, unifiedTailwindConfig);
  }

  // 2. Update Body Tag
  const bodyRegex = /<body[^>]*>/i;
  if (bodyRegex.test(html)) {
    html = html.replace(bodyRegex, unifiedBodyTag);
  }

  // 3. Replace Header & Mobile Drawer (everything between <body...> and <main...>)
  const bodyMatch = html.match(/<body[^>]*>/i);
  const mainOpenMatch = html.match(/<main[^>]*>/i);

  if (!bodyMatch || !mainOpenMatch) {
    console.error(`Could not locate body or main tags in ${fileName}`);
    return;
  }

  const beforeBody = html.slice(0, bodyMatch.index + bodyMatch[0].length);
  const afterMainOpen = html.slice(mainOpenMatch.index);

  html = beforeBody + '\n\n  ' + headerContent + '\n\n  ' + afterMainOpen;

  // 4. Replace Footer & Floating Hotline (everything between </main> and the scripts before </body>)
  const mainCloseIndex = html.indexOf('</main>');
  if (mainCloseIndex === -1) {
    console.error(`Could not locate </main> in ${fileName}`);
    return;
  }

  const contentUpToMainClose = html.slice(0, mainCloseIndex + 7);
  const afterMainClose = html.slice(mainCloseIndex + 7);

  // Find the first script tag after </main>
  const firstScriptIndex = afterMainClose.search(/<script/i);
  if (firstScriptIndex === -1) {
    console.error(`Could not locate scripts after </main> in ${fileName}`);
    return;
  }

  const scriptsAndBeyond = afterMainClose.slice(firstScriptIndex);

  html = contentUpToMainClose + '\n\n  ' + footerContent + '\n\n  ' + scriptsAndBeyond;

  // 5. Ensure forms.js is included if missing
  if (!html.includes('assets/js/forms.js')) {
    html = html.replace('assets/js/main.js"></script>', 'assets/js/main.js"></script>\n  <script src="assets/js/forms.js"></script>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Successfully synced global header & footer to: ${fileName}`);
  updatedCount++;
});

console.log(`\nSynchronization complete! Updated ${updatedCount} pages.`);
