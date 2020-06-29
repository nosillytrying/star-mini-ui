let _Vue;
const requireComponent = require.context('./', true, /\.vue$/);
const importAll = (result) => {
    result.keys().forEach(fileName => {
        let component = requireComponent(fileName).default || requireComponent(fileName);
        _Vue.component(component.name,component)
    })  
}
const install = (Vue) => {
    _Vue = Vue
    importAll(requireComponent)
}
// 全局直接通过script引入 自动调用install方法 注册

if (typeof window.Vue !== 'undefined') {
    install(Vue);
}
export default {
    install
}

