document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('nav a');

  // Dropdown toggle on button click
  dropdownButtons.forEach(button => {
    const dropdown = button.closest('.dropdown');

    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close all other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) d.setAttribute('aria-expanded', 'false');
      });

      const isExpanded = dropdown.getAttribute('aria-expanded') === 'true';
      dropdown.setAttribute('aria-expanded', String(!isExpanded));
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => d.setAttribute('aria-expanded', 'false'));
    }
  });

  // Desktop hover effect
  dropdowns.forEach(dropdown => {
    let hoverTimeout;
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        clearTimeout(hoverTimeout);
        dropdown.setAttribute('aria-expanded', 'true');
      }
    });
    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) {
        hoverTimeout = setTimeout(() => {
          dropdown.setAttribute('aria-expanded', 'false');
        }, 200);
      }
    });
  });

  // Mobile menu toggle
  if (mobileMenuToggle && nav && menuOverlay) {
    mobileMenuToggle.addEventListener('click', function () {
      const isOpen = this.classList.toggle('menu-open');
      nav.classList.toggle('active', isOpen);
      menuOverlay.classList.toggle('active', isOpen);
      this.setAttribute('aria-expanded', String(isOpen));
    });

    menuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu and dropdowns
  function closeMobileMenu() {
    nav.classList.remove('active');
    mobileMenuToggle.classList.remove('menu-open');
    menuOverlay.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');

    dropdowns.forEach(dropdown => {
      dropdown.setAttribute('aria-expanded', 'false');
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname.split("/").pop() || 'index.html';

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');

    if (
      (currentPath === 'index.html' && (href === 'index.html' || href === '/' || href === '')) ||
      href === currentPath || href === `/${currentPath}`
    ) {
      link.classList.add('active');

      const dropdown = link.closest('.dropdown');
      if (dropdown) {
        const trigger = dropdown.querySelector('.dropdown-button');
        if (trigger) trigger.classList.add('active');
      }
    }

    // Click to update active state
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      dropdownButtons.forEach(b => b.classList.remove('active'));

      this.classList.add('active');

      const parentDropdown = this.closest('.dropdown');
      if (parentDropdown) {
        const trigger = parentDropdown.querySelector('.dropdown-button');
        if (trigger) trigger.classList.add('active');
      }
    });
  });
});
