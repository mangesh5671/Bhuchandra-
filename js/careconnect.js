document.addEventListener('DOMContentLoaded', function() {
  // Simulate AOS (Animate On Scroll) library functionality
  const animateElements = document.querySelectorAll('[data-aos]');
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  function runAnimations() {
    animateElements.forEach(element => {
      if (isInViewport(element)) {
        element.closest('section').classList.add('visible');
      }
    });
  }
  
  // Run once on load
  setTimeout(runAnimations, 300);
  
  // Run on scroll
  window.addEventListener('scroll', runAnimations);
  
  // View More Courses Button
  const viewMoreBtn = document.getElementById('view-more-courses');
  const courseCards = document.querySelectorAll('.course-card');
  
  let showingAll = false;
  
  if (viewMoreBtn && courseCards.length > 6) {
    // Initially hide courses beyond the first 6
    for (let i = 6; i < courseCards.length; i++) {
      courseCards[i].style.display = 'none';
    }
    
    viewMoreBtn.addEventListener('click', function() {
      if (!showingAll) {
        // Show all cards
        for (let i = 6; i < courseCards.length; i++) {
          courseCards[i].style.display = 'block';
          setTimeout(() => {
            courseCards[i].classList.add('fade-in');
          }, (i - 6) * 100);
        }
        viewMoreBtn.textContent = 'Show Less';
      } else {
        // Hide extra cards
        for (let i = 6; i < courseCards.length; i++) {
          courseCards[i].classList.remove('fade-in');
          courseCards[i].style.display = 'none';
        }
        viewMoreBtn.textContent = 'View All Courses';
      }
      
      showingAll = !showingAll;
    });
  }
});