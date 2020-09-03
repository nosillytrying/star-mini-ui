import starMiniContainer from './container.vue'
starMiniContainer.install = function (Vue) {
    Vue.component(starMiniContainer.name, starMiniContainer.default || starMiniContainer)
}

export default starMiniContainer;