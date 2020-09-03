import infiniteScroll from './infiniteScroll'
let _Vue;
const requireComponent = require.context('./', true, /\.vue$/);
const importAll = (result) => {
    result.keys().forEach(fileName => {
        let component = requireComponent(fileName)
        component = component.default || component;
        component.name.includes('star-mini') && _Vue.component(component.name,component)
    })  
}
const install = (Vue) => {
    _Vue = Vue
    importAll(requireComponent)
    _Vue.directive(infiniteScroll.name, infiniteScroll)
}
// 全局直接通过script引入 自动调用install方法 注册

if (typeof window.Vue !== 'undefined') {
    install(Vue);
}
export default {
    install
}

