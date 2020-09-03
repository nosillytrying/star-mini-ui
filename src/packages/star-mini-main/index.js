import starMiniMain from './main.vue'
starMiniMain.install = function (Vue) {
    Vue.component(starMiniMain.name, starMiniMain.default || starMiniMain)
}
export default starMiniMain;