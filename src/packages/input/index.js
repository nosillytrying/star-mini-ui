import starMiniInput from './input.vue'
starMiniInput.install = function (Vue) {
    Vue.component(starMiniInput.name, starMiniInput.default || starMiniInput)
}

export default starMiniInput;