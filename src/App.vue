<template>
  <div id="app">
    <start-mini-button-group>
      <start-mini-button type='primary' icon="left" position="left">上一页</start-mini-button>
      <start-mini-button type='primary' icon="right" position="right">下一页</start-mini-button>
    </start-mini-button-group>
    <start-mini-button-group>
      <start-mini-button icon="edit" type='primary'></start-mini-button>
      <start-mini-button icon="sousuo" type='primary'></start-mini-button>
      <start-mini-button icon="xiazai" type='primary'></start-mini-button>
    </start-mini-button-group>
    <start-mini-row :gutter='10'>
      <start-mini-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </start-mini-col>
      <start-mini-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </start-mini-col>
      <start-mini-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </start-mini-col>
      <start-mini-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </start-mini-col>
    </start-mini-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    submit(e) {
      console.log(e, 'submit');
    }
  }
};
</script>

<style lang="scss">
.red {
  background: red;
}
.green {
  background: green;
}
.start-mini-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
