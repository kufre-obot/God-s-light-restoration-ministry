// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.8,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple form validation
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
  }
});

// Add some interactivity to social links
// document.querySelectorAll('.social-link').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const platform = this.classList.contains('youtube') ? 'YouTube' : 
//     this.classList.contains('facebook') ? 'Facebook' : 
//     this.classList.contains('instagram') ? 'Instagram' : 'Podcast';
//     alert(`Opening ${platform}... (This would open the actual social media page)`);
//   });
// });

// Live prayer button functionality
document.querySelector('.live-prayer-btn').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Connecting you to live prayer session... (This would open a live stream or prayer room)');
});

const isLive = false; // change this to false when no live stream is active

document.addEventListener("DOMContentLoaded", function () {
  const liveStream = document.getElementById("liveStreamContainer");
  const offlineMessage = document.getElementById("offlineMessage");

  if (isLive) {
    liveStream.style.display = "block";
    offlineMessage.style.display = "none";
  } else {
    liveStream.style.display = "none";
    offlineMessage.style.display = "block";
  }
});

// Join Church button functionality
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Welcome! You would now be redirected to a membership form or contact page.');
});