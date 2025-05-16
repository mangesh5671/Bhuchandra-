// Save this as navscript.js and include it in your HTML files

document.addEventListener('DOMContentLoaded', function() {
  // Get the current page filename from the URL
  const path = window.location.pathname;
  const currentPage = path.split("/").pop() || 'index.html'; // Default to index.html if empty
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Remove active class from all links first
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to the current page's link
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Handle index/home page case
    if ((currentPage === '' || currentPage === 'index.html') && 
        (href === 'index.html' || href === '/' || href === '')) {
      link.classList.add('active');
    }
    // Handle other pages - exact match
    else if (href === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Add click handlers for visual feedback before page load
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link for immediate visual feedback
      this.classList.add('active');
    });
  });
});