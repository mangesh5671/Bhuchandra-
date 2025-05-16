/* Animation script for scroll reveal */
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const checkIfInView = () => {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', checkIfInView);
  checkIfInView();
});