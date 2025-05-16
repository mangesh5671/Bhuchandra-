// Mobile Navigation Toggle with Right-to-Left Slide Effect
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.body;
  
  // Create overlay element for clicking outside to close
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  body.appendChild(overlay);
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      this.classList.toggle('menu-open');
      overlay.classList.toggle('active');
      
      // Prevent body scrolling when menu is open
      if (nav.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
      
      // Accessibility
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
      nav.classList.remove('active');
      menuToggle.classList.remove('menu-open');
      overlay.classList.remove('active');
      body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
    
    // Close menu when clicking escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('menu-open');
        overlay.classList.remove('active');
        body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking a nav link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        menuToggle.classList.remove('menu-open');
        overlay.classList.remove('active');
        body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // Add scroll animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Header scroll effect
  const header = document.querySelector('.sticky-wrapper');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    lastScrollTop = scrollTop;
  });
});

// Zoom effect for hero background
window.addEventListener('load', function() {
  const heroImage = document.querySelector('.hero .bg-image');
  if (heroImage) {
    heroImage.classList.add('zoom-effect');
  }
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', function() {
  // Hero section animations
  document.querySelector('.hero .text-block h2')?.classList.add('slide-in-left');
  document.querySelector('.hero .text-block p')?.classList.add('fade-in');
  document.querySelector('.hero .text-block button')?.classList.add('fade-in');
  
  // Welcome section animations
  const welcomeContent = document.querySelector('.welcome .content');
  if (welcomeContent) {
    welcomeContent.classList.add('animate-on-scroll', 'slide-in-right');
  }
  
  // Card animations
  const cards = document.querySelectorAll('.key-objectives .card');
  cards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.animationDelay = `${0.1 * index}s`;
    card.classList.add('bounce-in');
  });
});