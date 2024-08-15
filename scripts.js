document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('header nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation and animation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (name === '' || email === '' || message === '') {
                showAlert('Please fill out all fields.');
                event.preventDefault(); // Prevent form submission
            } else if (!validateEmail(email)) {
                showAlert('Please enter a valid email address.');
                event.preventDefault(); // Prevent form submission
            } else {
                // Simulate form submission delay
                showLoadingState();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function showAlert(message) {
            const alert = document.createElement('div');
            alert.className = 'alert';
            alert.textContent = message;
            document.body.appendChild(alert);
            setTimeout(() => alert.remove(), 3000);
        }

        function showLoadingState() {
            const button = form.querySelector('button');
            button.textContent = 'Sending...';
            button.disabled = true;

            // Adding a subtle fade-out animation to the form
            form.classList.add('fade-out');
            setTimeout(() => {
                form.reset();
                button.textContent = 'Sent!';
                setTimeout(() => {
                    button.textContent = 'Send Feedback';
                    button.disabled = false;
                    form.classList.remove('fade-out');
                }, 2000);
            }, 1500);
        }
    }

    // Adding dynamic content to the blog section
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        const posts = [
            {
                title: 'How I Create Animations',
                content: 'In this post, I will share some tips and tricks on creating animations.'
            },
            {
                title: 'Top 5 Animation Tools',
                content: 'Here are my top 5 tools for creating amazing animations.'
            },
            {
                title: 'Animating for Beginners',
                content: 'A beginner’s guide to getting started with animation.'
            }
        ];

        const blogContent = posts.map(post => `
            <article class="blog-post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </article>
        `).join('');

        blogSection.innerHTML += blogContent;

        // Adding animations to blog posts
        const blogPosts = document.querySelectorAll('.blog-post');
        blogPosts.forEach(post => {
            post.classList.add('animate');
        });
    }
});
            
