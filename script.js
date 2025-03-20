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
    if (window.innerWidth <= 950) {
        heroImage.src = 'assets/image-mobile.jpg';
    } else {
        heroImage.src = 'assets/image@2x.jpg';
    }
}

function handleFormSubmit() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('name-error');
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('email-error');

        let isError = false;
        if (name === '') {
            nameError.style.display = 'block';
            isError = true;
        } else {
            nameError.style.display = 'none';
        }

        if (email === '') {
            emailError.style.display = 'block';
            emailError.textContent = 'Email cannot be empty';
            isError = true;
        } else if (!email.includes('@')) {
            emailError.style.display = 'block';
            emailError.textContent = "Email must include an '@'";
            isError = true;
        } else if (email[0] === '@') {
            emailError.style.display = 'block';
            emailError.textContent = "A part must come before the '@'";
            isError = true;
        } else if (email[email.length - 1] === '@') {
            emailError.style.display = 'block';
            emailError.textContent = "A part must follow the '@'";
            isError = true;
        } else {
            emailError.style.display = 'none';
        }

        if (!isError) {
            alert('Form submitted!');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    handleMenuBtnClick();
    handleFormSubmit();
    handleHeroImageResize();
    window.addEventListener('resize', handleHeroImageResize);
});

window.onscroll = function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.visibility = 'hidden';
    }
};
