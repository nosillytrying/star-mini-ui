<template>
  <svg class="star-mini-icon" aria-hidden="true" >
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import '../styles/icon';
export default {
  name: 'star-mini-icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.star-mini-icon {
    width: 25px ; height: 25px ;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>