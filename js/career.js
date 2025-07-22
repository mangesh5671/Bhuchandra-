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
    
    // You would typically send the data to your server here
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you! Your application has been submitted successfully.');
    
    // Reset form and close modal
    event.target.reset();
    closeModal();
}

// Scholarship section functionality
document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const cards = document.querySelectorAll('.scholarship-card');

    applyButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (index === 0 || index === 1) {
                // Job and Opportunities
                alert('Coming Soon! The application will be available shortly.');
            } else if (index === 2) {
                // Volunteer
                openModal();
            }
        });
    });

    // Optional: Add animation for card entrance
    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 100 * index);
        });
    }

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

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});

// Scroll animation on load (optional)
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 500);
});

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

window.addEventListener('scroll', handleScrollAnimations);
