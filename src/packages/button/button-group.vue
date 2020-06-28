<template>
  <div class='start-mini-button-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'start-mini-button-group',
  mounted() {
    // start-mini-button-group 里面只能放start-mini-button 需要在mounted里面进行校验
    let children = this.$el.children;
    for (let i = 0; i < children.length; i++) {
      console.assert(
        children[i].tagName === 'BUTTON' &&
          children[i].__vue__ &&
          children[i].__vue__.$options._componentTag === 'start-mini-button',
        '子元素必须是start-mini-button'
      );
    }
  }
};
</script>

<style lang='scss'>
@import '../../styles/_base.scss';
.start-mini-button-group {
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