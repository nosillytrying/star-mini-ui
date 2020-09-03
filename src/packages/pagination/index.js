import Pagination from './pagination.vue'
Pagination.install = function (Vue) {
    Vue.component(Pagination.name, Pagination.default || Pagination)
}
export default Pagination;