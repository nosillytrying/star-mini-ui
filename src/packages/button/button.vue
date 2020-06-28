<template>
  <button class='start-mini-button' :class='hsButtonClass' :disabled='loading' @click='$emit("click",$event)'>
    <!-- 1 可以通过 v-if判断
    2 可以通过css属性 order来判断 -->
    <start-mini-icon :icon='icon' v-if='icon && !loading' class='icon'></start-mini-icon>
    <start-mini-icon icon='loading' v-if='loading' class='icon'></start-mini-icon>
    <!-- <start-mini-icon :icon='icon' v-if='icon && iconPosition ==="left"' class='icon'></start-mini-icon> -->
    <span v-if='$slots.default'>
      <slot></slot>
    </span>
    <!-- <start-mini-icon :icon='icon' v-if='icon && iconPosition ==="right"' class='icon'></start-mini-icon> -->
  </button>
</template>

<script>
export default {
  name: 'start-mini-button',
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        // 自定义属性校验器
        if (
          type &&
          !['primary', 'warning', 'danger', 'success', 'info'].includes(type)
        ) {
          console.error(
            `type类型必须为: ${[
              'primary',
              'warning',
              'danger',
              'success',
              'info'
            ].join('、')}`
          );
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(type) {
        if (type && !['left', 'right'].includes(type)) {
          console.error(
            `icon-position的类型必须为:${['left', 'right'].join('、')}`
          );
        }
        return true;
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hsButtonClass() {
      let classList = [];
      if (this.type) {
        classList.push(`start-mini-button-${this.type}`);
      }
      if (this.iconPosition) {
        classList.push(`start-mini-button-${this.iconPosition}`);
      }
      return classList;
    }
  }
};
</script>

<style lang='scss'>
@import '../../styles/_base.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.start-mini-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  line-height: 1; // 文字和高度一样高
  height: $height;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none; // 文本不能复制
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        warning: $warning,
        danger: $danger,
        success: $success,
        info: $info
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff !important;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        warning: $warning-hover,
        danger: $danger-hover,
        success: $success-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        warning: $warning-active,
        danger: $danger-active,
        success: $success-active,
        info: $info-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon + span {
    margin-left: 4px;
  }
  span + .icon {
    margin-right: 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
      margin-right: 4px !important;
      margin-left: 0px !important;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>