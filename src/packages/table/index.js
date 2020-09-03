import starMiniTable from './table.vue'
starMiniTable.install = function (Vue) {
    Vue.component(starMiniTable.name, starMiniTable.default || starMiniTable)
}

export default starMiniTable;