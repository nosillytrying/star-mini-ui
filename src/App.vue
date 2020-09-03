<template>
  <div>
    <!-- <ul class='infinite-scroll' 
        v-infinite-scroll='load'
        infinite-scroll-disabled='disabled'
        infinite-scroll-delay='delay'
        infinite-scroll-distance='distance'
        infinite-scroll-immediate='immediate'
      >
        <li v-for='c in count' :key='c'>{{c}}</li>
      </ul> -->
    <!-- <star-mini-popover v-model='value' width='200px' title='标题' content='内容内容 这是一个popover' trigger='click' placement='right'>
      <star-mini-button slot='reference' type='primary'>
        点我弹框
      </star-mini-button>
    </star-mini-popover> -->
    <!-- <star-mini-carousel
      height='200px'
      :autoplay='true'
      :delay='3000'
      :initial-index='0'
      :loop='true'
      @change='change'
    >
      <star-mini-carousel-item>
        <div>内容1</div>
      </star-mini-carousel-item>
      <star-mini-carousel-item>
        <div>内容2</div>
      </star-mini-carousel-item>
      <star-mini-carousel-item>
        <dir>内容3</dir>
      </star-mini-carousel-item>
    </star-mini-carousel> -->
    <star-mini-table :columns="columns1" :data="data1"></star-mini-table>
    <star-mini-pagination :total='10' :pager-count='5' :current-page.sync='currentPage'></star-mini-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      count: 0,
      disabled: false,
      delay: 200,
      distance: 30,
      immediate: true,
      currentPage: 5,
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    };
  },
  methods: {
    change(e) {
      console.log(e, 'eeeeee');
    },
    load() {
      this.count += 2;
    }
  }
};
</script>

<style lang='scss'>
.infinite-scroll {
  overflow-y: scroll;
  width: 400px;
  height: 300px;
  border: 1px solid green;
}
</style>