import starMiniCarouselItem from './carousel-item.vue'
starMiniCarouselItem.install = function (Vue) {
    Vue.component(starMiniCarouselItem.name, starMiniCarouselItem.default || starMiniCarouselItem)
}
export default starMiniCarouselItem;