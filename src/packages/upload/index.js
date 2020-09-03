import starMiniUpload from './upload.vue'
starMiniUpload.install = function (Vue) {
    Vue.component(starMiniUpload.name, starMiniUpload.default || starMiniUpload)
}

export default starMiniUpload;