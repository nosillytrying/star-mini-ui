<template>
  <div class='star-mini-button-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'star-mini-button-group',
  mounted() {
    // star-mini-button-group 里面只能放star-mini-button 需要在mounted里面进行校验
    let children = this.$el.children;
    for (let i = 0; i < children.length; i++) {
      console.assert(
        children[i].tagName === 'BUTTON' &&
          children[i].__vue__ &&
          children[i].__vue__.$options._componentTag === 'star-mini-button',
        '子元素必须是star-mini-button'
      );
    }
  }
};
</script>

<style lang='scss'>
@import '../../styles/_base.scss';
.star-mini-button-group {
  display: inline-flex;
  vertical-align: middle;
  padding: 24px;
  box-sizing: border-box;
  button {
    position:relative;
    border-radius: 0;
    &:first-child{
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
    }
    &:not(:first-child){
        margin-left: -1px;
    }
    &:last-child{
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
    }
    &:hover{
        z-index: 1;
    }
    &:focus{
        z-index: 2;
    }
  }
}
</style>