// Team Member Card Flip Animation
document.querySelectorAll('.team-member').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.member-front').style.transform = 'rotateY(180deg)';
        card.querySelector('.member-back').style.transform = 'rotateY(0deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.member-front').style.transform = 'rotateY(0deg)';
        card.querySelector('.member-back').style.transform = 'rotateY(180deg)';
    });
});

// Event Card Hover Effect
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (for future implementation)
const menuToggle = document.querySelector('.mobile-menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.toggle('active');
    });
}

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Join form modal logic
const joinBtn = document.getElementById('joinBtn');
const joinModal = document.getElementById('joinModal');
const closeModal = document.getElementById('closeModal');
const joinForm = document.getElementById('joinForm');
const formSuccess = document.getElementById('formSuccess');

if (joinBtn && joinModal && closeModal) {
    joinBtn.onclick = () => { joinModal.style.display = 'flex'; };
    closeModal.onclick = () => { joinModal.style.display = 'none'; };
    joinModal.onclick = (e) => { if (e.target === joinModal) joinModal.style.display = 'none'; };
}

if (joinForm && formSuccess) {
    joinForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            formSuccess.style.display = 'block';
            setTimeout(() => {
                joinModal.style.display = 'none';
                formSuccess.style.display = 'none';
                joinForm.reset();
            }, 2000);
        }, 100);
    });
}
