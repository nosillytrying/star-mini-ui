<template>
  <svg class="start-mini-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import '../styles/icon';
export default {
  name: 'start-mini-icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.start-mini-icon {
    width: 25px; height: 25px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>