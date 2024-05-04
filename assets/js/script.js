// Toggle Class Avtive 
const navbarNav = document.querySelector('.navbar-nav');

// Sidebar di Klik
document.querySelector('#bars').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Click diluar sidebar unutk menghilangkna Nav
const bars = document.querySelector('#bars');

document.addEventListener('click', function (e) {
    if (!bars.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})