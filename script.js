document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card, .hero-content, .about-container').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Asset paths for images
    document.getElementById('hero-img').src = 'store_hero.png';
    document.getElementById('cat-chairs').src = 'plastic_chairs.png';
    document.getElementById('cat-trunks').src = 'https://placehold.co/600x400/2a9d8f/ffffff?text=Storage+Trunks';
    document.getElementById('cat-plastic-fiber').src = 'https://placehold.co/600x400/e76f51/ffffff?text=Plastic+%26+Fiber+Products';

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
