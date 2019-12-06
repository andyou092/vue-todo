import VueRouter from 'vue-router'
import Info from './components/Info.vue'
import Guide from './components/Guide.vue'
import DevProfile from './components/DevProfile.vue'
import GuideTest from './components/GuideTest.vue'
import Todolist from './views/todolist.vue'
import Counter from './views/counter.vue'
import Network from './views/network.vue'
import TodoHeader from './components/TodoHeader.vue'
import LoginForm from './components/userComponent/LoginForm.vue'
import User from './components/userComponent/User.vue'
import UserList from './components/userComponent/UserList.vue'

var routes=[
    {path:'/todoheader', component:TodoHeader},
    {path:'/info', component:Info},
    {path:'/guide', component:Guide},
    {path:'/devProfile', component:DevProfile},
    {path:'/guideTest', component:GuideTest},
    {path:'/todolist', component:Todolist},
    {path:'/counter', component: Counter},
    {path:'/network', component: Network},
    {path:'/loginform', component: LoginForm},
    {path:'/user', component: User},
    {path:'/userlist', component: UserList},
  ];

const router= new VueRouter({
  routes
});

export default router