<template>
  <div>
    <start-mini-button-group>
      <start-mini-button type='primary' icon="left" position="left">上一页</start-mini-button>
      <start-mini-button type='primary' icon="right" position="right">下一页</start-mini-button>
    </start-mini-button-group>
    <start-mini-button-group>
      <start-mini-button icon="edit" type='primary'></start-mini-button>
      <start-mini-button icon="sousuo" type='primary'></start-mini-button>
      <start-mini-button icon="xiazai" type='primary'></start-mini-button>
    </start-mini-button-group>
  </div>
</template>
<script>
import startMiniButton from '../../../../src/packages/button/button.vue';
import startMiniButtonGroup from '../../../../src/packages/button/button-group.vue'
export default {
  components: {
    startMiniButton,
    startMiniButtonGroup
  }
};
</script>