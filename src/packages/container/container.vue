<template>
  <section class='star-mini-container' :class="{isVertical}">
      <slot></slot>
  </section>
</template>

<script>
export default {
    name: 'star-mini-container',
    data () {
        return {
            isVertical: false
        }
    },
    mounted () {
        this.isVertical = this.$children.some(child => ['star-mini-footer', 'star-mini-header'].includes(child.$options.name))
    }
}
</script>

<style lang='scss'>
  .star-mini-container{
      display: flex;
      flex-direction: row;
      flex:1;
  }
  .star-mini-container.isVertical{
      display: flex;
      flex-direction: column;
  }
</style>