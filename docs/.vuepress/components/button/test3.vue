<template>
  <div>
    <start-mini-button :loading="true">加载中</start-mini-button>
  </div>
</template>
<script>
import startMiniButton from '../../../../src/packages/button/button.vue';
export default {
  components: {
    startMiniButton
  }
};
</script>