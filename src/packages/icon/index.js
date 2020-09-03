import starMiniIcon from './icon.vue'
starMiniIcon.install = function (Vue) {
    Vue.component(starMiniIcon.name, starMiniIcon.default || starMiniIcon)
}

export default starMiniIcon;