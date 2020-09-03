import starMiniFooter from './footer.vue'
starMiniFooter.install = function (Vue) {
    Vue.component(starMiniFooter.name, starMiniFooter.default || starMiniFooter)
}
export default starMiniFooter;