import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import store from './store'
import VeeValidate from 'vee-validate'
Vue.use(Buefy)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
