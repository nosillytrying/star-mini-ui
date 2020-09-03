import starMiniPopover from './popover.vue'
starMiniPopover.install = function (Vue) {
    Vue.component(starMiniPopover.name, starMiniPopover.default || starMiniPopover)
}
export default starMiniPopover;