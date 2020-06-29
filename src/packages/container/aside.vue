<template>
  <aside class='star-mini-aside' :style='{width}'>
      <slot></slot>
  </aside>
</template>

<script>
export default {
    name: 'star-mini-aside',
    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
}
</script>

<style lang='scss'>

</style>