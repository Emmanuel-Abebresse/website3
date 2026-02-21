/* ===================================
   CONTACT PAGE - INTERACTIVE FEATURES
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // ANIMATED MAP CANVAS BACKGROUND
    // ===================================
    
    const canvas = document.getElementById('mapCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Map animation variables
        const points = [];
        const numPoints = 50;
        const connectionDistance = 150;
        
        // Create random points
        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw points
            points.forEach((point, i) => {
                // Update position
                point.x += point.vx;
                point.y += point.vy;
                
                // Bounce off edges
                if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
                if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
                
                // Draw point
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(16, 185, 129, 0.6)';
                ctx.fill();
                
                // Draw connections
                points.forEach((otherPoint, j) => {
                    if (i !== j) {
                        const dx = point.x - otherPoint.x;
                        const dy = point.y - otherPoint.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < connectionDistance) {
                            ctx.beginPath();
                            ctx.moveTo(point.x, point.y);
                            ctx.lineTo(otherPoint.x, otherPoint.y);
                            const opacity = (1 - distance / connectionDistance) * 0.3;
                            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                });
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // ===================================
    // LEAFLET INTERACTIVE MAP
    // ===================================
    
    const mapElement = document.getElementById('contactMap');
    if (mapElement && typeof L !== 'undefined') {
        // Initialize map centered on Bracknell, England
        const map = L.map('contactMap', {
            zoomControl: true,
            scrollWheelZoom: false
        }).setView([51.4154, -0.7493], 13);
        
        // Add OpenStreetMap tiles with custom styling
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 19
        }).addTo(map);
        
        // Custom marker icon
        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `
                <div style="
                    width: 40px; 
                    height: 40px; 
                    background: linear-gradient(135deg, #10b981, #14b8a6);
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    border: 3px solid white;
                    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <svg style="
                        width: 20px; 
                        height: 20px; 
                        transform: rotate(45deg);
                        color: white;
                    " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
        
        // Add marker
        const marker = L.marker([51.4154, -0.7493], { icon: customIcon }).addTo(map);
        
        // Add popup
        marker.bindPopup(`
            <div style="font-family: 'DM Sans', sans-serif; text-align: center; padding: 10px;">
                <strong style="font-size: 1.1rem; color: #1e293b;">Emmanuel Abebresse</strong><br>
                <span style="color: #64748b; font-size: 0.9rem;">Bracknell, England</span><br>
                <a href="https://maps.google.com/?q=Bracknell+England" target="_blank" 
                   style="color: #10b981; text-decoration: none; font-weight: 600; font-size: 0.85rem; margin-top: 8px; display: inline-block;">
                    Open in Google Maps →
                </a>
            </div>
        `);
        
        // Animate marker on load
        setTimeout(() => {
            marker.openPopup();
        }, 1000);
        
        // Update coordinates on map move
        const coordsDisplay = document.getElementById('mapCoords');
        if (coordsDisplay) {
            map.on('move', function() {
                const center = map.getCenter();
                coordsDisplay.textContent = `${center.lat.toFixed(4)}° N, ${Math.abs(center.lng).toFixed(4)}° W`;
            });
        }
        
        // Add scale control
        L.control.scale({ imperial: false }).addTo(map);
    }
    
    // ===================================
    // FORM VALIDATION & SUBMISSION
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const formMessage = document.getElementById('formMessage');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    // Character counter
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            if (count > 1000) {
                charCount.style.color = '#ef4444';
                this.value = this.value.substring(0, 1000);
            } else {
                charCount.style.color = '#94a3b8';
            }
        });
    }
    
    // Form validation
    function validateForm() {
        let isValid = true;
        const errors = [];
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate name
        if (name === '') {
            errors.push('Name is required');
            isValid = false;
        } else if (name.length < 2) {
            errors.push('Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            errors.push('Email is required');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }
        
        // Validate service
        if (service === '') {
            errors.push('Please select a service');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            errors.push('Message is required');
            isValid = false;
        } else if (message.length < 20) {
            errors.push('Message must be at least 20 characters');
            isValid = false;
        }
        
        return { isValid, errors };
    }
    
    // Show message
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
    
    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate
        const validation = validateForm();
        
        if (!validation.isValid) {
            showMessage(validation.errors.join('. '), 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate API call (replace with actual endpoint)
        try {
            // In production, replace this with your actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            showMessage('Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            charCount.textContent = '0';
            
            // Track form submission (Google Analytics, etc.)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': data.service
                });
            }
            
        } catch (error) {
            // Error
            showMessage('Oops! Something went wrong. Please try again or email me directly.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Real-time field validation
    const requiredFields = ['name', 'email', 'service', 'message'];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#e2e8f0';
                }
            });
            
            field.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.style.borderColor = '#10b981';
                }
            });
        }
    });
    
    // ===================================
    // FAQ ACCORDION
    // ===================================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Open first FAQ by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
    
    // ===================================
    // SMOOTH SCROLL TO FORM
    // ===================================
    
    const quickContactLinks = document.querySelectorAll('.quick-contact-item');
    
    quickContactLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const formSection = document.querySelector('.form-section');
                if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Focus first field
                    setTimeout(() => {
                        document.getElementById('name').focus();
                    }, 500);
                }
            });
        }
    });
    
    // ===================================
    // INTERSECTION OBSERVER ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.contact-card, .faq-item, .form-section, .map-container');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // ===================================
    // COPY COORDINATES TO CLIPBOARD
    // ===================================
    
    const coordsElement = document.getElementById('mapCoords');
    
    if (coordsElement) {
        coordsElement.style.cursor = 'pointer';
        coordsElement.title = 'Click to copy coordinates';
        
        coordsElement.addEventListener('click', function() {
            const coords = this.textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(coords).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = '#10b981';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '#1e293b';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    }
    
    // ===================================
    // FORM AUTOSAVE (localStorage)
    // ===================================
    
    const formFields = ['name', 'email', 'phone', 'company', 'service', 'message'];
    
    // Save to localStorage on input
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            // Load saved value
            const savedValue = localStorage.getItem(`contact_${fieldId}`);
            if (savedValue) {
                field.value = savedValue;
                if (fieldId === 'message') {
                    charCount.textContent = savedValue.length;
                }
            }
            
            // Save on input
            field.addEventListener('input', function() {
                localStorage.setItem(`contact_${fieldId}`, this.value);
            });
        }
    });
    
    // Clear localStorage on successful submission
    contactForm.addEventListener('submit', function() {
        setTimeout(() => {
            formFields.forEach(fieldId => {
                localStorage.removeItem(`contact_${fieldId}`);
            });
        }, 2100);
    });
    
    // ===================================
    // PHONE NUMBER FORMATTING
    // ===================================
    
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format as UK number if it starts with 44
            if (value.startsWith('44')) {
                value = value.substring(2);
                e.target.value = `+44 ${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 10)}`.trim();
            }
        });
    }
    
    // ===================================
    // SERVICE FIELD ICON UPDATE
    // ===================================
    
    const serviceSelect = document.getElementById('service');
    
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function() {
            // Add visual feedback
            this.style.borderColor = '#10b981';
            this.style.background = 'rgba(16, 185, 129, 0.05)';
            
            setTimeout(() => {
                this.style.background = '#ffffff';
            }, 300);
        });
    }
    
    // ===================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================
    
    // Trap focus in form when focused
    const firstField = document.getElementById('name');
    const lastField = submitBtn;
    
    lastField.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            firstField.focus();
        }
    });
    
    firstField.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            lastField.focus();
        }
    });
    
    // Announce form errors to screen readers
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'alert');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // ===================================
    // PERFORMANCE MONITORING
    // ===================================
    
    console.log('Contact page loaded successfully');
    console.log('Map initialized:', mapElement ? 'Yes' : 'No');
    console.log('Form ready:', contactForm ? 'Yes' : 'No');
    
    // Log page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page fully loaded in ${Math.round(loadTime)}ms`);
    });
});

// ===================================
// EXPORT FOR EXTERNAL ACCESS
// ===================================

window.contactPage = {
    scrollToForm: function() {
        const formSection = document.querySelector('.form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },
    
    prefillForm: function(data) {
        if (data.name) document.getElementById('name').value = data.name;
        if (data.email) document.getElementById('email').value = data.email;
        if (data.phone) document.getElementById('phone').value = data.phone;
        if (data.company) document.getElementById('company').value = data.company;
        if (data.service) document.getElementById('service').value = data.service;
        if (data.message) document.getElementById('message').value = data.message;
    }
};
