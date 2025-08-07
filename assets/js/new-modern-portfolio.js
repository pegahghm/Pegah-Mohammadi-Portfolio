/**
 * Modern Portfolio - Next Generation JavaScript
 * Ultra-Modern Interactive Features & Animations
 */

// ===== CORE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    // Initialize cursor first to ensure it's always available
    initializeCustomCursor();
    
    // Then initialize preloader
    initializeModernPreloader();
    
    // Initialize other components
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeParticles();
    initializeTypingEffect();
    initializeProjectFilters();
    initializeContactForm();
    initializeThemeToggle();
    initializeScrollProgress();
    initializeParallax();
    initializeLazyLoading();
    initializeInteractiveBackground();
    initializePDFViewer();
    initializeMediaGallery();
}

// ===== MODERN PRELOADER (CURSOR-FRIENDLY) =====
function initializeModernPreloader() {
    const preloader = document.getElementById('modernPreloader');
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    
    if (!preloader) return;
    
    let progress = 0;
    const loadingMessages = [
        'Initializing portfolio...',
        'Loading animations...',
        'Preparing interface...',
        'Setting up interactions...',
        'Finalizing experience...',
        'Ready!'
    ];
    
    // Simulate loading progress
    const updateProgress = () => {
        if (progress < 100) {
            // Dynamic progress increments for realistic loading
            const increment = Math.random() * (progress < 50 ? 12 : 6) + 3;
            progress = Math.min(100, progress + increment);
            
            // Update progress bar
            if (progressFill) {
                progressFill.style.width = progress + '%';
            }
            
            // Update percentage
            if (progressPercentage) {
                progressPercentage.textContent = Math.floor(progress) + '%';
            }
            
            // Continue updating
            setTimeout(updateProgress, Math.random() * 150 + 100);
        } else {
            // Loading complete
            completeLoading();
        }
    };
    
    // Complete loading and hide preloader
    const completeLoading = () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            
            // Remove preloader after animation completes
            setTimeout(() => {
                preloader.style.display = 'none';
                
                // Clean up DOM completely to avoid cursor conflicts
                setTimeout(() => {
                    if (preloader.parentNode) {
                        preloader.remove();
                    }
                }, 100);
                
                // Initialize reveal animations
                initializeRevealAnimations();
                
                // Add subtle page entrance effect
                document.body.style.opacity = '0';
                document.body.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    document.body.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    document.body.style.opacity = '1';
                    document.body.style.transform = 'scale(1)';
                    
                    // Reset body styles after animation
                    setTimeout(() => {
                        document.body.style.transition = '';
                        document.body.style.opacity = '';
                        document.body.style.transform = '';
                    }, 800);
                }, 50);
                
            }, 800);
        }, 500);
    };
    
    // Start the loading process after a brief delay
    setTimeout(() => {
        updateProgress();
    }, 300);
    
    console.log('🚀 Modern Preloader Initialized (Cursor-Friendly)');
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink?.classList.add('active');
            }
        });
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Scroll to top button
    const scrollBtn = document.querySelector('.scroll-btn');
    const progressCircle = document.querySelector('.progress-circle');
    
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxHeight = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = (scrolled / maxHeight) * 100;
            
            if (scrolled > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
            
            if (progressCircle) {
                const circumference = 163;
                const offset = circumference - (scrollProgress / 100) * circumference;
                progressCircle.style.strokeDashoffset = offset;
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger child animations
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .card, .service-card, .project-card, .timeline-item, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

function initializeRevealAnimations() {
    // Hero text reveal animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('animate-in'), 300);
    }
    if (heroSubtitle) {
        setTimeout(() => heroSubtitle.classList.add('animate-in'), 600);
    }
}

// ===== PARTICLES BACKGROUND =====
function initializeParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.6';
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const distance = Math.sqrt(
                    Math.pow(particle.x - otherParticle.x, 2) + 
                    Math.pow(particle.y - otherParticle.y, 2)
                );
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (150 - distance) / 150})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const texts = [
        'Frontend Developer',
        'UI/UX Designer', 
        'React Specialist',
        'Creative Coder'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ===== PROJECT FILTERS =====
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    // Initialize EmailJS
    emailjs.init("1EYVssSeVxaUDKNHb"); 
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-primary');
        const originalText = submitBtn?.innerHTML;
        
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
        }
        
        // Get form data
        const formData = new FormData(form);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_name: 'Pegah', 
        };
        
        try {
            // Send email using EmailJS
            await emailjs.send(
                'service_w6g86pa',    
                'template_vgaka5t',   
                templateParams
            );
            
            // Success
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            }
            
            form.reset();
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // Error
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed to Send';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            }
            
            showNotification('Failed to send message. Please try again or contact me directly.', 'error');
        }
        
        // Reset button after 3 seconds
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }
        }, 3000);
    });
    
    // Form validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        let isValid = true;
        
        // Clear previous errors
        clearError(e);
        
        // Validate based on field type
        if (field.required && !value) {
            showError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            showError(field, 'Please enter a valid email address');
            isValid = false;
        }
        
        return isValid;
    }
    
    function clearError(e) {
        const field = e.target;
        const errorMsg = field.parentNode.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
        field.classList.remove('error');
    }
    
    function showError(field, message) {
        field.classList.add('error');
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.textContent = message;
        errorMsg.style.color = '#ef4444';
        errorMsg.style.fontSize = '0.875rem';
        errorMsg.style.marginTop = '0.25rem';
        errorMsg.style.display = 'block';
        field.parentNode.appendChild(errorMsg);
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// ===== THEME TOGGLE =====
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        // Animate the toggle
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// ===== SCROLL PROGRESS =====
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        progressBar.style.width = Math.min(progress, 100) + '%';
    });
}

