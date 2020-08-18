import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import VueCookie from 'vue-cookie'
import jquery from 'jquery'

import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/index.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(Loading, {
  canCancel: false,
  color: '#D6C385',
  loader: 'dots',
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8
})

window.$ = jquery

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
