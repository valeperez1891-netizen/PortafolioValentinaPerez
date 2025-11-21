// ===== Smooth Scrolling for Navigation Links =====
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's a hash link (starts with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== Header Scroll Effect =====
    const header = document.querySelector('.header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // ===== Fade In On Scroll Animation =====
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    
    function checkFadeIn() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Check if element is in viewport
            if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check on scroll
    window.addEventListener('scroll', checkFadeIn);
    
    // Check on load
    checkFadeIn();
    
    // ===== Optional: Parallax Effect for Hero Video =====
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            
            if (scrolled < heroHeight) {
                heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
    
    console.log('[v0] SERO STUDIO portfolio loaded successfully');
});
