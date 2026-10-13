/**
 * AquaTherma - Header Module Exporter
 */

// Consolidates header functionality from navigation and theme
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initStickyHeader: typeof initStickyHeader !== 'undefined' ? initStickyHeader : null,
    initActiveNavLink: typeof initActiveNavLink !== 'undefined' ? initActiveNavLink : null
  };
}
