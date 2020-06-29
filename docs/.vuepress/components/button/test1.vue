<template>
  <div>
      <star-mini-button>默认按钮</star-mini-button>
      <star-mini-button type="primary">主要按钮</star-mini-button>
      <star-mini-button type="success">成功按钮</star-mini-button>
      <star-mini-button type="info">信息按钮</star-mini-button>
      <star-mini-button type="warning">警告按钮</star-mini-button>
      <star-mini-button type="danger">危险按钮</star-mini-button>
      
  </div>
</template>

<script>
import starMiniButton from '../../../../src/packages/button/button.vue'
export default {
  components:{
    starMiniButton
  }
}
</script>

<style>

</style>