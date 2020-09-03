import starMiniPagination from './pagination.vue'
starMiniPagination.install = function (Vue) {
    Vue.component(starMiniPagination.name, starMiniPagination.default || starMiniPagination)
}
export default starMiniPagination;