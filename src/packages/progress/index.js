import Progress from './progress.vue'
Progress.install = function (Vue) {
    Vue.component(Progress.name, Progress.default || Progress)
}
export default Progress;