/**
 * AquaTherma - Core Interactivity, Theme Management, RTL & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initMobileNav();
  initAccordions();
  initStickyHeader();
  initActiveNavLink();
  initFloatingHotline();
  initSystemExplorer();
  initIcons();
});

/**
 * 1. Theme Manager (Dark / Light Mode)
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

  // Listen to system changes if user hasn't explicitly set preference
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

/**
 * 2. RTL Layout Toggle
 */
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

/**
 * 3. Mobile Navigation Drawer
 */
function initMobileNav() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

  if (!mobileMenuDrawer) return;

  function setMenuOpen(isOpen) {
    mobileMenuDrawer.setAttribute('data-open', String(isOpen));
    mobileMenuDrawer.setAttribute('aria-hidden', String(!isOpen));
    mobileMenuDrawer.inert = !isOpen;
    if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.toggle('hidden', !isOpen);
    document.body.classList.toggle('overflow-hidden', isOpen);
  }

  function openMenu() {
    if (!desktopLayout.matches) setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const desktopLayout = window.matchMedia('(min-width: 1280px)');
  desktopLayout.addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  mobileMenuDrawer.classList.remove('translate-x-full', '-translate-x-full');
  if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-controls', 'mobile-menu-drawer');
  closeMenu();

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('#mobile-menu-drawer a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

/**
 * 4. FAQ Accordions
 */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const parent = item.parentElement;
      const isActive = item.classList.contains('active');

      // Close siblings if in same accordion group
      parent.querySelectorAll('.accordion-item').forEach(sibling => {
        sibling.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 6. Sticky Header
 */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
}

/**
 * 7. Active Nav Link Detection & Synchronization
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = currentPath === 'index.html' || currentPath === '' || currentPath === 'home-02.html';

  // 1. Home Dropdown Button on Desktop Header
  const homeBtn = document.querySelector('header nav .group > button');
  if (homeBtn) {
    if (isHome) {
      homeBtn.className = 'flex items-center gap-1.5 text-deep-teal dark:text-fresh-aqua font-bold hover:text-deep-teal dark:hover:text-white transition-colors focus:outline-none whitespace-nowrap';
    } else {
      homeBtn.className = 'flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-deep-teal dark:hover:text-white transition-colors focus:outline-none whitespace-nowrap';
    }
  }

  // 2. Dropdown Child Options
  document.querySelectorAll('header nav .group div a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.className = 'block px-3 py-2 rounded-lg bg-deep-teal/10 dark:bg-[#16364E] text-xs font-bold text-deep-teal dark:text-fresh-aqua whitespace-nowrap';
    } else {
      a.className = 'block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#16364E] text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-deep-teal dark:hover:text-white whitespace-nowrap';
    }
  });

  // 3. Desktop Top-Level Navigation Links
  document.querySelectorAll('header nav > a').forEach(link => {
    const href = link.getAttribute('href');
    let isActive = false;
    if (href === currentPath) {
      isActive = true;
    } else if (href === 'services.html' && currentPath === 'service-detail.html') {
      isActive = true;
    } else if (href === 'projects.html' && currentPath === 'project-detail.html') {
      isActive = true;
    } else if (href === 'blog.html' && currentPath === 'blog-detail.html') {
      isActive = true;
    }

    if (isActive) {
      link.className = 'text-deep-teal dark:text-fresh-aqua font-bold transition-colors whitespace-nowrap';
    } else {
      link.className = 'hover:text-deep-teal dark:hover:text-fresh-aqua transition-colors whitespace-nowrap text-slate-700 dark:text-slate-200';
    }
  });

  // 4. Mobile Menu Drawer Links
  document.querySelectorAll('#mobile-menu-drawer nav a').forEach(link => {
    const href = link.getAttribute('href');
    let isActive = false;
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      isActive = true;
    } else if (href === 'services.html' && currentPath === 'service-detail.html') {
      isActive = true;
    } else if (href === 'projects.html' && currentPath === 'project-detail.html') {
      isActive = true;
    } else if (href === 'blog.html' && currentPath === 'blog-detail.html') {
      isActive = true;
    }

    if (isActive) {
      link.className = 'py-2 text-deep-teal dark:text-fresh-aqua font-bold';
    } else {
      link.className = 'py-2 text-slate-700 dark:text-slate-300 hover:text-deep-teal dark:hover:text-white';
    }
  });
}

/**
 * 7b. Floating Contact Hotline Behavior & Footer Collision Detection
 */
function initFloatingHotline() {
  const hotline = document.querySelector('.floating-hotline');
  const footer = document.querySelector('footer');
  if (!hotline || !footer) return;

  const updateVisibility = () => {
    const footerRect = footer.getBoundingClientRect();
    hotline.classList.toggle('docked-footer', footerRect.top < window.innerHeight && footerRect.bottom > 0);
  };

  updateVisibility();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      hotline.classList.toggle('docked-footer', entries[0].isIntersecting);
    });
    observer.observe(footer);
  } else {
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('load', updateVisibility);
  }
}

/**
 * 8. Lucide Icons Initializer
 */
function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * 9. Interactive Water Heater System Explorer (Home 01)
 */
