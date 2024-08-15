// style.js

// Entrance animation for the overlay text
window.onload = function() {
    const overlayText = document.getElementById('overlay');
    overlayText.style.transform = 'translateY(0)';
    overlayText.style.opacity = '1';
};

// Fade out the overlay when hovering over 3D objects
function fadeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
}

// Fade in the overlay when not hovering over 3D objects
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '1';
}

// Mouse hover effects for 3D objects
window.addEventListener('mousemove', (event) => {
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        fadeOverlay();

        // Rotate the hovered object slightly for a 3D hover effect
        const hoveredObject = intersects[0].object;
        hoveredObject.rotation.x += 0.05;
        hoveredObject.rotation.y += 0.05;
    } else {
        showOverlay();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Background color change on hover over overlay text
const overlayText = document.querySelector('#overlay h1');
overlayText.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#282828'; // Dark background on hover
});

overlayText.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = ''; // Revert to default background
});

// Additional Animations

// Pulse animation for overlay heading text
overlayText.addEventListener('mouseover', () => {
    overlayText.style.animation = 'pulse 1s infinite';
});

overlayText.addEventListener('mouseout', () => {
    overlayText.style.animation = '';
});

// Pulse animation keyframes
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(styleSheet);

// Entrance animation for the overlay text (sliding up)
overlayText.style.transform = 'translateY(100px)';
overlayText.style.opacity = '0';
overlayText.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';

// Hover effect on 3D objects: Scaling effect
function scaleObject(object, scaleFactor) {
    object.scale.set(scaleFactor, scaleFactor, scaleFactor);
}

window.addEventListener('mousemove', (event) => {
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    // Reset all objects to their original scale
    scene.children.forEach(object => scaleObject(object, 1));

    if (intersects.length > 0) {
        fadeOverlay();
        const hoveredObject = intersects[0].object;
        hoveredObject.rotation.x += 0.05;
        hoveredObject.rotation.y += 0.05;
        scaleObject(hoveredObject, 1.2); // Scale the hovered object
    } else {
        showOverlay();
    }
});

// Parallax scrolling effect for overlay
window.addEventListener('scroll', () => {
    const overlay = document.getElementById('overlay');
    const scrollY = window.scrollY;
    overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
});

// Floating animation for 3D objects (up and down movement)
function floatingAnimation(object, amplitude, speed) {
    const time = Date.now() * 0.001;
    object.position.y = amplitude * Math.sin(time * speed);
}

// Animate floating effect for all 3D objects
function animate() {
    requestAnimationFrame(animate);

    scene.children.forEach(object => {
        floatingAnimation(object, 0.2, 1); // Customize amplitude and speed
    });

    renderer.render(scene, camera);
}
animate();
