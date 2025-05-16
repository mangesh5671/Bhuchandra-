
function openBlogModal(blogId) {
    event.preventDefault();
    const modal = document.getElementById("blogModal" + blogId);
    modal.style.display = "block";
    
    // Allow time for display block to apply before animating
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
    
    document.body.classList.add('modal-open');
}

function closeBlogModal(blogId) {
    const modal = document.getElementById("blogModal" + blogId);
    modal.classList.remove("show");

    // Wait for animation to finish before hiding
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Match with CSS transition time
    document.body.classList.remove('modal-open');
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show");
        setTimeout(() => {
            event.target.style.display = "none";
            document.body.classList.remove('modal-open');
        }, 300);
    }
};

// Optional: Prevent scroll keys when modal is open
document.addEventListener('keydown', function(event) {
    if (document.body.classList.contains('modal-open')) {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' '].includes(event.key)) {
            event.preventDefault();
        }
    }
});

