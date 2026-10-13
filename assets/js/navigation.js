/**
 * AquaTherma - Navigation, Mobile Drawer & Active Link Synchronization
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

function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md', 'is-sticky');
    } else {
      header.classList.remove('shadow-md', 'is-sticky');
    }
  }, { passive: true });
}

function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = currentPath === 'index.html' || currentPath === '' || currentPath === 'home-02.html';

  const homeBtn = document.querySelector('header nav .group > button');
  if (homeBtn) {
    if (isHome) {
      homeBtn.className = 'flex items-center gap-1.5 text-deep-teal dark:text-fresh-aqua font-bold hover:text-deep-teal dark:hover:text-white transition-colors focus:outline-none whitespace-nowrap';
    } else {
      homeBtn.className = 'flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-deep-teal dark:hover:text-white transition-colors focus:outline-none whitespace-nowrap';
    }
  }

  document.querySelectorAll('header nav .group div a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.className = 'block px-3 py-2 rounded-lg bg-deep-teal/10 dark:bg-[#16364E] text-xs font-bold text-deep-teal dark:text-fresh-aqua whitespace-nowrap';
    } else {
      a.className = 'block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#16364E] text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-deep-teal dark:hover:text-white whitespace-nowrap';
    }
  });

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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initMobileNav, initStickyHeader, initActiveNavLink };
}
