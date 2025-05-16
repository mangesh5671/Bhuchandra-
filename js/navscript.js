document.addEventListener('DOMContentLoaded', function() {
  // Get the current path and normalize it
  let path = window.location.pathname;
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index';

  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Remove active class from all links
  navLinks.forEach(link => link.classList.remove('active'));

  // Add active class to the current page's link
  navLinks.forEach(link => {
    let href = link.getAttribute('href');
    if (href.endsWith('.html')) {
      href = href.slice(0, -5);
    }
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Add click handlers for visual feedback before page load
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
