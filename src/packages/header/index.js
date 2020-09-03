import starMiniHeader from './header.vue'
starMiniHeader.install = function (Vue) {
    Vue.component(starMiniHeader.name, starMiniHeader.default || starMiniHeader)
}

export default starMiniHeader;