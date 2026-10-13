/**
 * AquaTherma - Footer & Floating Hotline Management
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initFloatingHotline };
}
