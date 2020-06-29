import Vue from 'vue'
import App from './App.vue'

import starMiniUi from './packages/index'
Vue.config.productionTip = false
Vue.use(starMiniUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
