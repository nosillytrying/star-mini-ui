import Aside from './aside.vue'
Aside.install = function (Vue) {
    Vue.component(Aside.name, Aside.default || Aside)
}
export default Aside;