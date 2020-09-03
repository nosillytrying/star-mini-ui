<template>
  <div class='star-mini-upload'>
    <uploadDragger v-if='drag' :accept='accept' @file='uploadFiles'/>
    <template v-else> 
      <div @click="handleClick" class='star-mini-upload-container'>
        <slot></slot>
      </div>
      <input class='upload-input' ref='input' type="file" :accept="accept" :multiple='multiple' @change='handleChange' :name='name'>
    </template>
    <div>
      <slot name='tip'></slot>
    </div>
    <ul>
      <li v-for='file in files' :key='file.uid'>
        <div>
          <star-mini-icon icon='file'></star-mini-icon>
          {{file.name}}
          <star-mini-progress :percentage='file.percentage' v-if='file.status === "uploading"'></star-mini-progress>
          {{file.status}}
          <star-mini-icon icon='cha'></star-mini-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ajax from './ajax';
import starMiniProgress from '../star-mini-progress/progress.vue';
import uploadDragger from './upload-dragger.vue';
export default {
  name: 'star-mini-upload',
  props: {
    name: {
      type: String,
      default: 'file'
    },
    accept: String,
    action: {
      type: String,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    },
    limit: Number,
    multiple: Boolean,
    onExceed: Function,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    beforeUpload: Function,
    httpRequest: {
      // 默认提供的ajax
      type: Function,
      default: ajax
    },
    drag: {
      type: Boolean,
      default: false
    }
    // 用户要有那些功能  我需要暴露给用户哪些功能
    // 用户的行为
    // 拖拽上传 不需要input组件
  },
  data() {
    return {
      tempIndex: 1,
      files: [], // 存储要展示的列表, 可以在这里删除你要删除的文件 询问以下用户是否要删除？
      reqs: {}
    };
  },
  watch: {
    fileList: {
      handler(fileList) {
        this.files = fileList.map(item => {
          item.uid = Date.now() + this.tempIndex++;
          item.status = 'sucess';
          return item;
        });
      },
      immediate: true
    }
  },
  components: {
    starMiniProgress,
    uploadDragger
  },
  methods: {
    handleClick() {
      // 点击之前 还原输入框
      this.$refs.input.value = '';
      this.$refs.input.click();
    },
    handleStart(rawFile) {
      // 给文件生成一个唯一的标识
      rawFile.uid =
        Math.random()
          .toString(36)
          .substr(2, 9) + this.tempIndex++;
      let file = {
        status: 'ready', // 默认准备上传
        name: rawFile.name, // 文件名字
        size: rawFile.size, // 文件大小
        percentage: 0, // 上传进度
        uid: rawFile.uid, // 映射关系
        raw: rawFile
      };
      this.files.push(file); // 将当前用户上传的文件push到列表中, 过渡一会要展示的内容
      this.onChange && this.onChange(file);
    },
    getFile(rawFile) {
      return this.files.find(file => file.uid == rawFile.uid);
    },
    handleProgress(ev, rawFile) {
      // 给不同的状态
      // 通过源文件 用户上传的文件 格式化的结果
      let file = this.getFile(rawFile); // 获取格式化后的文件
      file.status = 'uploading';
      file.percentage = ev.percent || 0; // 赋值当前进度
      this.onProgress(ev, file);
    },
    handleSuccess(res, rawFile) {
      let file = this.getFile(rawFile); // 获取格式化后的文件
      file.status = 'sucess';
      this.onSuccess(res, file);
      this.onChange(file);
    },
    handleError(err, rawFile) {
      let file = this.getFile(rawFile); // 获取格式化后的文件
      file.status = 'fail';
      this.onError(err, file);
      this.onChange(file);
      delete this.reqs[file.uid]; // 失败的ajax后续在中断请求了
    },
    post(rawFile) {
      // 真正上传的逻辑
      // 调用httpRequest方法
      // 需要整合参数 调用ajax 传递参数 处理上传的整个流程
      const uid = rawFile.uid; // 这里可能稍后上传的时候  可能会中断
      const options = {
        file: rawFile,
        filename: this.name,
        action: this.action,
        onProgress: ev => {
          // 处理上传中的状态
          this.handleProgress(ev, rawFile);
        },
        onSuccess: res => {
          // 处理成功的状态
          this.handleSuccess(res, rawFile);
        },
        onError: err => {
          // 处理失败时的状态
          this.handleError(err, rawFile);
        }
      };
      let req = this.httpRequest(options);
      this.reqs[uid] = req; // 先存起来每个ajax 稍后可以取消请求
      // 允许用户使用promise的ajax
      if (req && req.then) {
        // 别人的写法
        req.then(options.onSucess, options.onError);
      }
    },
    upload(rawFile) { // 分片上传 断点上传 node的时候 会实现
      // 上传文件
      // 先判断这个文件是否能够上传 没有任何限制 直接上传即可
      if (!this.beforeUpload) {
        // 直接上传
        return this.post(rawFile);
      }
      //  否则需要调用用户的函数 获取他的返回值
      let result = this.beforeUpload(rawFile);
      if (result) {
        // 用户返回true 来表示需要上传
        return this.post(rawFile);
      }
    },
    // 上传文件
    uploadFiles(files) {
      // 限制上传是否达到最大条件
      if (this.limit && this.fileList.length + files.length > this.limit) {
        return this.onExceed && this.onExceed();
      }
      [...files].forEach(rawFile => {
        // 用户上传的文件 我需要做一些处理 可能用户频繁上传同一个文件
        // 将文件格式化成我想要的结果
        this.handleStart(rawFile); // 处理上传之前
        this.upload(rawFile); // 上传
      });
    },
    handleChange(e) {
      const files = e.target.files;
      // 多个文件如何上传  多创建几个ajax 一起传
      this.uploadFiles(files);
    }
  }
};
</script>

<style lang='scss'>
.star-mini-upload {
  .star-mini-upload-container {
    display: inline-block;
  }
}
.upload-input {
  visibility: hidden;
  height: 0px;
  width: 0px;
}
</style>