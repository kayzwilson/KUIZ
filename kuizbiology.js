// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});

// Mobile dropdown toggle
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

});
const darkModeToggle = document.getElementById('darkModeToggle');
const icon = darkModeToggle.querySelector('i');
darkModeToggle.addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
 
  
  // Update icon and save preference
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('darkMode', 'disabled');
  }
});




const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.setAttribute('data-theme', 
    document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  );
  toggle.querySelector('i').classList.toggle('fa-sun');
});

// Animate progress bar on scroll
window.addEventListener('scroll', () => {
  const progressFill = document.querySelector('.progress-fill');
  const position = progressFill.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;
  
  if (position < screenPosition) {
    progressFill.style.width = '65%';
  }
});

// Dark Mode Toggle
// Dark Mode Toggle


// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Mobile Menu Toggle

// Close menu when clicking a link (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Toggle Function
