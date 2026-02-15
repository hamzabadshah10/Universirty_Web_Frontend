/* ============================================
   1. STICKY NAVBAR & ACTIVE LINK HIGHLIGHTING
   ============================================ */
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, header");
    const navItems = document.querySelectorAll(".nav-links li a");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});

/* ============================================
   2. SMOOTH SCROLLING FOR NAVIGATION LINKS
   ============================================ */
document.querySelectorAll('.nav-links a, .hero-btns a, .apply-btn, .footer-col a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
            document.getElementById('nav-links').classList.remove('active');
        }
    });
});

/* ============================================
   3. MOBILE HAMBURGER MENU TOGGLE
   ============================================ */
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

/* ============================================
   4. SCROLL REVEAL ANIMATIONS
   ============================================ */
function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 

/* ============================================
   5. SCROLL TO TOP BUTTON
   ============================================ */
let topButton = document.getElementById("scrollTopBtn");

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   6. HERO IMAGE SLIDER LOGIC
   ============================================ */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;

if(slides.length > 0) {
    function showSlide(index) {
        if (index >= slides.length) { slideIndex = 0; }
        if (index < 0) { slideIndex = slides.length - 1; }
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
    }
    function moveSlide(step) {
        showSlide(slideIndex += step);
        resetInterval();
    }
    function currentSlide(index) {
        showSlide(slideIndex = index);
        resetInterval();
    }
    
    let nextBtn = document.getElementById('nextSlide');
    let prevBtn = document.getElementById('prevSlide');
    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => moveSlide(1));
        prevBtn.addEventListener('click', () => moveSlide(-1));
    }

    function startSlideShow() {
        slideInterval = setInterval(() => { moveSlide(1); }, 5000); 
    }
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }
    startSlideShow();
}

/* ============================================
   7. REAL EMAILJS CONTACT FORM INTEGRATION
   ============================================ */

// 1. YOUR NEW PUBLIC KEY
(function() {
    emailjs.init("BY2Qv3ospA4h-o7yg"); 
})();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

// --- HELPER FUNCTION: VALIDATE EMAIL FORMAT ---
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get values from the form inputs
        const name = document.getElementById('user_name').value.trim();
        const email = document.getElementById('user_email').value.trim();
        const message = document.getElementById('user_message').value.trim();

        // Basic Check: Are fields empty?
        if(name === "" || email === "" || message === "") {
            formStatus.textContent = "Error: All fields are required.";
            formStatus.style.color = "red";
            return;
        }

        // Strict Email Validation
        if(!isValidEmail(email)) {
            formStatus.textContent = "Error: Please enter a valid email address (e.g., name@example.com).";
            formStatus.style.color = "red";
            document.getElementById('user_email').focus(); 
            return; 
        }

        // If everything is valid, proceed to send
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        formStatus.textContent = "";

        // Set up the parameters to match your EmailJS Template
       const templateParams = {
            name: name,
            email: email,
            message: message
        };

        // 2. YOUR NEW SERVICE ID AND TEMPLATE ID
        emailjs.send('service_wh1h8fb', 'template_45x8vpr', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                const successMsg = "Success! Your message has been sent to our administration.";
                
                // Show Success Text on screen
                formStatus.textContent = successMsg;
                formStatus.style.color = "green";
                
                // Show Popup Alert
                alert(successMsg);
                
                // Reset the form and button
                contactForm.reset();
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                submitBtn.disabled = false;
                
            }, function(error) {
                console.log('FAILED...', error);
                
                const errorMsg = "Failed to send message. Please check your internet connection.";
                
                // Show Error Text on screen
                formStatus.textContent = errorMsg;
                formStatus.style.color = "red";
                
                // Show Error Popup Alert
                alert(errorMsg);
                
                // Reset the button
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                submitBtn.disabled = false;
            });
    });
}