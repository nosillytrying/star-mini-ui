<template>
  <div>
    {{value}}
    <star-mini-input 
      v-model='value' 
      type='text' 
      placeholder='请输入内容' 
      name='username'>
    </star-mini-input>
    <star-mini-input 
      v-model='value' 
      type='password' 
      placeholder='请输入内容' 
      name='username'>
    </star-mini-input>
    <star-mini-input 
      :disabled='true'
      v-model='value' 
      type='text' 
      placeholder='请输入内容' 
      name='username'>
    </star-mini-input>
    <star-mini-input
      clearable
      v-model='value' 
      type='text' 
      placeholder='请输入内容' 
      name='username'>
    </star-mini-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>