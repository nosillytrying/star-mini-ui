import Footer from './footer.vue'
Footer.install = function (Vue) {
    Vue.component(Footer.name, Footer.default || Footer)
}
export default Footer;