import VueRouter from 'vue-router'
import Info from './components/Info.vue'
import Guide from './components/Guide.vue'
import DevProfile from './components/DevProfile.vue'
import GuideTest from './components/GuideTest.vue'
import Todolist from './views/todolist.vue'
import Counter from './views/counter.vue'
import Network from './views/network.vue'
import TodoHeader from './components/TodoHeader.vue'
import Login from './components/userComponent/Login.vue'
import SignUp from './components/userComponent/SignUp.vue'
import User from './components//userComponent/User.vue'
import UserList from './components/userComponent/UserList.vue'
import AddUser from './components/userComponent/AddUser.vue'
import App from './App.vue'

var routes=[
    {path:'/todoheader', component:TodoHeader},
    {path:'/info', component:Info},
    {path:'/guide', component:Guide},
    {path:'/devProfile', component:DevProfile},
    {path:'/guideTest', component:GuideTest},
    {path:'/todolist', component:Todolist},
    {path:'/counter', component:Counter},
    {path:'/network', component:Network},
   // {path:'/loginForm', component:LoginForm},
    {path:'/user', component:User},
    {path:'/userlist', component: UserList},
    {path:'/addUser', component: AddUser},
    {path:'/login',name:'Login',component: Login},
    {path:'/signup',name:'SignUp',component: SignUp}
  ];

const router= new VueRouter({
  mode:'history',
  routes
});

export default router