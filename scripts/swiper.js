var swiper = new Swiper(".swip", {
    speed:1000,
    centeredSlides: true,
    autoplay:{
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'coverflow'
});