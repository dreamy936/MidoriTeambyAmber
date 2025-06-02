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

// 修正导航锚点跳转 Y 轴偏移
function scrollToAnchorWithOffset(e) {
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight + 10 : 70; // header高度+10px
    const targetId = this.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
        e.preventDefault();
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
}

// 绑定所有锚点链接
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', scrollToAnchorWithOffset);
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
const joinBtn = document.querySelector('.btn[href="#join"]');
const joinModal = document.getElementById('joinModal');
const closeModal = document.getElementById('closeModal');
const joinForm = document.getElementById('joinForm');
const formSuccess = document.getElementById('formSuccess');

if (joinBtn && joinModal && closeModal) {
    joinBtn.onclick = (e) => { e.preventDefault(); joinModal.style.display = 'flex'; };
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

// Team Events Gallery Slider with arrows
(function() {
    const slider = document.getElementById('eventGallerySlider');
    if (!slider) return;
    const slides = slider.querySelector('.event-gallery-slides');
    const images = slides.querySelectorAll('img');
    const prevBtn = document.getElementById('eventGalleryPrev');
    const nextBtn = document.getElementById('eventGalleryNext');
    let idx = 0;
    let timer = null;
    function showSlide(i) {
        slides.style.transform = `translateX(-${i * 100}%)`;
    }
    function nextSlide() {
        idx = (idx + 1) % images.length;
        showSlide(idx);
    }
    function prevSlide() {
        idx = (idx - 1 + images.length) % images.length;
        showSlide(idx);
    }
    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextSlide, 3000);
    }
    if (nextBtn && prevBtn) {
        nextBtn.onclick = () => { nextSlide(); resetTimer(); };
        prevBtn.onclick = () => { prevSlide(); resetTimer(); };
    }
    timer = setInterval(nextSlide, 3000);
    showSlide(0);
})();

// Activities Gallery Slider with arrows and auto-scroll
(function() {
    const slider = document.getElementById('activitiesSlider');
    if (!slider) return;
    const slides = slider.querySelector('.activities-slides');
    const images = slides.querySelectorAll('img');
    const prevBtn = document.getElementById('activitiesPrev');
    const nextBtn = document.getElementById('activitiesNext');
    let idx = 0;
    let timer = null;
    function showSlide(i) {
        slides.style.transform = `translateX(-${i * 100}%)`;
    }
    function nextSlide() {
        idx = (idx + 1) % images.length;
        showSlide(idx);
    }
    function prevSlide() {
        idx = (idx - 1 + images.length) % images.length;
        showSlide(idx);
    }
    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextSlide, 3500);
    }
    if (nextBtn && prevBtn) {
        nextBtn.onclick = () => { nextSlide(); resetTimer(); };
        prevBtn.onclick = () => { prevSlide(); resetTimer(); };
    }
    timer = setInterval(nextSlide, 3500);
    showSlide(0);
})();

// Contact弹窗逻辑
const contactBtn = document.getElementById('contactPopupBtn');
const contactPopup = document.getElementById('contactPopup');
const closeContactPopup = document.getElementById('closeContactPopup');
if (contactBtn && contactPopup && closeContactPopup) {
    contactBtn.onclick = (e) => { e.preventDefault(); contactPopup.style.display = 'flex'; };
    contactBtn.addEventListener('click', function(e) { e.preventDefault(); }); // 阻止锚点跳转
    closeContactPopup.onclick = () => { contactPopup.style.display = 'none'; };
    contactPopup.onclick = (e) => { if (e.target === contactPopup) contactPopup.style.display = 'none'; };
}

// Slogan弹窗逻辑
const sloganBtn = document.getElementById('sloganPopupBtn');
const sloganPopup = document.getElementById('sloganPopup');
const closeSloganPopup = document.getElementById('closeSloganPopup');
if (sloganBtn && sloganPopup && closeSloganPopup) {
    sloganBtn.onclick = (e) => { e.preventDefault(); sloganPopup.style.display = 'flex'; };
    closeSloganPopup.onclick = () => { sloganPopup.style.display = 'none'; };
    sloganPopup.onclick = (e) => { if (e.target === sloganPopup) sloganPopup.style.display = 'none'; };
}
