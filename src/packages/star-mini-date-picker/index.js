import starMiniDatePicker from './date-picker.vue'
starMiniDatePicker.install = function (Vue) {
    Vue.component(starMiniDatePicker.name, starMiniDatePicker.default || starMiniDatePicker)
}
export default starMiniDatePicker;