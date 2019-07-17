import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  moment,
  render: h => h(App)
}).$mount('#app')
