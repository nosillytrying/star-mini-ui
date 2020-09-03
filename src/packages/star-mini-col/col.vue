<template>
  <div class='star-mini-col' :class='colClass' :style='colStyle'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'star-mini-col',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
        type: Number,
        default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  data () {
      return {
          gutter: 0
      }
  },
  computed: {
    colClass () {
      let colClass = [];
      colClass.push(`star-mini-col-${this.span}`);
      if (this.offset) {
          colClass.push(`star-mini-col-offset-${this.offset}`)
      }
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(type => {
          if (typeof this[type] === Object) {
              let {
                  span,
                  offset
              } = this[type]
              span && colClass.push(`star-mini-col-${type}-${span}`);
              offset && colClass.push(`star-mini-col-${type}-offset-${offset}`);
          } else {
            this[type] && colClass.push(`star-mini-col-${type}-${this[type]}`);
          }
      })
      return colClass;
    },
    colStyle () {
        let colStyle = {};
        if (this.gutter) {
            colStyle = {
                ...colStyle,
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2 + 'px'
            }
        }
        return colStyle
    }
  }
};
</script>

<style lang='scss'>
@import '../../styles/_base';
@for $i from 0 through 24 {
  .star-mini-col-#{$i} {
      width: $i / 24 * 100%;
  }
  .star-mini-col-offset-#{$i} {
      margin-left: $i / 24 * 100%;
  }
}
@include response (xs) {
    @for $i from 1 through 24 {
        .star-mini-col-xs-#{$i}{
            width: $i / 24 * 100%;
        }
        .star-mini-col-xs-offset-#{$i}{
            width: $i / 24 * 100%;
        }
    }
}
@include response (sm) {
    @for $i from 1 through 24 {
        .star-mini-col-sm-#{$i}{
            width: $i / 24 * 100%;
        }
        .star-mini-col-sm-offset-#{$i}{
            width: $i / 24 * 100%;
        }
    }
}
@include response (md) {
    @for $i from 1 through 24 {
        .star-mini-col-md-#{$i}{
            width: $i / 24 * 100%;
        }
        .star-mini-col-md-offset-#{$i}{
            width: $i / 24 * 100%;
        }
    }
}
@include response (lg) {
    @for $i from 1 through 24 {
        .star-mini-col-lg-#{$i}{
            width: $i / 24 * 100%;
        }
        .star-mini-col-lg-offset-#{$i}{
            width: $i / 24 * 100%;
        }
    }
}
@include response (xl) {
    @for $i from 1 through 24 {
        .star-mini-col-xl-#{$i}{
            width: $i / 24 * 100%;
        }
        .star-mini-col-xl-offset-#{$i}{
            width: $i / 24 * 100%;
        }
    }
}
</style>