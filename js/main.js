// Andrea Di Lauro Portfolio - Main JavaScript
// Minimal, accessible, performance-focused

(function() {
    'use strict';

    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initContactForm();
        initLightbox();
        initLazyLoading();
        initSmoothScroll();
        initLanguageSwitcher();
    });

    // Mobile Navigation
    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isActive);

            // Trap focus in mobile menu when open
            if (!isActive) {
                navLinks[0]?.focus();
            }
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Contact Form Handling
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            try {
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showFormMessage('Message sent successfully! Thank you for getting in touch.', 'success');
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('Sorry, there was an error sending your message. Please try the email link below.', 'error');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Show form feedback messages
    function showFormMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageElement = document.createElement('div');
        messageElement.className = `form-message form-message--${type}`;
        messageElement.textContent = message;
        messageElement.style.cssText = `
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.25rem;
            font-weight: 500;
            ${type === 'success' 
                ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
                : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(messageElement, form);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }

    // Simple Lightbox for Gallery
    function initLightbox() {
        const galleryItems = document.querySelectorAll('[data-lightbox="gallery"]');
        if (galleryItems.length === 0) return;

        let currentIndex = 0;
        let lightboxOpen = false;

        // Create lightbox HTML
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-backdrop"></div>
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <button class="lightbox-prev" aria-label="Previous image">&#8249;</button>
                <button class="lightbox-next" aria-label="Next image">&#8250;</button>
                <img class="lightbox-image" alt="" />
                <div class="lightbox-caption"></div>
            </div>
        `;

        // Add lightbox styles
        const lightboxStyles = document.createElement('style');
        lightboxStyles.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                display: none;
                align-items: center;
                justify-content: center;
            }
            .lightbox.active {
                display: flex;
            }
            .lightbox-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                cursor: pointer;
            }
            .lightbox-content {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .lightbox-image {
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
            }
            .lightbox-caption {
                color: white;
                text-align: center;
                padding: 1rem;
                font-style: italic;
            }
            .lightbox-close,
            .lightbox-prev,
            .lightbox-next {
                position: absolute;
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background 0.3s ease;
            }
            .lightbox-close {
                top: 20px;
                right: 20px;
            }
            .lightbox-prev {
                left: 20px;
                top: 50%;
                transform: translateY(-50%);
            }
            .lightbox-next {
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
            }
            .lightbox-close:hover,
            .lightbox-prev:hover,
            .lightbox-next:hover {
                background: rgba(255, 255, 255, 0.4);
            }
            @media (max-width: 768px) {
                .lightbox-prev,
                .lightbox-next {
                    font-size: 1.5rem;
                    padding: 0.25rem;
                }
                .lightbox-close {
                    font-size: 1.5rem;
                }
            }
        `;

        document.head.appendChild(lightboxStyles);
        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeButton = lightbox.querySelector('.lightbox-close');
        const prevButton = lightbox.querySelector('.lightbox-prev');
        const nextButton = lightbox.querySelector('.lightbox-next');
        const backdrop = lightbox.querySelector('.lightbox-backdrop');

        // Open lightbox
        function openLightbox(index) {
            currentIndex = index;
            const item = galleryItems[currentIndex];
            const imageUrl = item.href;
            const caption = item.dataset.caption || '';

            lightboxImage.src = imageUrl;
            lightboxImage.alt = caption;
            lightboxCaption.textContent = caption;

            lightbox.classList.add('active');
            lightboxOpen = true;
            document.body.style.overflow = 'hidden';
            
            // Focus the close button for accessibility
            closeButton.focus();
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxOpen = false;
            document.body.style.overflow = '';
        }

        // Navigate to previous image
        function prevImage() {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
            const item = galleryItems[currentIndex];
            lightboxImage.src = item.href;
            lightboxCaption.textContent = item.dataset.caption || '';
        }

        // Navigate to next image
        function nextImage() {
            currentIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
            const item = galleryItems[currentIndex];
            lightboxImage.src = item.href;
            lightboxCaption.textContent = item.dataset.caption || '';
        }

        // Event listeners
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                openLightbox(index);
            });
        });

        closeButton.addEventListener('click', closeLightbox);
        backdrop.addEventListener('click', closeLightbox);
        prevButton.addEventListener('click', prevImage);
        nextButton.addEventListener('click', nextImage);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightboxOpen) return;

            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        });
    }

    // Lazy Loading for Images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.classList.add('loaded');
            });
        }
    }

    // Smooth Scroll Enhancement
    function initSmoothScroll() {
        // Only enhance if user hasn't set reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just a hash
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update focus for accessibility
                target.focus({ preventScroll: true });
            });
        });
    }

    // Utility: Throttle function for performance
    function throttle(func, wait) {
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

    // Optional: Add scroll-based navigation highlighting
    function initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        if (sections.length === 0 || navLinks.length === 0) return;

        const handleScroll = throttle(() => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);
    }

    // Force reload with cache busting
    function forceReloadPage(url) {
        // Clear any cached resources
        if ('caches' in window) {
            caches.keys().then(function(names) {
                names.forEach(function(name) {
                    caches.delete(name);
                });
            });
        }
        
        // Add timestamp to force fresh load
        const separator = url.includes('?') ? '&' : '?';
        const cacheBustUrl = url + separator + 't=' + Date.now() + '&cb=' + Math.random();
        
        // Use replace to avoid back button issues
        window.location.replace(cacheBustUrl);
    }

    // Language Switcher
    function initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        if (langButtons.length === 0) {
            console.warn('No language buttons found');
            return;
        }
        
        // Determine the current page language based on the page structure
        const currentPage = window.location.pathname;
        const isEnglishPage = currentPage.includes('en.html');
        const defaultLang = window.defaultLanguage || (isEnglishPage ? 'en' : 'it');
        
        console.log(`Initializing language switcher with default: ${defaultLang}, current page: ${currentPage}`);
        console.log(`Page loaded at: ${new Date().toISOString()}, URL params: ${window.location.search}`);
        
        // Set initial language based on the current page
        setLanguage(defaultLang);
        updateActiveButton(defaultLang);
        
        // Add click listeners to language buttons
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetLang = this.dataset.lang;
                console.log(`Language button clicked: ${targetLang}`);
                
                // If switching to a different language, navigate to the appropriate page
                if (targetLang === 'en' && !isEnglishPage) {
                    // Switch to English version
                    localStorage.setItem('language', 'en');
                    // Force reload with aggressive cache busting
                    forceReloadPage('en.html');
                } else if (targetLang === 'it' && isEnglishPage) {
                    // Switch to Italian version
                    localStorage.setItem('language', 'it');
                    // Force reload with aggressive cache busting
                    forceReloadPage('index.html');
                } else {
                    // Same page, just update language (this shouldn't normally happen with the current setup)
                    setLanguage(targetLang);
                    updateActiveButton(targetLang);
                    localStorage.setItem('language', targetLang);
                    
                    // Update HTML lang attribute and meta tags
                    updatePageLanguage(targetLang);
                }
            });
        });
    }
    
    // Set language for all translatable elements
    function setLanguage(lang) {
        // Use window.translations to ensure global access
        const translationsData = window.translations || translations;
        
        if (!translationsData || !translationsData[lang]) {
            console.warn(`Language ${lang} not found or translations not loaded, falling back to Italian`);
            lang = 'it';
            if (!translationsData) {
                console.error('Translations object not found. Make sure translations.js is loaded before main.js');
                return;
            }
        }
        
        // Wait for DOM to be ready if it's not already
        function applyTranslations() {
            const elements = document.querySelectorAll('[data-translate]');
            let translatedCount = 0;
            
            elements.forEach(element => {
                const key = element.dataset.translate;
                if (translationsData[lang] && translationsData[lang][key]) {
                    element.textContent = translationsData[lang][key];
                    translatedCount++;
                } else {
                    console.warn(`Translation key "${key}" not found for language "${lang}"`);
                }
            });
            
            // Handle special attribute translations
            const attrElements = document.querySelectorAll('[data-translate-attr]');
            attrElements.forEach(element => {
                const attrData = element.dataset.translateAttr;
                const [attr, key] = attrData.split(':');
                if (translationsData[lang] && translationsData[lang][key]) {
                    element.setAttribute(attr, translationsData[lang][key]);
                }
            });
            
            console.log(`Language set to: ${lang}, translated ${translatedCount} elements`);
        }
        
        // Apply translations immediately if DOM is ready, otherwise wait
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applyTranslations);
        } else {
            applyTranslations();
        }
    }
    
    // Update active language button
    function updateActiveButton(lang) {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });
    }
    
    // Update page language attributes and meta tags
    function updatePageLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang === 'it' ? 'it-IT' : 'en-GB';
        
        // Update page title
        const title = document.querySelector('title');
        if (title) {
            title.textContent = lang === 'it' ? 'Andrea Di Lauro — Attrice' : 'Andrea Di Lauro — Actor';
        }
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = lang === 'it' 
                ? 'Andrea Di Lauro — attrice formata presso la Roma Film Academy. Disponibile per cinema, TV e teatro.'
                : 'Andrea Di Lauro — actor trained at the Roma Film Academy. Available for film, TV and theatre.';
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = lang === 'it' ? 'Andrea Di Lauro — Attrice' : 'Andrea Di Lauro — Actor';
        }
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.content = lang === 'it' 
                ? 'Attrice formata presso la Roma Film Academy.'
                : 'Actor trained at the Roma Film Academy.';
        }
        
        // Update Twitter Card tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.content = lang === 'it' ? 'Andrea Di Lauro — Attrice' : 'Andrea Di Lauro — Actor';
        }
        
        const twitterDesc = document.querySelector('meta[property="twitter:description"]');
        if (twitterDesc) {
            twitterDesc.content = lang === 'it' 
                ? 'Attrice formata presso la Roma Film Academy.'
                : 'Actor trained at the Roma Film Academy.';
        }
        
        // Update JSON-LD structured data
        const jsonLd = document.querySelector('script[type="application/ld+json"]');
        if (jsonLd) {
            try {
                const data = JSON.parse(jsonLd.textContent);
                data.jobTitle = lang === 'it' ? 'Attrice' : 'Actor';
                jsonLd.textContent = JSON.stringify(data, null, 2);
            } catch (e) {
                console.warn('Could not update JSON-LD data:', e);
            }
        }
    }

    // Initialize scroll spy (optional feature)
    // Uncomment the next line if you want active nav highlighting
    // document.addEventListener('DOMContentLoaded', initScrollSpy);

})();
