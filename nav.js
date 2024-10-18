const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


function downloadResume() {
    // alert('https://drive.google.com/file/d/1KNpJWGJjbiB5TzSet3hkEG6QE_GFVzMD/view?usp=sharing');
    window.open("https://drive.google.com/file/d/1KH0UvlynZSWIqCh7MhzMEuS2SfzpXnR1/view?usp=sharing", '_blank');
    // Replace the alert with your download logic
}

function visitGithub() {
    window.open('https://github.com/jigar012/Food-Website', '_blank');
}


function openEmail() {
    window.location.href = "jigarvaishnav001@gmal.com", "_blank";
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/jigar-vaishnav-9299b831a/", "_blank");
}

function openInstagram() {
    window.open("https://www.instagram.com/__.jigar.__.vaishnav.__/?next=%2F&hl=en", "_blank");
}

function openWhatsApp() {
    window.open("https://wa.me/7023402752", "_blank");
}

// JavaScript can be used for interactive elements if needed
console.log("Page loaded");