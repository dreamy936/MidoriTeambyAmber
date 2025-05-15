// Change navbar background color when scrolling
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.style.backgroundColor = 'var(--primary-green)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}; 