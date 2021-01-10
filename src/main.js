import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Vue.use(axios)
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common[`Content-Type`] = "application/json";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
