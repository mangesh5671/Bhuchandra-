// Updated navigation script to properly highlight active page
document.addEventListener('DOMContentLoaded', function() {
  // Get the current page filename from the URL
  const path = window.location.pathname;
  const currentPage = path.split("/").pop() || 'index.html'; // Default to index.html if empty
  
  console.log('Current page detected:', currentPage);
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Remove active class from all links first
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to the current page's link
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Debug output to see what we're comparing
    console.log(`Comparing link href "${href}" with current page "${currentPage}"`);
    
    // Handle index/home page case
    if ((currentPage === '' || currentPage === 'index.html') && 
        (href === 'index.html' || href === '/' || href === '')) {
      console.log('Setting active class for homepage link');
      link.classList.add('active');
    }
    // Special case for about.html
    else if (currentPage === 'about.html' && href === 'about.html') {
      console.log('Setting active class for about page link');
      link.classList.add('active');
    }
    // Handle other pages - use includes to check if the href is part of the current URL
    else if (href && currentPage.includes(href)) {
      console.log('Setting active class for other page link');
      link.classList.add('active');
    }
  });
  
  // Add click handlers for visual feedback before page load
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only handle relative links that navigate to other pages on the site
      // This prevents handling external links
      if (link.getAttribute('href').startsWith('http')) {
        return;
      }
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link for immediate visual feedback
      this.classList.add('active');
    });
  });
});
