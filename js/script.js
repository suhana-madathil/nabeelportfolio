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

  // ==========================================================================
  // ABOUT PAGE PHOTO GALLERY & LIGHTBOX
  // ==========================================================================
  const galleryGrid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('gallery-lightbox');

  if (galleryGrid && lightbox) {
    // Array of gallery image filenames
    // Includes user's uploaded event/meeting photographs and high-res event PNGs
    const galleryImages = [
      "user_photo_01.jpg",
      "user_photo_02.jpg",
      "user_photo_03.jpg",
      "user_photo_04.jpg",
      "user_photo_05.jpg",
      "page_01_image_002.png",
      "page_02_image_004.png",
      "page_03_image_005.png",
      "page_04_image_007.png",
      "page_05_image_008.png",
      "page_14_image_021.png",
      "page_14_image_022.png",
      "page_14_image_023.png",
      "page_14_image_024.png",
      "page_14_image_025.png",
      "page_14_image_026.png",
      "page_14_image_027.png",
      "page_14_image_028.png",
      "page_15_image_029.png",
      "page_15_image_030.png",
      "page_15_image_031.png",
      "page_15_image_032.png",
      "page_15_image_033.png",
      "page_15_image_034.png",
      "page_15_image_035.png",
      "page_15_image_036.png",
      "page_16_image_037.png",
      "page_16_image_038.png",
      "page_16_image_039.png",
      "page_16_image_040.png",
      "page_16_image_041.png",
      "page_16_image_042.png",
      "page_16_image_043.png",
      "page_16_image_044.png",
      "page_16_image_045.png",
      "page_17_image_046.png",
      "page_17_image_047.png",
      "page_17_image_048.png",
      "page_17_image_049.png",
      "page_17_image_050.png",
      "page_17_image_051.png",
      "page_17_image_052.png",
      "page_17_image_053.png",
      "page_17_image_054.png",
      "page_18_image_055.png",
      "page_18_image_056.png",
      "page_18_image_057.png",
      "page_18_image_058.png",
      "page_18_image_059.png",
      "page_18_image_060.png",
      "page_18_image_061.png",
      "page_19_image_062.png",
      "page_19_image_063.png",
      "page_19_image_064.png",
      "page_19_image_065.png",
      "page_19_image_066.png",
      "page_19_image_067.png",
      "page_19_image_068.png",
      "page_19_image_069.png",
      "page_20_image_070.png",
      "page_20_image_071.png",
      "page_20_image_072.png",
      "page_20_image_073.png",
      "page_20_image_074.png",
      "page_20_image_075.png",
      "page_20_image_076.png",
      "page_20_image_077.png",
      "page_21_image_078.png",
      "page_21_image_079.png",
      "page_21_image_080.png",
      "page_21_image_081.png",
      "page_21_image_082.png",
      "page_21_image_083.png",
      "page_21_image_084.png",
      "page_22_image_085.png",
      "page_22_image_086.png",
      "page_22_image_087.png",
      "page_22_image_088.png",
      "page_22_image_089.png",
      "page_22_image_090.png",
      "page_22_image_091.png",
      "page_22_image_092.png",
      "page_23_image_093.png",
      "page_23_image_094.png",
      "page_23_image_095.png",
      "page_23_image_096.png",
      "page_23_image_097.png",
      "page_23_image_098.png",
      "page_23_image_099.png",
      "page_23_image_100.png",
      "page_23_image_101.png",
      "page_24_image_102.png",
      "page_24_image_103.png",
      "page_24_image_104.png",
      "page_24_image_105.png",
      "page_24_image_106.png",
      "page_24_image_107.png",
      "page_24_image_108.png",
      "page_24_image_109.png",
      "page_25_image_110.png",
      "page_25_image_111.png",
      "page_25_image_112.png",
      "page_25_image_113.png",
      "page_25_image_114.png",
      "page_25_image_115.png",
      "page_25_image_116.png",
      "page_25_image_117.png",
      "page_26_image_118.png",
      "page_26_image_119.png",
      "page_26_image_120.png",
      "page_26_image_121.png",
      "page_26_image_122.png",
      "page_26_image_123.png",
      "page_27_image_124.png",
      "page_27_image_125.png",
      "page_27_image_126.png",
      "page_28_image_127.png",
      "page_28_image_128.png",
      "page_28_image_129.png",
      "page_29_image_130.png",
      "page_29_image_131.png",
      "page_29_image_132.png",
      "page_30_image_133.png",
      "page_30_image_134.png",
      "page_30_image_135.png",
      "page_31_image_136.png",
      "page_31_image_137.png",
      "page_32_image_139.png",
      "page_32_image_140.png",
      "page_32_image_141.png",
      "page_33_image_142.png",
      "page_33_image_143.png",
      "page_33_image_144.png",
      "page_33_image_145.png",
      "page_34_image_146.png",
      "page_34_image_147.png",
      "page_35_image_148.png",
      "page_35_image_149.png",
      "page_35_image_150.png",
      "page_36_image_151.png",
      "page_36_image_152.png",
      "page_36_image_153.png",
      "page_36_image_154.png",
      "page_37_image_155.png",
      "page_37_image_156.png",
      "page_37_image_157.png",
      "page_37_image_158.png",
      "page_38_image_159.png",
      "page_38_image_160.png",
      "page_38_image_161.png",
      "page_38_image_162.png",
      "page_39_image_163.png",
      "page_39_image_164.png",
      "page_40_image_165.png",
      "page_40_image_166.png"
];

    const basePath = 'assets/images/gallery/';
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const loadMoreBtn = document.getElementById('gallery-load-more-btn');
    const galleryCountText = document.getElementById('gallery-count-text');

    let currentIndex = 0;
    const initialBatch = 24;
    const batchIncrement = 24;
    let currentlyRendered = 0;

    const renderGalleryItems = (count) => {
      const targetCount = Math.min(currentlyRendered + count, galleryImages.length);
      const fragment = document.createDocumentFragment();

      for (let i = currentlyRendered; i < targetCount; i++) {
        const filename = galleryImages[i];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'gallery-item';
        btn.setAttribute('data-index', String(i));
        btn.setAttribute('aria-label', `View photo ${i + 1} of ${galleryImages.length}`);

        const img = document.createElement('img');
        img.src = `${basePath}${filename}`;
        img.alt = `Muhammad Nabeel P.A. gallery photo ${i + 1}`;
        img.loading = i < 8 ? 'eager' : 'lazy';
        img.decoding = 'async';

        const overlay = document.createElement('div');
        overlay.className = 'gallery-item-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>';

        btn.appendChild(img);
        btn.appendChild(overlay);

        btn.addEventListener('click', () => {
          openLightbox(i);
        });

        fragment.appendChild(btn);
      }

      galleryGrid.appendChild(fragment);
      currentlyRendered = targetCount;

      if (galleryCountText) {
        galleryCountText.textContent = `Showing ${currentlyRendered} of ${galleryImages.length} photos`;
      }

      if (loadMoreBtn) {
        if (currentlyRendered >= galleryImages.length) {
          loadMoreBtn.style.display = 'none';
        } else {
          loadMoreBtn.style.display = 'inline-flex';
        }
      }
    };

    const updateLightbox = (index) => {
      currentIndex = (index + galleryImages.length) % galleryImages.length;
      const filename = galleryImages[currentIndex];
      lightboxImg.src = `${basePath}${filename}`;
      lightboxImg.alt = `Muhammad Nabeel P.A. photo ${currentIndex + 1}`;
      if (lightboxCounter) {
        lightboxCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
      }
    };

    const openLightbox = (index) => {
      updateLightbox(index);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (closeBtn) {
        closeBtn.focus();
      }
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      const activeItem = galleryGrid.querySelector(`[data-index="${currentIndex}"]`);
      if (activeItem) {
        activeItem.focus();
      }
    };

    const showPrev = () => {
      updateLightbox(currentIndex - 1);
    };

    const showNext = () => {
      updateLightbox(currentIndex + 1);
    };

    // Initial render
    renderGalleryItems(initialBatch);

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        renderGalleryItems(batchIncrement);
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    // Close when clicking backdrop
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content') || e.target.classList.contains('lightbox-img-wrapper')) {
        closeLightbox();
      }
    });

    // Keyboard navigation in lightbox
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    });
  }
})();
