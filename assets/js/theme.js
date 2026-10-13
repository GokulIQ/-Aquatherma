/**
 * AquaTherma - Theme (Light / Dark Mode) & RTL Layout Manager
 */

function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  const readThemePreference = () => {
    try {
      const value = localStorage.getItem('aquatherma_theme');
      return value === 'dark' || value === 'light' ? value : null;
    } catch (_) {
      return null;
    }
  };
  const storedTheme = readThemePreference();
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme ? storedTheme : (systemPrefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      try { localStorage.setItem('aquatherma_theme', newTheme); } catch (_) {}
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!readThemePreference()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  const logos = document.querySelectorAll('.site-logo-img');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    logos.forEach(img => img.src = 'assets/images/brand/logo-white.svg');
  } else {
    document.documentElement.classList.remove('dark');
    logos.forEach(img => img.src = 'assets/images/brand/logo.svg');
  }
  updateThemeIcons(theme);
}

function updateThemeIcons(theme) {
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.setAttribute('data-lucide', 'sun');
    } else {
      icon.setAttribute('data-lucide', 'moon');
    }
  });
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initRTL() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
  let storedRtl = document.documentElement.getAttribute('dir') === 'rtl';
  try {
    const savedDirection = localStorage.getItem('aquatherma_rtl');
    if (savedDirection !== null) storedRtl = savedDirection === 'true';
  } catch (_) {}

  function applyDirection(isRtl) {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    rtlToggleBtns.forEach(btn => {
      // Name the layout that clicking the button will switch to.
      const label = isRtl ? 'Switch to left-to-right layout' : 'Switch to right-to-left layout';
      btn.textContent = isRtl ? 'LTR' : 'RTL';
      btn.setAttribute('title', label);
      btn.setAttribute('aria-label', label);
    });
  }

  applyDirection(storedRtl);
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextRtl = document.documentElement.getAttribute('dir') !== 'rtl';
      applyDirection(nextRtl);
      try { localStorage.setItem('aquatherma_rtl', String(nextRtl)); } catch (_) {}
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initTheme, applyTheme, updateThemeIcons, initRTL };
}
