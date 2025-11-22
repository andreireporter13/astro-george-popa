// src/composables/GlobalComposables/hamburgerHandler.js

export class HamburgerHandler {
  constructor(options = {}) {
    this.hamburgerSelector = options.hamburgerSelector || '#hamburger';
    this.mobileMenuSelector = options.mobileMenuSelector || '#mobileMenu';
    this.navbarSelector = options.navbarSelector || '#navbar';
    this.overlaySelector = options.overlaySelector || '#navOverlay';
    
    this.hamburger = null;
    this.mobileMenu = null;
    this.navbar = null;
    this.overlay = null;
    
    this.init();
  }

  init() {
    // Get elements
    this.hamburger = document.querySelector(this.hamburgerSelector);
    this.mobileMenu = document.querySelector(this.mobileMenuSelector);
    this.navbar = document.querySelector(this.navbarSelector);
    this.overlay = document.querySelector(this.overlaySelector);

    if (!this.hamburger || !this.mobileMenu) {
      console.warn('Hamburger or mobile menu element not found');
      return;
    }

    // Bind events
    this.hamburger.addEventListener('click', () => this.toggle());
    this.overlay?.addEventListener('click', () => this.close());

    // Close on link click
    this.bindLinkClicks();
    
    // Close on submenu toggle clicks
    this.bindSubmenuToggles();
  }

  toggle() {
    const isActive = this.hamburger.classList.toggle('active');
    this.mobileMenu.classList.toggle('active');
    this.navbar?.classList.toggle('menu-active');
    this.overlay?.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  }

  open() {
    this.hamburger?.classList.add('active');
    this.mobileMenu?.classList.add('active');
    this.navbar?.classList.add('menu-active');
    this.overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.hamburger?.classList.remove('active');
    this.mobileMenu?.classList.remove('active');
    this.navbar?.classList.remove('menu-active');
    this.overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  bindLinkClicks() {
    // Close menu when clicking on regular links (not toggles)
    const links = document.querySelectorAll(
      '.mobile-menu__link:not(.mobile-menu__toggle), .mobile-submenu__link'
    );
    
    links.forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  }

  bindSubmenuToggles() {
    // Mobile submenu toggles
    const toggles = document.querySelectorAll('.mobile-menu__toggle');
    
    toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.mobile-menu__item--has-submenu');
        parent?.classList.toggle('active');
      });
    });
  }

  destroy() {
    this.close();
    // Remove event listeners if needed
  }
}

// Simple function export
export function initHamburgerMenu(options = {}) {
  return new HamburgerHandler(options);
}