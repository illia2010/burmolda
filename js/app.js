const feedbackSlider = new Swiper('.feedback__slider', {

    pagination: {
        el: '.feedback__pagination',
        clickable: true,
    },

    slidesPerView: 1, //количество слайдов на странице
    spaceBetween: 20, //расстояние между слайдами

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        991: {
            slidesPerView: 2, //количество слайдов на странице
            spaceBetween: 20, //расстояние между слайдами
        },

        1200: {
            slidesPerView: 3, //количество слайдов на странице
            spaceBetween: 42, //расстояние между слайдами
        },

    }

});

const menu = document.querySelector('.header__nav');
const toggleBtn = document.querySelector('.header__toggle');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}) 