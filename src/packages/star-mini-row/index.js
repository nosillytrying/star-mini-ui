import starMiniRow from './row.vue'
starMiniRow.install = function (Vue) {
    Vue.component(starMiniRow.name, starMiniRow.default || starMiniRow)
}
export default starMiniRow;