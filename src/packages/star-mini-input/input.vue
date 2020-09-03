<template>
  <div class='star-mini-input' :class='inputClass'>
    <star-mini-icon v-if='prefixIcon' :icon='prefixIcon'></star-mini-icon>
    <input 
      ref='input'
      :disabled='disabled' 
      :type="showPassword ? (passWordVisble ? 'text': 'password') : type"
      :value='value' 
      :placeholder="placeholder" 
      :name='name' 
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      @change="$emit('change',$event)"
    >
    <!--mousedown.native.prevent 不会失去焦点 -->
    <star-mini-icon icon='qingkong' v-if='clearable && value' @click.native="$emit('input','')" @mousedown.native.prevent/>
    <!--先失去焦点 在获取焦点-->
    <star-mini-icon icon='eye' v-if='showPassword && value' @click.native="changeStatus" />
    <star-mini-icon :icon='suffixIcon' v-if='suffixIcon' ></star-mini-icon>
  </div>
</template>

<script>
import starMiniIcon from '../star-mini-icon/icon.vue';
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
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon:String,
    suffixIcon: String
  },
  data () {
    return {
      passWordVisble: true
    }
  },
  computed: {
    inputClass() {
      let inputClass = [];
      if (this.clearable || this.showPassword || this.suffixIcon) {
        inputClass.push(`star-mini-input-suffix-icon`);
      }
      if (this.prefixIcon) {
        inputClass.push(`star-mini-input-prefix-icon`)
      }
      return inputClass;
    }
  },
  methods: {
    changeStatus () {
      this.passWordVisble = !this.passWordVisble;
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    }
  },
  components: {
    starMiniIcon
  }
};
</script>

<style lang='scss'>
@import '../../styles/_base.scss';
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
    width:14px;
    height: 14px;
    cursor: pointer;
  }
}
.star-mini-input-prefix-icon{
  input{
    padding-left: 25px;
  }
  .star-mini-icon {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width:14px;
    height: 14px;
    cursor: pointer;
  }
}
</style>