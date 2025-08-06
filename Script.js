// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

darkToggle.addEventListener('click', () => {
  body.setAttribute('data-theme', 
    body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  darkToggle.textContent = body.getAttribute('data-theme') === 'dark' 
    ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Animation
const fadeElements = document.querySelectorAll('.scroll-fade');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));


// Form Submission Handling
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success show';
    successMessage.innerHTML = `
      <h3>Message Sent Successfully!</h3>
      <p>Thank you for reaching out. I'll get back to you soon.</p>
    `;
    
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    contactForm.reset();
    
    // Scroll to success message
    setTimeout(() => {
      successMessage.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });
}