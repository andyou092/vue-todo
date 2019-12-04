import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
//router를 사용하려면 VueRouter도 같이
Vue.use(VueRouter)
Vue.use(router)
//이것도 마찬가지로 VueX를 사용하기 위해서
Vue.use(Vuex)
//store폴더 자원을 사용하기 위해서.
Vue.use(store)

new Vue({
  el: ('#app'),
  router,
  store,
  render: h => h(App)
}).$mount('#app')

