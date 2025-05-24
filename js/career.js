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



        // Modal functionality
        function openModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Close modal when clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Form submission handler
        function handleSubmit(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(event.target);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address')
            };
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you! Your application has been submitted successfully.');
            
            // Reset form and close modal
            event.target.reset();
            closeModal();
        }

        // Smooth animations on scroll (optional)
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            // Set initial state for animations
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            });
            
            // Trigger animations
            setTimeout(() => {
                elements.forEach(element => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                });
            }, 500);
        });

        // Handle scroll animations
        window.addEventListener('scroll', handleScrollAnimations);