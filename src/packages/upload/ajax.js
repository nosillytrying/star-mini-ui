const ajax = (options) => {
    // 创建ajax对象
    const xhr = new XMLHttpRequest();
    const action = options.action;
    const formdata = new FormData(); // h5 上传图片的api
    formdata.append(options.filename, options.file)
    xhr.onerror = (err) => {
        options.onError(err)
    } 
    xhr.onload = (err) => {
        let text = xhr.responseText || xhr.response; // 做兼容
        options.onSuccess(JSON.parse(text));
    } 
    xhr.upload.onprogress = (e) => {
        console.log(e, '1111111')
        if (e.total) {
            e.percent = e.loaded / e.total * 100
        }
        options.onProgress(e)
    }
    // 开启请求
    xhr.open('post', action, true);

    // 发送请求
    xhr.send(formdata);
    return xhr;
}
export default ajax;