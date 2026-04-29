document.addEventListener('DOMContentLoaded', () => {
    // Dynamic background blobs for dramatic beautiful effect
    const blobContainer = document.createElement('div');
    blobContainer.className = 'bg-blobs';
    blobContainer.innerHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    `;
    document.body.prepend(blobContainer);

    // Mobile Navigation Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            // Change icon based on state
            menuBtn.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
        });
    }

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Trigger once on load
    setTimeout(revealOnScroll, 100);

    window.addEventListener('scroll', revealOnScroll);

    // Navbar blur/background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 17, 33, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(11, 17, 33, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
