import starMiniCarousel from './carousel.vue'
starMiniCarousel.install = function (Vue) {
    Vue.component(starMiniCarousel.name, starMiniCarousel.default || starMiniCarousel)
}
export default starMiniCarousel;