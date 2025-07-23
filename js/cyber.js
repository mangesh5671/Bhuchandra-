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






// Enhanced animation system
        const posts = document.querySelectorAll('.instagram-post');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100); // Staggered animation
                }
            });
        }, observerOptions);

        // Initialize posts
        posts.forEach((post, index) => {
            post.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(post);
        });

        // Enhanced loading simulation
        function loadInstagramPosts() {
            console.log('🔄 Loading Instagram posts...');
            
            // Simulate API call
            setTimeout(() => {
                console.log('✅ Instagram posts loaded successfully!');
                
                // Add pulse effect to new posts
                const newPosts = document.querySelectorAll('.instagram-post:not(.loaded)');
                newPosts.forEach(post => {
                    post.classList.add('loaded');
                });
            }, 1000);
        }

        // Performance optimization
        let ticking = false;
        
        function updateAnimations() {
            // Update any scroll-based animations here
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateAnimations);
                ticking = true;
            }
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', () => {
            loadInstagramPosts();
            
            // Add smooth scrolling behavior
            document.documentElement.style.scrollBehavior = 'smooth';
        });

        // Add interaction feedback
        posts.forEach(post => {
            post.addEventListener('mouseenter', () => {
                post.style.zIndex = '10';
            });
            
            post.addEventListener('mouseleave', () => {
                post.style.zIndex = '1';
            });
        });

        // Handle scroll events efficiently
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(requestTick, 10);
        });
