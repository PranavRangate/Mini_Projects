// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial fade in for search container
    gsap.from('.search-container', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Floating animation for search container only
    gsap.to('.search-container', {
        y: -15,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5
    });

    // Navbar animation
    gsap.from('.section-navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Hero section animation with scroll trigger
    ScrollTrigger.batch('.hero-section', {
        start: 'top center',
        onEnter: (elements) => {
            gsap.from(elements, {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }
    });

    // How it works section - enhanced scroll animation
    gsap.from('.step', {
        scrollTrigger: {
            trigger: '.how-it-works',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Testimonials with scroll-based reveal
    gsap.from('.testimonial', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Statistics section with scroll trigger
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out'
        });

        // Counter animation
        const number = item.querySelector('h3');
        const endValue = parseInt(number.textContent);
        
        gsap.to(number, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'restart none none reverse'
            },
            textContent: endValue,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 }
        });
    });

    // FAQ items reveal
    gsap.from('.faq-item', {
        scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    });

    // Newsletter section animation
    gsap.from('.newsletter', {
        scrollTrigger: {
            trigger: '.newsletter',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Contact section with enhanced scroll animation
    const contactElements = ['#contact-section h2', '.contact-info', '.contact-form'];
    contactElements.forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // Footer sections reveal
    gsap.from('.footer-section', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Back to top button smooth fade
    const backToTop = document.getElementById('backToTop');
    gsap.set(backToTop, { opacity: 0 });
    
    ScrollTrigger.create({
        start: 100,
        end: 'max',
        onUpdate: (self) => {
            if (self.progress > 0.1) {
                gsap.to(backToTop, {
                    opacity: 1,
                    duration: 0.3,
                    display: 'flex'
                });
            } else {
                gsap.to(backToTop, {
                    opacity: 0,
                    duration: 0.3,
                    display: 'none'
                });
            }
        }
    });

    // About section animations
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.feature', {
        scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Why Us section animations
    gsap.from('.benefit-card', {
        scrollTrigger: {
            trigger: '.why-us-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Testimonials section animations
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    });
});

// Update dropdown based on property type selection
function updateTypeDropdown(selectedType) {
    const dropdown = document.getElementById('typeDropdown');
    dropdown.innerHTML = ''; // Clear existing options
    
    let options = [];
    
    switch(selectedType) {
        case 'fullHouse':
            options = [
                { value: '', text: 'Select BHK Type' },
                { value: '1bhk', text: '1 BHK' },
                { value: '2bhk', text: '2 BHK' },
                { value: '3bhk', text: '3 BHK' }
            ];
            break;
        case 'pgHostel':
            options = [
                { value: '', text: 'Select Room Type' },
                { value: 'single', text: 'Single Room' },
                { value: 'double', text: 'Double Sharing' },
                { value: 'triple', text: 'Triple Sharing' }
            ];
            break;
        case 'flatmates':
            options = [
                { value: '', text: 'Select Tenant Type' },
                { value: 'male', text: 'Male Only' },
                { value: 'female', text: 'Female Only' },
                { value: 'family', text: 'Family' }
            ];
            break;
    }
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        dropdown.appendChild(optionElement);
    });
}

// Handle search form submission
document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.querySelector('.location-dropdown').value;
    const propertyType = document.querySelector('input[name="propertyType"]:checked')?.value || '';
    
    // Redirect to search results with selected criteria
    window.location.href = `searchresults.html?location=${location}${propertyType ? '&propertyType=' + propertyType : ''}`;
});

// Search functionality
function performSearch() {
    const location = document.getElementById('location').value.toLowerCase();
    const propertyType = document.getElementById('propertyType').value;
    const bhkType = document.getElementById('bhkType').value;
    
    // Validate if location is in allowed cities
    const allowedCities = ['ichalkaranji', 'kolhapur', 'sangli'];
    const isValidCity = allowedCities.includes(location.toLowerCase());

    if (!isValidCity) {
        alert('Please select from available cities: Ichalkaranji, Kolhapur, or Sangli');
        return;
    }

    // Store search parameters
    const searchParams = new URLSearchParams();
    if (location) searchParams.set('location', location);
    if (propertyType) searchParams.set('propertyType', propertyType);
    if (bhkType) searchParams.set('bhkType', bhkType);
    
    // Redirect to search results page with parameters
    window.location.href = `searchresults.html?${searchParams.toString()}`;
}

// Update BHK dropdown based on property type
document.getElementById('propertyType').addEventListener('change', function() {
    const bhkDropdown = document.getElementById('bhkType');
    bhkDropdown.innerHTML = ''; // Clear existing options
    
    if (this.value === 'fullHouse') {
        // Add BHK options for full house
        const options = ['Select BHK', '1 BHK', '2 BHK', '3 BHK', '4 BHK'];
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option === 'Select BHK' ? '' : option.toLowerCase().replace(' ', '');
            opt.textContent = option;
            bhkDropdown.appendChild(opt);
        });
        bhkDropdown.disabled = false;
    } else {
        // For PG/Hostel and Flatmates, disable BHK selection
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = 'Not Applicable';
        bhkDropdown.appendChild(opt);
        bhkDropdown.disabled = true;
    }
});

// Add this to your existing script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM fully loaded");

    // Check if form exists
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        console.error("❌ Contact form not found! Check if the ID is correct.");
        return; // Exit if form is missing
    }

    console.log("✅ Contact form found!");

    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // ✅ Stop page refresh
        console.log("🚀 Form submission prevented!");

        const name = document.getElementById("contactName")?.value.trim();
        const email = document.getElementById("contactEmail")?.value.trim();
        const subject = document.getElementById("contactSubject")?.value.trim();
        const message = document.getElementById("contactMessage")?.value.trim();

        if (!name || !email || !subject || !message) {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
        }

        const formData = { name, email, subject, message };

        console.log("📨 Sending form data:", formData); // Debugging log

        try {
            const response = await fetch("http://localhost:5500/api/contact/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("✅ Server response:", data); // Debugging log

            if (response.ok) {
                alert("✅ Message sent successfully!");
                contactForm.reset(); // Clear the form
            } else {
                alert(`❌ Error: ${data.message || "Failed to send message. Try again."}`);
            }
        } catch (error) {
            console.error("❌ Error submitting form:", error);
            alert("⚠️ Network error! Please check your connection and try again.");
        }
    });
});





// Test function to check API connection
async function testContactAPI() {
    const testData = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test Message"
    };

    try {
        const response = await fetch('http://localhost:5500/api/contact/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });

        const data = await response.json();
        console.log('Response:', data);
        
        if (response.ok) {
            console.log('Test successful! Check MongoDB for the test entry.');
        } else {
            console.log('Test failed:', data.message);
        }
    } catch (error) {
        console.error('Test error:', error);
    }
}

// Call this function in browser console: testContactAPI()