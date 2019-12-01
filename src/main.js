import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Info from './components/Info.vue'
import Guide from './components/Guide.vue'
import TodoList from './components/TodoList.vue'
import DevProfile from './components/DevProfile.vue'
import GuideTest from './components/GuideTest.vue'
Vue.use(VueRouter)




var routes=[
    {path:'/info', component:Info},
    {path:'/guide', component:Guide},
    {path:'/devProfile', component:DevProfile},
    {path:'/guideTest', component:GuideTest},
    {path:'/', component:Vue}
  ];

var router= new VueRouter({
  routes
});




new Vue({
  el: ('#app'),
  router
  ,
  render: h => h(App)
}).$mount('#app')

