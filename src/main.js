import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueRouter)
Vue.use(router)
Vue.use(Vuex)
Vue.use(store)

new Vue({
  el: ('#app'),
  router,
  store,
  render: h => h(App)
}).$mount('#app')

