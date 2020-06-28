import Vue from 'vue'
import App from './App.vue'

import hsUi from './packages/index'

Vue.config.productionTip = false
Vue.use(hsUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
