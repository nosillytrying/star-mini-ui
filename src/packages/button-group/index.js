import starMiniButtonGroup from './button-group.vue'
starMiniButtonGroup.install = function (Vue) {
    Vue.component(starMiniButtonGroup.name, starMiniButtonGroup.default || starMiniButtonGroup)
}
export default starMiniButtonGroup;