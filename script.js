// This is scroll nabvar

const header = document.querySelector('.header');

// Add event listener for scroll events
window.addEventListener('scroll', () => {
    // Check if the page is scrolled more than 50px
    if (window.scrollY > 50) {
        // Add the 'shadow' class to navbar
        header.classList.add('shadow');
    } else {
        // Remove the 'shadow' class if less than 50px scrolled
        header.classList.remove('shadow');
    }
});


// This is click menubar

document.getElementById('navToggleBtn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});