// ===== PARALLAX EFFECTS =====
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// ===== LAZY LOADING =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (!images.length) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== UTILITY FUNCTIONS =====
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
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
window.addEventListener('scroll', throttle(() => {
    // Throttled scroll events are handled here
}, 16));

// Preload critical resources
function preloadResources() {
    const resources = [
        '/assets/img/hero/pegah-1.png',
        '/assets/css/new-modern-portfolio.css'
    ];
    
    resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'image';
        document.head.appendChild(link);
    });
}

preloadResources();

// ===== OPTIMIZED SIMPLE CURSOR =====
function initializeCustomCursor() {
    // Skip on mobile devices
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
        return;
    }
    
    // Remove any existing cursors
    const existingCursors = document.querySelectorAll('.modern-cursor, .cursor-trail, .custom-cursor, .custom-cursor-inner, .cursor-bubble, .cursor-shine-dot, .magical-cursor-main, .magical-cursor-glow, .magic-bubble');
    existingCursors.forEach(cursor => cursor.remove());
    
    // Create simple main cursor
    const cursor = document.createElement('div');
    const cursorGlow = document.createElement('div');
    
    cursor.className = 'simple-cursor';
    cursorGlow.className = 'simple-cursor-glow';
    
    // Optimized cursor with minimal styles
    cursor.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        background: #f472b6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 2147483647;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-out;
        box-shadow: 0 0 15px rgba(244, 114, 182, 0.5);
        will-change: transform;
        mix-blend-mode: difference;
    `;
    
    // Simplified glow effect
    cursorGlow.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, rgba(244, 114, 182, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2147483646;
        transform: translate(-50%, -50%);
        transition: transform 0.2s ease-out;
        will-change: transform;
    `;
    
    document.body.appendChild(cursorGlow);
    document.body.appendChild(cursor);
    
    // Simple bubble trail with limited bubbles
    const bubbles = [];
    const maxBubbles = 8; // Reduced from 20
    let lastBubbleTime = 0;
    
    // Create simple bubble pool
    for (let i = 0; i < maxBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = `simple-bubble-${i}`;
        
        bubble.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: rgba(244, 114, 182, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: ${2147483640 - i};
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            will-change: transform, opacity;
            animation: bubbleFloat 1s ease-out forwards;
        `;
        
        document.body.appendChild(bubble);
        bubbles.push({
            element: bubble,
            active: false,
            timer: 0
        });
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    
    // Optimized mouse tracking with requestAnimationFrame
    let rafId;
    
    function updateCursor() {
        // Direct positioning for main cursor (no smoothing for better responsiveness)
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        // Slight delay for glow (subtle smoothing)
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
        
        rafId = requestAnimationFrame(updateCursor);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Throttled bubble spawning
        const now = Date.now();
        if (now - lastBubbleTime > 150) { // Spawn every 150ms max
            spawnBubble();
            lastBubbleTime = now;
        }
        
        if (!rafId) {
            updateCursor();
        }
    });
    
    // Simple bubble spawn function
    function spawnBubble() {
        const inactiveBubble = bubbles.find(b => !b.active);
        if (!inactiveBubble) return;
        
        inactiveBubble.active = true;
        inactiveBubble.element.style.left = mouseX + 'px';
        inactiveBubble.element.style.top = mouseY + 'px';
        inactiveBubble.element.style.transform = 'translate(-50%, -50%) scale(0)';
        inactiveBubble.element.style.opacity = '1';
        
        // Start animation
        inactiveBubble.element.style.animation = 'none';
        setTimeout(() => {
            inactiveBubble.element.style.animation = 'bubbleFloat 1s ease-out forwards';
        }, 10);
        
        // Reset after animation
        setTimeout(() => {
            inactiveBubble.active = false;
            inactiveBubble.element.style.opacity = '0';
        }, 1000);
    }
    
    // Simplified hover effects
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-link, .social-link, input, textarea, [role="button"], .card, .project-card, .service-card, .honor-btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            isHovering = true;
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = '#ec4899';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.3)';
        });
        
        el.addEventListener('mouseleave', () => {
            isHovering = false;
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = '#f472b6';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // Simple click effect
    document.addEventListener('mousedown', () => {
        cursor.style.transform = `translate(-50%, -50%) scale(${isHovering ? '1.2' : '0.8'})`;
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = `translate(-50%, -50%) scale(${isHovering ? '1.5' : '1'})`;
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorGlow.style.opacity = '0';
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorGlow.style.opacity = '1';
        if (!rafId) {
            updateCursor();
        }
    });
}

// ===== 3D INTERACTIVE BACKGROUND =====
function initializeInteractiveBackground() {
    const interactiveBg = document.getElementById('interactiveBg');
    if (!interactiveBg) {
        console.log('Interactive background element not found');
        return;
    }

    const floatingSpheres = interactiveBg.querySelectorAll('.floating-sphere');
    const geometricShapes = interactiveBg.querySelectorAll('.geometric-shape');
    const particles = interactiveBg.querySelectorAll('.particle');
    
    console.log('Found elements:', {
        spheres: floatingSpheres.length,
        shapes: geometricShapes.length,
        particles: particles.length
    });
    
    let mouseX = 0;
    let mouseY = 0;
    
    // Mouse movement interaction with immediate response
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
        mouseY = (e.clientY / window.innerHeight) * 2 - 1; // -1 to 1
        
        // Apply transformations immediately
        updateElementsOnMouseMove();
    });
    
    // Scroll-based interactions
    window.addEventListener('scroll', () => {
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        updateElementsOnScroll(scrollProgress);
    });
    
    function updateElementsOnMouseMove() {
        // Floating spheres respond to mouse with visible movement
        floatingSpheres.forEach((sphere, index) => {
            const intensity = 1 + (index * 0.2); // Increased intensity
            const x = mouseX * 100 * intensity; // Increased multiplier
            const y = mouseY * 100 * intensity;
            const rotation = (mouseX + mouseY) * 45; // More visible rotation
            const scale = 1 + (Math.abs(mouseX) + Math.abs(mouseY)) * 0.3;
            
            sphere.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + scale + ")";
        });
        
        // Geometric shapes with more pronounced 3D rotation
        geometricShapes.forEach((shape, index) => {
            const intensity = 0.8 + (index * 0.1);
            const rotateX = mouseY * 60 * intensity; // Increased rotation
            const rotateY = mouseX * 60 * intensity;
            const x = mouseX * 40 * intensity;
            const y = mouseY * 40 * intensity;
            const scale = 1 + (Math.abs(mouseX) + Math.abs(mouseY)) * 0.2;
            
            shape.style.transform = "translate(" + x + "px, " + y + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
        });
        
        // Particles with more dramatic movement
        particles.forEach((particle, index) => {
            const intensity = 1.2 + (index * 0.15);
            const x = mouseX * 120 * intensity; // Increased movement
            const y = mouseY * 120 * intensity;
            const scale = 1 + (Math.abs(mouseX) + Math.abs(mouseY)) * 0.5;
            const opacity = 0.7 + Math.abs(mouseX + mouseY) * 0.3;
            
            particle.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
            particle.style.opacity = Math.min(opacity, 1);
        });
    }
    
    function updateElementsOnScroll(scrollProgress) {
        // Floating spheres with scroll-based movement
        floatingSpheres.forEach((sphere, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const driftY = scrollProgress * 200 * direction; // Increased movement
            const rotateValue = scrollProgress * 720 * direction; // More rotation
            const currentMouseTransform = sphere.style.transform || '';
            
            // Combine mouse and scroll effects
            if (currentMouseTransform) {
                sphere.style.transform = currentMouseTransform + " translateY(" + driftY + "px) rotateZ(" + rotateValue + "deg)";
            } else {
                sphere.style.transform = "translateY(" + driftY + "px) rotateZ(" + rotateValue + "deg)";
            }
        });
        
        // Geometric shapes scroll effects
        geometricShapes.forEach((shape, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const scrollRotation = scrollProgress * 360 * direction;
            const currentTransform = shape.style.transform || '';
            
            shape.style.transform = currentTransform + " rotateZ(" + scrollRotation + "deg)";
        });
        
        // Particles scroll momentum
        particles.forEach((particle, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const scrollOffset = scrollProgress * 100 * direction;
            const currentTransform = particle.style.transform || '';
            
            particle.style.transform = currentTransform + " translateY(" + scrollOffset + "px)";
        });
    }
    
    // Test function to verify elements are working
    function testInteraction() {
        console.log('Testing 3D background...');
        
        // Test by applying a visible transformation
        floatingSpheres.forEach((sphere, index) => {
            sphere.style.transform = "translate(" + (index * 10) + "px, " + (index * 10) + "px) scale(1.2)";
            sphere.style.background = '#e91e63'; // Ensure visibility
        });
        
        setTimeout(() => {
            floatingSpheres.forEach(sphere => {
                sphere.style.transform = '';
            });
        }, 2000);
    }
    
    // Run test after a short delay
    setTimeout(testInteraction, 1000);
    
    console.log('Interactive background initialized successfully');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 
                    type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 
                    'linear-gradient(135deg, #3b82f6, #2563eb)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-size: 0.875rem;
        backdrop-filter: blur(10px);
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== PDF VIEWER =====
function initializePDFViewer() {
    const pdfModal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    const pdfModalTitle = document.getElementById('pdfModalTitle');
    const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');
    const pdfCloseBtn = document.getElementById('pdfCloseBtn');
    const viewPdfBtns = document.querySelectorAll('.view-pdf');

    if (!pdfModal || !pdfFrame) return;

    // Open PDF viewer
    viewPdfBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfPath = btn.getAttribute('data-pdf');
            const semester = btn.getAttribute('data-semester');
            
            if (pdfPath && semester) {
                // Update modal content
                pdfModalTitle.textContent = `${semester} - Dean's Honor List Certificate`;
                pdfFrame.src = pdfPath;
                pdfDownloadBtn.href = pdfPath;
                pdfDownloadBtn.download = `Pegah_${semester.replace(' ', '_')}_Honors.pdf`;
                
                // Show modal
                pdfModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Add loading state
                pdfFrame.style.opacity = '0';
                setTimeout(() => {
                    pdfFrame.style.opacity = '1';
                }, 500);
            }
        });
    });

    // Close PDF viewer
    function closePDFModal() {
        pdfModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear iframe after animation
        setTimeout(() => {
            pdfFrame.src = '';
        }, 300);
    }

    // Close button
    pdfCloseBtn.addEventListener('click', closePDFModal);

    // Click outside to close
    pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) {
            closePDFModal();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
            closePDFModal();
        }
    });

    // Handle iframe load errors
    pdfFrame.addEventListener('error', () => {
        pdfFrame.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #666; text-align: center; padding: 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; color: #f59e0b;"></i>
                <h3 style="margin-bottom: 1rem;">Certificate Not Available</h3>
                <p>This certificate is not yet available for viewing.</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">Please use the download link if available.</p>
            </div>
        `;
    });
}

// ===== ENHANCED MEDIA GALLERY =====
function initializeMediaGallery() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const playOverlays = document.querySelectorAll('.play-overlay');
    const lightbox = document.getElementById('mediaLightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxVideo = document.querySelector('.lightbox-video');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    if (!lightbox) return; // Not on a project detail page
    
    let currentMediaIndex = 0;
    let filteredItems = Array.from(galleryItems);
    
    // Filter functionality
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Update filtered items for lightbox navigation
            setTimeout(() => {
                filteredItems = Array.from(galleryItems).filter(item => 
                    getComputedStyle(item).display !== 'none'
                );
            }, 350);
        });
    });
    
    // Video play overlay functionality
    playOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            e.stopPropagation();
            const video = overlay.parentElement.querySelector('video');
            if (video) {
                openLightbox(overlay.closest('.gallery-item'), true);
            }
        });
    });
    
    // Gallery item click functionality
    galleryItems.forEach((item, index) => {
        if (!item.classList.contains('live-demo')) {
            item.addEventListener('click', () => {
                currentMediaIndex = filteredItems.indexOf(item);
                openLightbox(item);
            });
        }
    });
    
    // Open lightbox
    function openLightbox(item, autoplay = false) {
        const img = item.querySelector('img');
        const video = item.querySelector('video');
        const title = item.querySelector('.gallery-overlay h3')?.textContent || 'Media';
        const description = item.querySelector('.gallery-overlay p')?.textContent || '';
        
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        
        if (video) {
            // Show video
            lightboxImage.style.display = 'none';
            lightboxVideo.style.display = 'block';
            lightboxVideo.src = video.querySelector('source').src;
            if (autoplay) {
                lightboxVideo.play();
            }
        } else if (img) {
            // Show image
            lightboxVideo.style.display = 'none';
            lightboxImage.style.display = 'block';
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
        }
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Pause any playing video
        lightboxVideo.pause();
        lightboxVideo.src = '';
    }
    
    // Lightbox navigation
    function navigateLightbox(direction) {
        const visibleItems = filteredItems.filter(item => 
            !item.classList.contains('live-demo') && 
            getComputedStyle(item).display !== 'none'
        );
        
        if (direction === 'next') {
            currentMediaIndex = (currentMediaIndex + 1) % visibleItems.length;
        } else {
            currentMediaIndex = (currentMediaIndex - 1 + visibleItems.length) % visibleItems.length;
        }
        
        openLightbox(visibleItems[currentMediaIndex]);
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    
    document.querySelector('.lightbox-next')?.addEventListener('click', () => {
        navigateLightbox('next');
    });
    
    document.querySelector('.lightbox-prev')?.addEventListener('click', () => {
        navigateLightbox('prev');
    });
    
    // Close on overlay click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                navigateLightbox('next');
                break;
            case 'ArrowLeft':
                navigateLightbox('prev');
                break;
        }
    });
    
    // Initialize gallery items with transition styles
    galleryItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}
