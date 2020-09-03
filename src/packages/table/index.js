import Table from './table.vue'
Table.install = function (Vue) {
    Vue.component(Table.name, Table.default || Table)
}

export default Table;