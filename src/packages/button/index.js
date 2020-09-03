import starMiniButton from './button.vue'
starMiniButton.install = function (Vue) {
    Vue.component(starMiniButton.name, starMiniButton.default || starMiniButton)
}
export default starMiniButton;