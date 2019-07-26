import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMoment  from 'vue-moment'
import './registerServiceWorker'
// import 'materialize-css'
Vue.config.productionTip = false
Vue.use(VueMoment )

new Vue({
  router,
  store,
  VueMoment,
  render: h => h(App)
}).$mount('#app')
