import CarouselItem from './carousel-item.vue'
CarouselItem.install = function (Vue) {
    Vue.component(CarouselItem.name, CarouselItem.default || CarouselItem)
}
export default CarouselItem;