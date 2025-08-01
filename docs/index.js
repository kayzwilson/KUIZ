document.addEventListener('DOMContentLoaded', function() {

    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownBtns = document.querySelectorAll('.dropbtn');
    
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
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Pause auto-rotation on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });

   
    
    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight * 0.2) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// Categories Slider Navigation
const categoriesSlider = document.querySelector('.categories-slider');
const prevBtn = document.querySelector('.categories .slider-prev');
const nextBtn = document.querySelector('.categories .slider-next');

nextBtn.addEventListener('click', () => {
    categoriesSlider.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    categoriesSlider.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

// Champions Slider Navigation (if needed)
const championsGrid = document.querySelector('.champions-grid');
const champPrevBtn = document.createElement('button');
const champNextBtn = document.createElement('button');

// Add these buttons to your DOM if you want navigation for champions

// DOM Elements
const authModal = document.getElementById('authModal');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const closeModal = document.querySelector('.close-modal');

// Open Modal (call this when Login/Signup in navbar is clicked)
function openAuthModal() {
  authModal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close Modal
function closeAuthModal() {
  authModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Switch between Login/Signup tabs
loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

// Close modal when clicking X or outside
closeModal.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) closeAuthModal();
});

// Link this to your navbar's Login/Signup button:
 document.getElementById('navbarAuthBtn').addEventListener('click', openAuthModal);

 
