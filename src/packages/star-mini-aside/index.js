import starMiniAside from './aside.vue'
starMiniAside.install = function (Vue) {
    Vue.component(starMiniAside.name, starMiniAside.default || starMiniAside)
}
export default starMiniAside;