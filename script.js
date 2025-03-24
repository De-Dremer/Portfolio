const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
});
