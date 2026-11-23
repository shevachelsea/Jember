// ========= Swiper =========

if (document.querySelector('.home')) {
    var swiper = new Swiper('.home', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// ========= Popup =========

document.querySelectorAll('.open-popup').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const popupNode = document.querySelector(targetId);
        if (popupNode) {
            popupNode.classList.add('active');
        }
    });
});
document.querySelectorAll('.popup').forEach(popupNode => {
    const overlay = popupNode.querySelector('.overlay');
    const closeBtn = popupNode.querySelector('.close-btn');

    function closePopup() {
        popupNode.classList.remove('active');
    }

    if (overlay) overlay.addEventListener('click', closePopup);
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
});

// ========= Like =========

document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
        const icon = btn.querySelector('i');
        if (btn.classList.contains('liked')) {
            icon.classList.replace('bx', 'bxf');
        } else {
            icon.classList.replace('bxf', 'bx');
        }
    });
});

// ========= Video Musik Patrol =========

const video = document.getElementById('patrol-video');
const playBtn = document.getElementById('play-btn');

if (video && playBtn) {

    playBtn.addEventListener('click', () => {

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    });

    video.addEventListener('play', () => {
        playBtn.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        playBtn.style.display = 'flex';
    });

    video.addEventListener('ended', () => {
        playBtn.style.display = 'flex';
    });
}

// ========= Light Mode dan Dark Mode =========
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});