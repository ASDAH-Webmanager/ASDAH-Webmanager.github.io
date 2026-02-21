// About Page
(function () {
  'use strict';

  // ── Scroll FAB ──────────────────────────────────────────────────────────────
  var fab     = document.getElementById('scrollFab');
  var fabTop  = document.getElementById('fabTop');
  var fabNext = document.getElementById('fabNext');
  var fabEnd  = document.getElementById('fabBottom');

  if (!fab) return; // Not on the about page — nothing to do.

  // Show / hide FAB after scrolling 100 px
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  }, { passive: true });

  // Back to top
  fabTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Jump to next .about-section below the current scroll position
  fabNext.addEventListener('click', function () {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll('.about-section')
    );
    var navHeight = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--size-nav-height') || '72',
      10
    );
    var current = window.scrollY + navHeight + 8; // slight offset
    var next = sections.find(function (s) {
      return s.getBoundingClientRect().top + window.scrollY > current;
    });
    if (next) {
      window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY - navHeight, behavior: 'smooth' });
    }
  });

  // Jump to page bottom
  fabEnd.addEventListener('click', function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
}());