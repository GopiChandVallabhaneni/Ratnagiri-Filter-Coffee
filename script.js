// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Add 'scroll' event listener to change active link on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Loop through sections to check which one is currently in the viewport
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all links, then add it to the current section link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
