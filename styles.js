// style.js

// Initialize variables for dynamic effects
const overlay = document.getElementById('overlay');
const overlayText = document.querySelector('#overlay h1');
const overlayParagraph = document.querySelector('#overlay p');

// Fade out the overlay when an object is hovered over in the 3D scene
function fadeOverlay() {
    overlay.style.opacity = '0';
    overlay.style.transform = 'translateY(-20px)'; // Slide up
}

// Fade in the overlay when the mouse is not hovering over any 3D objects
function showOverlay() {
    overlay.style.opacity = '1';
    overlay.style.transform = 'translateY(0)'; // Slide down
}

// Adding event listeners to the window object to handle mouse hover effects
window.addEventListener('mousemove', (event) => {
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        fadeOverlay();
    } else {
        showOverlay();
    }
});

// Background color change on text hover
overlayText.addEventListener('mouseover', () => {
    document.body.classList.add('change-bg'); // Add class to change background color
});

overlayText.addEventListener('mouseout', () => {
    document.body.classList.remove('change-bg'); // Remove class to revert background color
});

// Smooth scrolling (if there are any anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Entrance animation for overlay text
window.onload = function() {
    overlayText.style.opacity = '1';
    overlayParagraph.style.opacity = '1';
};
