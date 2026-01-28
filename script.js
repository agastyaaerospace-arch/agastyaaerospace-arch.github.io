// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Existing hamburger code (keep yours)...

  // New: Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Existing smooth scroll code (keep yours)...
});
  // Close menu on link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Smooth scrolling with navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = target.offsetTop - navbarHeight - 20;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
});
