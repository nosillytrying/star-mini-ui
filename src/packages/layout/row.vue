<template>
  <div class='start-mini-row' :style='rowStyle'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'start-mini-row',
  props: {
      gutter: {
          type: Number,
          default: 0
      },
      justify: {
          type: String,
          default: 'flex-start',
          validator (justify) {
              if (justify && !['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].includes(justify)) {
                  console.error(`justify的值必须为: ${['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].join('、')}`)
              }
              return true
          }
      }
  },
  computed:{
    rowStyle () {
        let rowStyle = {}
        if (this.gutter) {
            rowStyle = {
                ...rowStyle,
                marginLeft: -this.gutter / 2 + 'px',
                marginRight: -this.gutter / 2 + 'px',
            }
        }
        if (this.justify) {
            rowStyle = {
                ...rowStyle,
                justifyContent: this.justify
            }
        }
        return rowStyle; // 通过外层的margin 负值 解决第一个孩子和最后一个孩子的内部的padding问题
    }
  },
  mounted () {
    this.$nextTick(() => {
        this.$children.forEach(child => child.gutter = this.gutter)
    })
  }
};
</script>

<style lang='scss'>
.start-mini-row {
  display: flex;
  flex-wrap: wrap;
}
</style>