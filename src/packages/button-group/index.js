import ButtonGroup from './button-group.vue'
ButtonGroup.install = function (Vue) {
    Vue.component(ButtonGroup.name, ButtonGroup.default || ButtonGroup)
}
export default ButtonGroup;