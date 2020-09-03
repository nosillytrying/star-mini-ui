<template>
  <div class='mini-star-upload-dragger'
     @drop.prevent='handleDrop' 
     @dragover.prevent
     @dragleave.prevent
  >
    <star-mini-icon icon='shangchuan' class='icon'></star-mini-icon>
    <span>将文件拖拽到此区域即可上传图片</span>
  </div>
</template>

<script>
export default {
    name: 'upload-dragger',
    methods: {
      handleDrop (e) {
        if (!this.accept) {
          this.$emit('file', e.dataTransfer.files)
        } else {
          let files = [...e.dataTransfer.files].filter(file => file.name.endsWith('image/jepg'))
          this.$emit('file', files)
        }
      }
    }
}
</script>

<style lang='scss'>
  .mini-star-upload-dragger{
    background: #81c7d4;
    border-radius: 10px;
    width:360px;
    height: 180px;
    line-height: 180px;
    box-sizing: border-box;
    display: flex;
    .icon{
      width:65px;
      height: 65px;
      margin: 65px auto 50px;
    }
  }
</style>