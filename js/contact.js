document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the data to a server
      // For now, we'll just show an alert that the form was submitted
      alert(`Thank you, ${name}! Your message has been received. We will get back to you soon.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
});