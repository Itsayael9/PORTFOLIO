// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations to the hero button on hover
const heroButton = document.querySelector('.btn');

heroButton.addEventListener('mouseover', () => {
    heroButton.style.transform = 'scale(1.1)';
    heroButton.style.transition = 'transform 0.3s';
});

heroButton.addEventListener('mouseout', () => {
    heroButton.style.transform = 'scale(1)';
});
