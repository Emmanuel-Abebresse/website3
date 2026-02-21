/* ===================================
   PROJECTS PAGE - INTERACTIVE FEATURES
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // PROJECT FILTERING
    // ===================================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects with animation
            filterProjects(filterValue);
        });
    });
    
    function filterProjects(category) {
        projectCards.forEach((card, index) => {
            const cardCategories = card.getAttribute('data-category');
            
            // Add delay for staggered animation
            setTimeout(() => {
                if (category === 'all' || cardCategories.includes(category)) {
                    // Show card
                    card.classList.remove('filtered-out');
                    card.classList.add('filtered-in');
                    card.style.display = 'block';
                    
                    // Re-trigger fade in animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = `cardFadeIn 0.6s ease-out forwards`;
                    }, 10);
                } else {
                    // Hide card
                    card.classList.remove('filtered-in');
                    card.classList.add('filtered-out');
                    
                    // Hide after animation completes
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            }, index * 50); // Stagger delay
        });
    }
    
    // ===================================
    // SMOOTH SCROLL FOR PROJECT LINKS
    // ===================================
    
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default if it's an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // ===================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards for scroll-triggered animations
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // ===================================
    // PARALLAX EFFECT ON SCROLL
    // ===================================
    
    const heroOrbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Parallax for gradient orbs
        heroOrbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ===================================
    // PROJECT CARD TILT EFFECT (3D)
    // ===================================
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateY(-10px)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ===================================
    // ANIMATED STATISTICS COUNTER
    // ===================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        statsObserver.observe(statNumbers[0].parentElement.parentElement);
    }
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = stat.textContent;
            const isPlus = target.includes('+');
            const isK = target.includes('K');
            const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
            
            let current = 0;
            const increment = numericValue / 50;
            const duration = 2000;
            const stepTime = duration / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                
                let display = Math.floor(current).toString();
                if (isK) display += 'K';
                if (isPlus) display += '+';
                
                stat.textContent = display;
            }, stepTime);
        });
    }
    
    // ===================================
    // LAZY LOADING FOR PROJECT IMAGES
    // ===================================
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Add loading animation
                img.style.filter = 'blur(10px)';
                img.style.transition = 'filter 0.5s ease';
                
                // Simulate image load (in production, this would be actual image loading)
                setTimeout(() => {
                    img.style.filter = 'blur(0)';
                }, 300);
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    document.querySelectorAll('.project-image img').forEach(img => {
        imageObserver.observe(img);
    });
    
    // ===================================
    // PROJECT CARD KEYBOARD NAVIGATION
    // ===================================
    
    projectCards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = card.querySelector('.project-link');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
    
    // ===================================
    // FILTER BAR STICKY BEHAVIOR
    // ===================================
    
    const filterSection = document.querySelector('.filter-section');
    const header = document.querySelector('.header');
    
    if (filterSection && header) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            const headerHeight = header.offsetHeight;
            
            if (currentScroll > headerHeight) {
                filterSection.style.top = '0';
            } else {
                filterSection.style.top = `${headerHeight}px`;
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // ===================================
    // PROJECT SEARCH FUNCTIONALITY (Optional Enhancement)
    // ===================================
    
    function addSearchFeature() {
        const searchHTML = `
            <div class="search-container" style="margin-bottom: 20px; text-align: center;">
                <input type="text" 
                       id="projectSearch" 
                       placeholder="Search projects..." 
                       style="
                           padding: 12px 20px; 
                           border: 2px solid #e5e7eb; 
                           border-radius: 30px; 
                           width: 100%; 
                           max-width: 400px;
                           font-family: 'DM Sans', sans-serif;
                           font-size: 0.95rem;
                       ">
            </div>
        `;
        
        // Uncomment to enable search feature
        // const filterSection = document.querySelector('.filter-section .container');
        // filterSection.insertAdjacentHTML('afterbegin', searchHTML);
        
        const searchInput = document.getElementById('projectSearch');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                
                projectCards.forEach(card => {
                    const title = card.querySelector('.project-title').textContent.toLowerCase();
                    const description = card.querySelector('.project-description').textContent.toLowerCase();
                    const tags = Array.from(card.querySelectorAll('.tag'))
                        .map(tag => tag.textContent.toLowerCase())
                        .join(' ');
                    
                    const matchesSearch = 
                        title.includes(searchTerm) || 
                        description.includes(searchTerm) || 
                        tags.includes(searchTerm);
                    
                    if (matchesSearch) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.opacity = '0.3';
                    }
                });
            });
        }
    }
    
    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for frequent events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Apply throttling to scroll events
    const throttledScroll = throttle(function() {
        // Scroll-based animations here
    }, 100);
    
    window.addEventListener('scroll', throttledScroll);
    
    // ===================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================
    
    // Add ARIA labels dynamically
    filterButtons.forEach(button => {
        const filterType = button.textContent;
        button.setAttribute('aria-label', `Filter projects by ${filterType}`);
    });
    
    // Announce filter changes to screen readers
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.style.position = 'absolute';
            announcement.style.left = '-10000px';
            announcement.textContent = `Filtered by ${this.textContent}`;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        });
    });
    
    // ===================================
    // WINDOW RESIZE HANDLER
    // ===================================
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Reset any position-dependent calculations
            projectCards.forEach(card => {
                card.style.transform = '';
            });
        }, 250);
    });
    
    // ===================================
    // CONSOLE LOG FOR DEBUGGING
    // ===================================
    
    console.log('Projects page loaded successfully');
    console.log(`Found ${projectCards.length} project cards`);
    console.log(`Found ${filterButtons.length} filter buttons`);
});

// ===================================
// EXPORT FUNCTIONS (if needed for other scripts)
// ===================================

window.projectsPage = {
    filterProjects: function(category) {
        // External access to filtering functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === category) {
                btn.click();
            }
        });
    }
};
