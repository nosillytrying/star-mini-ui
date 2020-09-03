<template>
  <main class='star-mini-main'>
      <slot></slot>
  </main>
</template>

<script>
export default {
    name: 'star-mini-main'
}
</script>

<style lang='scss'>
.star-mini-main{
    flex:1;
    padding: 20px;
}
</style>