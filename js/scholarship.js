// Scholarship section functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any interactive elements in scholarship section
  const applyButtons = document.querySelectorAll('.apply-btn');
  const contactBtn = document.querySelector('.contact-btn');
  
  // Add event listeners to Apply buttons
  applyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      // You can add AJAX form submission or redirect to application form
      alert('Application form will open soon. Thank you for your interest!');
    });
  });
  
  // Add event listener to Contact Us button
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      // Redirect to contact page or scroll to contact form if on same page
      window.location.href = 'contact_us.html';
    });
  }
  
  // Optional: Add animation for card entrance
  function animateCards() {
    const cards = document.querySelectorAll('.scholarship-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 100 * index);
    });
  }
  
  // Check if cards are in viewport and animate them
  function checkScroll() {
    const section = document.querySelector('.scholarships-section');
    if (!section) return;
    
    const sectionPosition = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sectionPosition.top < windowHeight && sectionPosition.bottom >= 0) {
      animateCards();
      window.removeEventListener('scroll', checkScroll);
    }
  }
  
  // Add animation class to CSS
  const style = document.createElement('style');
  style.textContent = `
    .scholarship-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .scholarship-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
  
  // Check scroll position on load and scroll
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load
});