function initSystemExplorer() {
  const explorer = document.getElementById('water-heater-system-explorer');
  if (!explorer) return;

  const btnTank = explorer.querySelector('[data-system="tank"]');
  const btnTankless = explorer.querySelector('[data-system="tankless"]');
  const imgEl = explorer.querySelector('#explorer-equipment-image');
  const titleEl = explorer.querySelector('#explorer-system-title');
  const badgeEl = explorer.querySelector('#explorer-system-badge');
  const descEl = explorer.querySelector('#explorer-system-desc');
  const howWorksEl = explorer.querySelector('#explorer-how-works');
  const spaceEl = explorer.querySelector('#explorer-space');
  const efficiencyEl = explorer.querySelector('#explorer-efficiency');
  const supplyEl = explorer.querySelector('#explorer-supply');
  const installEl = explorer.querySelector('#explorer-install');
  const maintEl = explorer.querySelector('#explorer-maint');
  const ctaLink = explorer.querySelector('#explorer-system-cta');

  const systemsData = {
    tank: {
      title: 'Traditional Storage Tank Water Heater',
      badge: 'Standard Reliability • 40–80 Gallons Capacity',
      image: 'assets/images/home/explorer-tank.jpg',
      alt: 'Residential traditional storage tank water heater with expansion tank and copper plumbing',
      desc: 'Stores and continuously maintains a large reservoir of heated water ready for household use, utilizing dependable atmospheric or power-vent burners.',
      howWorks: 'Pre-heats water stored in an insulated glass-lined tank 24/7. Cold water enters via a dip tube at the base while hot water exits from the top.',
      space: 'Requires dedicated 12–16 sq ft of utility floor space, plus mandatory clearance around the burner and flue pipe.',
      efficiency: 'Standard 0.60–0.70 UEF rating with minor standby heat loss as stored water remains continually heated.',
      supply: 'Instant high-volume delivery for 40–80 gallons. Depleted reservoirs require 35–50 minutes recovery reheating time.',
      install: 'Direct drop-in replacement utilizing existing 1/2" gas line or 30-amp electrical circuit without major utility upgrades.',
      maint: 'Annual tank sediment drain flush and sacrificial anode rod inspection every 2–3 years to prevent internal tank corrosion.',
      ctaText: 'Explore Tank Installation Services',
      ctaHref: 'service-detail.html?id=tank-water-heater-installation'
    },
    tankless: {
      title: 'High-Efficiency Condensing Tankless System',
      badge: 'On-Demand Technology • Endless Hot Water',
      image: 'assets/images/home/explorer-tankless.jpg',
      alt: 'Modern high-efficiency condensing tankless water heater wall-mounted with digital control and copper connections',
      desc: 'Heats water instantaneously on demand through dual stainless steel heat exchangers, providing continuous hot water without a storage reservoir.',
      howWorks: 'Cold water flows past a digital sensor that instantly ignites high-output burners, heating water as it circulates through commercial heat exchangers.',
      space: 'Ultra-compact suitcase footprint mounts cleanly to utility walls, freeing up 100% of basement or closet floor space.',
      efficiency: 'Ultra-high efficiency up to 0.96 UEF. Zero standby energy loss, reducing household heating fuel usage by up to 30%.',
      supply: 'Continuous, endless hot water delivery at 8.0–11.0 GPM. Never runs out during simultaneous showers, dishwashing, and laundry.',
      install: 'Requires dedicated 3/4" gas supply line or 120A electrical subpanel service, with direct concentric exterior PVC/polypropylene venting.',
      maint: 'Annual descaling flush using food-grade citric acid solution to dissolve calcium scale and maintain heat exchanger warranty.',
      ctaText: 'Explore Tankless Upgrades',
      ctaHref: 'service-detail.html?id=tankless-water-heater-installation'
    }
  };

  function selectSystem(systemKey) {
    const data = systemsData[systemKey];
    if (!data) return;

    if (btnTank) btnTank.setAttribute('aria-selected', String(systemKey === 'tank'));
    if (btnTankless) btnTankless.setAttribute('aria-selected', String(systemKey === 'tankless'));

    if (imgEl) {
      imgEl.style.opacity = '0';
      setTimeout(() => {
        imgEl.src = data.image;
        imgEl.alt = data.alt;
        imgEl.style.opacity = '1';
      }, 150);
    }

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (descEl) descEl.textContent = data.desc;
    if (howWorksEl) howWorksEl.textContent = data.howWorks;
    if (spaceEl) spaceEl.textContent = data.space;
    if (efficiencyEl) efficiencyEl.textContent = data.efficiency;
    if (supplyEl) supplyEl.textContent = data.supply;
    if (installEl) installEl.textContent = data.install;
    if (maintEl) maintEl.textContent = data.maint;
    if (ctaLink) {
      ctaLink.textContent = data.ctaText;
      ctaLink.href = data.ctaHref;
    }
  }

  if (btnTank) {
    btnTank.addEventListener('click', () => selectSystem('tank'));
    btnTank.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectSystem('tank');
      }
    });
  }

  if (btnTankless) {
    btnTankless.addEventListener('click', () => selectSystem('tankless'));
    btnTankless.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectSystem('tankless');
      }
    });
  }

  // Default selection is tankless
  selectSystem('tankless');
}

