import Input from './input.vue'
Input.install = function (Vue) {
    Vue.component(Input.name, Input.default || Input)
}

export default Input;