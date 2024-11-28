// JavaScript for Restaurant Website

// Variables for DOM Elements
const menuIcon = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const scrollToTopButton = document.createElement('button'); // Scroll-to-top button
scrollToTopButton.textContent = '↑';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

// Toggle Navbar Visibility
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

// Close Navbar When Scrolling
window.addEventListener('scroll', () => {
  menuIcon.classList.remove('fa-times');
  navbar.classList.remove('active');

  // Show/Hide Scroll-to-Top Button
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Scroll-to-Top Button Functionality
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-container');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
};

// Initialize the First Slide
showSlide(currentSlide);

// Next Slide
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Previous Slide
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Form Validation Example
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Form submitted successfully!');
    form.reset();
  });
}
