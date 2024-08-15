document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');
    
    // Add scroll event listener to change header background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Function to check if an element is in view
    const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    // Add class to elements when they are in view
    const handleScrollAnimations = () => {
        sections.forEach(section => {
            if (isInView(section)) {
                section.classList.add('visible');
            }
        });
    };

    // Initial check and add class if needed
    handleScrollAnimations();

    // Listen to scroll events
    window.addEventListener('scroll', handleScrollAnimations);

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (event) => {
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
