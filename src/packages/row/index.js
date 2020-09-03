import Row from './row.vue'
Row.install = function (Vue) {
    Vue.component(Row.name, Row.default || Row)
}
export default Row;