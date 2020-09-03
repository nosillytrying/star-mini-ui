import Header from './header.vue'
Header.install = function (Vue) {
    Vue.component(Header.name, Header.default || Header)
}

export default Header;