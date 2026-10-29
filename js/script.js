/**
 * MUHAMMAD NABEEL P.A. — OFFICIAL PERSONAL BRAND WEBSITE
 * Vanilla JavaScript: Mobile Navigation, Sticky Header State, Smooth Scrolling, Year Update
 */

(function () {
  'use strict';

  // Mobile Navigation Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const siteMenu = document.getElementById('site-menu');

  if (menuBtn && siteMenu) {
    const closeMenu = () => {
      siteMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open navigation menu');
      document.body.style.overflow = '';
    };

    const toggleMenu = () => {
      const isOpen = siteMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      // Prevent body scroll when menu is open on mobile
      if (window.innerWidth <= 960) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close when a link inside the menu is clicked
    siteMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close if resized to desktop viewport
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960 && siteMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close if clicked outside
    document.addEventListener('click', (e) => {
      if (
        siteMenu.classList.contains('open') &&
        !siteMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  // Header Scroll State
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Dynamic Year in Footer
  const yearElem = document.getElementById('year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // Smooth scroll support for local hash anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Focus target element for accessibility if applicable
          if (targetElement.tabIndex === -1) {
            targetElement.focus();
          }
        }
      }
    });
  });
})();
