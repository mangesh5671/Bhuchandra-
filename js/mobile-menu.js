// Mobile Navigation Toggle with Right-to-Left Slide Effect
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.body;

  // Create overlay element for clicking outside to close
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  body.appendChild(overlay);

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      this.classList.toggle('menu-open');
      overlay.classList.toggle('active');

      // Lock/unlock scroll
      body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';

      // Update ARIA
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    });

    overlay.addEventListener('click', function () {
      closeMobileMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    function closeMobileMenu() {
      nav.classList.remove('active');
      menuToggle.classList.remove('menu-open');
      overlay.classList.remove('active');
      body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');

      // Also close all dropdowns
      document.querySelectorAll('.dropdown').forEach(dd => {
        dd.setAttribute('aria-expanded', 'false');
      });
    }
  }

  // DROPDOWN Functionality (Desktop + Mobile)
  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  dropdownButtons.forEach(button => {
    const dropdown = button.closest('.dropdown');
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close others
      dropdownButtons.forEach(btn => {
        if (btn !== button) btn.closest('.dropdown').setAttribute('aria-expanded', 'false');
      });

      const expanded = dropdown.getAttribute('aria-expanded') === 'true';
      dropdown.setAttribute('aria-expanded', !expanded);
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdownButtons.forEach(button => {
        button.closest('.dropdown').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Hover (desktop only)
  const dropdowns = document.querySelectorAll('.dropdown');
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

  // Add scroll animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedElements.forEach(element => observer.observe(element));

  // Header scroll effect
  const header = document.querySelector('.sticky-wrapper');
  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    lastScrollTop = scrollTop;
  });

  // Hero animations
  document.querySelector('.hero .text-block h2')?.classList.add('slide-in-left');
  document.querySelector('.hero .text-block p')?.classList.add('fade-in');
  document.querySelector('.hero .text-block button')?.classList.add('fade-in');

  // Welcome section
  const welcomeContent = document.querySelector('.welcome .content');
  if (welcomeContent) {
    welcomeContent.classList.add('animate-on-scroll', 'slide-in-right');
  }

  // Key objectives card animation
  const cards = document.querySelectorAll('.key-objectives .card');
  cards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.animationDelay = `${0.1 * index}s`;
    card.classList.add('bounce-in');
  });
});

// Hero zoom effect
window.addEventListener('load', function () {
  const heroImage = document.querySelector('.hero .bg-image');
  if (heroImage) {
    heroImage.classList.add('zoom-effect');
  }
});