<template>
  <div>
    <star-mini-button-group>
      <star-mini-button type='primary' icon="left" icon-position="left">上一页</star-mini-button>
      <star-mini-button type='primary' icon="right" icon-position="right">下一页</star-mini-button>
    </star-mini-button-group>
    <star-mini-button-group>
      <star-mini-button icon="edit" type='primary'></star-mini-button>
      <star-mini-button icon="sousuo" type='primary'></star-mini-button>
      <star-mini-button icon="xiazai" type='primary'></star-mini-button>
    </star-mini-button-group>
  </div>
</template>
<script>
import starMiniButton from '../../../../src/packages/button/button.vue';
import starMiniButtonGroup from '../../../../src/packages/button/button-group.vue'
export default {
  components: {
    starMiniButton,
    starMiniButtonGroup
  }
};
</script>