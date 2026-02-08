// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add a small animation to the button
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Download CV Functionality
const downloadBtn = document.getElementById('downloadCV');

downloadBtn.addEventListener('click', () => {
    // Direct link to your PDF file
    const link = document.createElement('a');
    link.href = 'assets/hajirah-resume.pdf';
    link.download = 'hajirah-resume.pdf';
    link.click();
    
    // Visual feedback
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Downloaded!</span>
    `;
    
    setTimeout(() => {
        downloadBtn.innerHTML = originalText;
    }, 2000);
});

// Contact Form Functionality - EmailJS with Better Debugging
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded! Check your HTML script tag.');
        formStatus.className = 'form-status error';
        formStatus.textContent = 'EmailJS library not loaded. Check console for details.';
        formStatus.style.display = 'block';
        return;
    }
    
    console.log('EmailJS is loaded');
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Attempting to send email with:', {
        service: 'service_rg9npsv',
        template: 'template_3eh1tqe',
        from_name: name,
        from_email: email
    });
    
    // Show loading state
    formStatus.className = 'form-status';
    formStatus.textContent = 'Sending message...';
    formStatus.style.display = 'block';

    // Send email using EmailJS
    emailjs.send(
        'service_rg9npsv',
        'template_3eh1tqe',
        {
            from_name: name,
            from_email: email,
            message: message
        }
    )
    .then((response) => {
        console.log('Email sent successfully!', response);
        
        // Success!
        formStatus.className = 'form-status success';
        formStatus.textContent = `Thank you, ${name}! Your message has been sent. I'll get back to you soon.`;
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    })
    .catch((error) => {
        console.error('Full error object:', error);
        console.error('Error status:', error.status);
        console.error('Error text:', error.text);
        
        // Show specific error message
        let errorMessage = 'Oops! Something went wrong.';
        
        if (error.status === 412) {
            errorMessage = 'EmailJS not initialized. Check your Public Key.';
        } else if (error.status === 400) {
            errorMessage = 'Invalid Service ID or Template ID.';
        } else if (error.text) {
            errorMessage = error.text;
        }
        
        formStatus.className = 'form-status error';
        formStatus.textContent = errorMessage + ' Check console for details.';
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 7000);
    });
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

// Intersection Observer for scroll animations
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

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Add hover effect to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add parallax effect to header decoration on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const decoration = document.querySelector('.header-decoration');
    if (decoration) {
        decoration.style.transform = `translateY(${scrolled * 0.5}px) skewX(-15deg)`;
    }
});

// Add animation to stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        stat.style.transform = 'scale(1)';
                    }, 300);
                }, index * 100);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Add typing effect to header title (optional enhancement)
const headerTitle = document.querySelector('.header-title');
if (headerTitle) {
    const text = headerTitle.textContent;
    headerTitle.textContent = '';
    let index = 0;
    
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                headerTitle.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }, 1000);
}

console.log('Portfolio bangyaaa!');