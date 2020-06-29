<template>
  <div>
    <!-- 
        ajax + formdata 
        action 提交到后台的路径
        limit 限制提交个数
        multiple 多文件上传
        file-list 显示已经上传过的图片
        on-exceed 用来 如果超出限制后 执行此方法
        on-change 如果当前上传文件的状态发生变化的时候 会触发 如果用户选择了文件 上传成功 或者失败
        on-sucess 在上传成功时会触发
        on-error   在失败时触发
        on-progress 上传时多次触发
    -->
    <star-mini-upload
      name='avatar'
      action='http://localhost:3000/upload'
      :limit='3'
      multiple
      accept='image/jpg'
      :file-list='fileList'
      :on-exceed='handleExceed'
      :on-change='handleChange'
      :on-success='handleSuccess'
      :on-error='handleError'
      :on-progress='handleProgress'
      :before-upload ='handleBeforeUpload'
    >
     <star-mini-button type='primary' icon='shangchuan'>
       点击上传
     </star-mini-button>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </star-mini-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      fileList: [
        {
          url: 'xxx',
          name: 'aaa'
        }
      ]
    };
  },
  methods:{
    handleBeforeUpload ({size, name}) {
      console.log(typeof name, 'name')
      let limit = size / 1024 > 500;
      if (limit) {
        console.log('当前超过上传的超过了500k')
      } else if (!name.endsWith('.jpeg')) {
          console.log('文件类型不对')
          return false
      }
      return true
    },
    handleExceed () {
      console.log('用户传递的数量已经超过预期数量了')
    },
    handleChange (file) {
      console.log(file, '用户更新了文件')
    },
    handleSuccess () {

    },
    handleError () {

    },
    handleProgress () {

    }
  }
};
</script>

<style>
</style>