import starMiniProgress from './progress.vue'
starMiniProgress.install = function (Vue) {
    Vue.component(starMiniProgress.name, starMiniProgress.default || starMiniProgress)
}
export default starMiniProgress;