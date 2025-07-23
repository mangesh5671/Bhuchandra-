// Dropdown functionality
const dropdownButtons = document.querySelectorAll('nav button');

if (dropdownButtons.length > 0) {
  dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      console.log('Dropdown clicked:', button.textContent.trim());
    });
  });
}

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');
const menuOverlay = document.querySelector('.menu-overlay');

if (mobileMenuToggle && nav && menuOverlay) {
  mobileMenuToggle.addEventListener('click', function () {
    this.classList.toggle('menu-open');
    nav.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    this.setAttribute('aria-expanded', this.classList.contains('menu-open'));
  });

  menuOverlay.addEventListener('click', function () {
    mobileMenuToggle.classList.remove('menu-open');
    nav.classList.remove('active');
    this.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  });
}

// Navigation active state handler
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  const navLinks = document.querySelectorAll('nav a');

  if (navLinks.length > 0) {
    navLinks.forEach(link => link.classList.remove('active'));

    navLinks.forEach(link => {
      const href = link.getAttribute('href');

      if ((page === '' || page === '/' || page === 'index.html') &&
          (href === 'index.html' || href === '/' || href === '')) {
        link.classList.add('active');
      } else if (href === page || href === `/${page}`) {
        link.classList.add('active');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
});
