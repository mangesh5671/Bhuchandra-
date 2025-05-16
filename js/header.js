// Enhanced navigation script that reliably highlights the current page tab
document.addEventListener('DOMContentLoaded', function() {
  // Function to get the current page
  function getCurrentPage() {
    // Get the pathname from URL (e.g., /about.html or /index.html)
    const path = window.location.pathname;
    
    // Extract just the filename
    let currentPage = path.split("/").pop();
    
    // If empty (like / or empty string), treat as index.html
    if (!currentPage) {
      currentPage = 'index.html';
    }
    
    console.log('Current page detected:', currentPage);
    return currentPage;
  }
  
  // Get the current page
  const currentPage = getCurrentPage();
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // First remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Function to check if a link should be active
  function shouldBeActive(href, currentPage) {
    // Clean up the href and currentPage for comparison
    href = href.replace(/^\//, ''); // Remove leading slash if any
    
    // Handle index/home page special cases
    if ((currentPage === 'index.html' || currentPage === '') && 
        (href === 'index.html' || href === '/' || href === '')) {
      return true;
    }
    
    // Direct match
    if (href === currentPage) {
      return true;
    }
    
    // Handle case where href might not have .html extension
    const hrefBase = href.replace(/\.html$/, '');
    const currentBase = currentPage.replace(/\.html$/, '');
    
    if (hrefBase === currentBase && hrefBase !== '') {
      return true;
    }
    
    return false;
  }
  
  // Apply active class to the appropriate link
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href && shouldBeActive(href, currentPage)) {
      console.log('Setting active class for:', href);
      link.classList.add('active');
    }
  });
});
