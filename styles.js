document.addEventListener("DOMContentLoaded", function() {
    // Select all project elements
    const projects = document.querySelectorAll('.project');

    // Add hover effect to projects
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.backgroundColor = '#efefef';
        });

        project.addEventListener('mouseleave', () => {
            project.style.backgroundColor = '#f9f9f9';
        });
    });

    // Add form submission animation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Add a loading effect
            form.querySelector('button').textContent = 'Sending...';
            form.querySelector('button').disabled = true;

            // Simulate form submission delay
            setTimeout(() => {
                form.reset();
                form.querySelector('button').textContent = 'Sent!';
                form.querySelector('button').disabled = false;
                // After a short delay, change button text back to normal
                setTimeout(() => {
                    form.querySelector('button').textContent = 'Send Feedback';
                }, 2000);
            }, 1500);
        });
    }
});
