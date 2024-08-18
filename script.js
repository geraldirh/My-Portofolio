// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Image Gallery
const galleryImages = document.querySelectorAll('.portfolio-item img');
galleryImages.forEach(image => {
  image.addEventListener('click', event => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <span class="close">&times;</span>
    `;
    document.body.appendChild(modal);
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', () => {
      modal.remove();
    });
  });
});

// Contact Form Validation
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  if (name && email && message) {
    // Kirimkan form ke server
    console.log('Form submitted successfully!');
  } else {
    alert('Please fill in all fields!');
  }
});

// Responsive Navigation
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});