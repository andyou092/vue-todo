import VueRouter from 'vue-router'
import Info from './components/Info.vue'
import Guide from './components/Guide.vue'
import DevProfile from './components/DevProfile.vue'
import GuideTest from './components/GuideTest.vue'
import TodoList from './views/todolist.vue'
import Counter from './views/counter.vue'
import Network from './views/network.vue'

var routes=[
    {path:'/info', component:Info},
    {path:'/guide', component:Guide},
    {path:'/devProfile', component:DevProfile},
    {path:'/guideTest', component:GuideTest},
    {path:'/todolist', component:TodoList},
    {path:'/counter', component: Counter},
    {path:'/network', component: Network}
  ];

var router= new VueRouter({
  routes
});

export default router