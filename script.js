// script.js for UCCC website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler (placeholder)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message. Nous vous contacterons bientôt.');
    // In a real site, send to server
});