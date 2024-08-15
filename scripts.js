document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous feedback
        feedback.textContent = '';
        
        // Simulate form submission and provide feedback
        setTimeout(() => {
            // Example success message; replace with actual form handling logic
            feedback.textContent = 'Your message has been sent successfully!';
            feedback.className = 'form-feedback success';
            
            // Reset the form after submission
            form.reset();
        }, 1000); // Simulated delay for form submission
    });
});
