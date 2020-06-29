<template>
  <div class='star-mini-input' :class='inputClass'>
    <input :disabled='disabled' :type="type" :value='value' :placeholder="placeholder" :name='name' @input="$emit('input', $event.target.value)">
    <star-mini-icon icon='qingkong' v-if='clearable' @click.native="$emit('input','')" />
  </div>
</template>

<script>
import starMiniIcon from './icon.vue';
export default {
  name: 'star-mini-input',
  props: {
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text',
      validator() {
        return true;
      }
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClass() {
      let inputClass = [];
      if (this.clearable) {
        inputClass.push(`star-mini-input-suffix-icon`);
      }
      return inputClass;
    }
  },
  components: {
    starMiniIcon
  }
};
</script>

<style lang='scss'>
@import '../styles/_base.scss';
.star-mini-input {
  position: relative;
  display: inline-flex;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: $border-radius;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #eee;
    }
  }
}
.star-mini-input-suffix-icon {
  input{
    padding-right: 25px;
  }
  .star-mini-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

  }
}
</style>