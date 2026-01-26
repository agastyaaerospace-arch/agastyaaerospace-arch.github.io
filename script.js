// Set the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Example of adding interactivity: Highlighting sections on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const scrollPosition = window.scrollY + 50;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector('nav ul li a.active').classList.remove('active');
            document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
        }
    });
});

// Example of interactive element: Form validation (if you have a contact form)
function validateForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;

        if (name === '' || email === '') {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
}
