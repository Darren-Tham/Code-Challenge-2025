function handleMenuBtnClick() {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuBtnIcon = document.getElementById('menu-btn-icon');

    function toggleMenu() {
        if (menu.style.opacity === '0' && menu.style.visibility === 'hidden') {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menuBtnIcon.src = 'assets/xmark.svg';
        } else {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menuBtnIcon.src = 'assets/bars.svg';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
}

function handleHeroImageResize() {
    const heroImage = document.getElementById('hero-image');
    if (window.innerWidth < 950) {
        heroImage.src = 'assets/image-mobile.jpg';
    } else {
        heroImage.src = 'assets/image@2x.jpg';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    handleMenuBtnClick();
    handleHeroImageResize();
    window.addEventListener('resize', handleHeroImageResize);
});

document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted!');
    });

window.onscroll = function () {
    if (window.scrollY > 500) {
        document.getElementById('back-to-top').style.display = 'block';
    }
};
