import DatePicker from './date-picker.vue'
DatePicker.install = function (Vue) {
    Vue.component(DatePicker.name, DatePicker.default || DatePicker)
}
export default DatePicker;