// Smooth scrolling to sections when clicking on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for the fixed navigation bar
            behavior: 'smooth'
        });
    });
});

// Implement carousel for the "About Me" section
// A library like Slick Carousel will be needed for this.

// Implement a grid of projects in the "Portfolio" section

// Implement client logos and project descriptions in the "Clients" section

// Implement form validation and submission in the "Contact" section

// Automatically scroll the carousel
const carousel = document.querySelector('.carousel');
let scrollInterval;

function startAutoScroll() {
    scrollInterval = setInterval(() => {
        // Scroll to the next item in the carousel
        const currentScrollLeft = carousel.scrollLeft;
        const itemWidth = carousel.querySelector('.service').offsetWidth; // Assuming each item has the same width
        
        // Calculate the next scroll position, considering looping
        const nextScrollLeft = currentScrollLeft + itemWidth;
        
        // Check if we've reached the end of the carousel
        if (nextScrollLeft >= carousel.scrollWidth) {
            // Reset to the beginning
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft = nextScrollLeft;
        }
    }, 3000); // Adjust the scroll interval (in milliseconds) as needed
}

function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Start auto-scroll when the page loads
startAutoScroll();

// Pause auto-scroll when the user interacts with the carousel
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);
