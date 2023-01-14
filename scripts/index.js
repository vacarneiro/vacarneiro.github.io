// Initialize Tiny-Swiper
var swiper = new Swiper(".swiper-container", {
    mousewheel: {
        invert: false,
        interval: 400,
        autoplay: 1000,
    },
    navigation: {
        prevEl: ".swiper-plugin-navigation-prevEl",
        nextEl: ".swiper-plugin-navigation-nextEl"
    },
    // Add Navigation and Pagination plugins
    plugins: [SwiperPluginNavigation]
    
});