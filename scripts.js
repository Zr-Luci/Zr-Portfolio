document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for ripple effect
    const buttons = document.querySelectorAll('form button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600); // Match the animation duration
        });
    });

    // JavaScript for blog post animations
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach((post, index) => {
        setTimeout(() => {
            post.classList.add('animate');
        }, index * 300); // Staggered animation
    });
});
