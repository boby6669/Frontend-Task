// Mobile menu toggle
// Targets: #menuIcon (button/icon) and .nav-links (nav container)

(function () {
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');
  const focusableLinks = navLinks ? navLinks.querySelectorAll('a') : [];
  const navClose = document.getElementById('navClose');

  if (!menuIcon || !navLinks) return;

  // Make menu icon keyboard accessible
  menuIcon.setAttribute('role', 'button');
  menuIcon.setAttribute('tabindex', '0');
  menuIcon.setAttribute('aria-controls', 'navLinks');
  menuIcon.setAttribute('aria-expanded', 'false');

  function openMenu() {
    navLinks.classList.add('active');
    menuIcon.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // move focus to first link
    if (focusableLinks.length) focusableLinks[0].focus();
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    menuIcon.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuIcon.focus();
  }

  function toggleMenu() {
    if (navLinks.classList.contains('active')) closeMenu();
    else openMenu();
  }

  menuIcon.addEventListener('click', toggleMenu);
  menuIcon.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close menu when a nav link is clicked (mobile)
  focusableLinks.forEach((a) => {
    a.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) closeMenu();
    });
  });

  // Close button inside panel
  if (navClose) {
    navClose.addEventListener('click', function () {
      if (navLinks.classList.contains('active')) closeMenu();
    });
  }

  // Close with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close menu on resize to desktop widths
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
})();
