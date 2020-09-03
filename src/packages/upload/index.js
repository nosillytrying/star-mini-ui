import Upload from './upload.vue'
Upload.install = function (Vue) {
    Vue.component(Upload.name, Upload.default || Upload)
}

export default Upload;