import Col from './col.vue'
Col.install = function (Vue) {
    Vue.component(Col.name, Col.default || Col)
}
export default Col;