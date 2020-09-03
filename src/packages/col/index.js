import starMiniCol from './col.vue'
starMiniCol.install = function (Vue) {
    Vue.component(starMiniCol.name, starMiniCol.default || starMiniCol)
}
export default starMiniCol;