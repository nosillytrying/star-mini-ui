import Button from './button.vue'
Button.install = function (Vue) {
    Vue.component(Button.name, Button.default || Button)
}
export default Button;