<template>
  <div>
    <star-mini-button :loading="true">加载中</star-mini-button>
  </div>
</template>
<script>
import starMiniButton from '../../../../src/packages/button/button.vue';
export default {
  components: {
    starMiniButton
  }
};
</script>