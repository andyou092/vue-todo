import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'//라이브러리
import router from './router'//.js
import Vuex from 'vuex'//.js
import store from './store'//폴더에 있는 자원을 사용 하겠다.
import firebase from 'firebase'
import VuePrism from 'vue-prism'
Vue.use(VuePrism)
import 'prismjs/themes/prism.css'


//router를 사용하려면 VueRouter도 같이
Vue.use(VueRouter)
Vue.use(router)
//이것도 마찬가지로 VueX를 사용하기 위해서
Vue.use(Vuex)
//store폴더 자원을 사용하기 위해서.
Vue.use(store)
Vue.use(firebase)

var routerPush = VueRouter.prototype.push

  VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
  }
/////
//Google 제공업체 객체의 인스턴스를 생성합니다

//선택사항: 인증 제공업체에 요청하고자 하는 OAuth 2.0 범위를 추가로 지정합니다. 범위를 추가하려면 addScope을 호출합니다. 예를 들면 다음과 같습니다.
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

//Google 제공업체 객체를 사용해 Firebase에 인증합니다. 팝업 창을 띄우거나 로그인 페이지로 리디렉션하여 사용자가 Google 계정에 로그인하도록 유도할 수 있습니다. 휴대기기의 경우 리디렉션을 사용할 것을 권장합니다.
//팝업 창을 사용해서 로그인하려면 다음과 같이 signInWithPopup을 호출합니다
    
 ///////////////////////////////////// 




const firebaseConfig = {
  apiKey: "AIzaSyDDnksJybwBbhHk_a8dH_dI4VrpJqRNP4Q",
  //authDomain: 'auth.custom.domain.com',
  authDomain: "vue-todo-7bcd7.firebaseapp.com",
  databaseURL: "https://vue-todo-7bcd7.firebaseio.com",
  projectId: "vue-todo-7bcd7",
  storageBucket: "vue-todo-7bcd7.appspot.com",
  messagingSenderId: "495080120211",
  appId: "1:495080120211:web:71a50ece62794ad3149266",
  measurementId: "G-8QLKHZMJXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//전역 컴포넌트 등록
/* 
Vue.component('my-component', {
  // 옵션
})
 */
new Vue({
  el: ('#app'),
  router,
  store,
  render: h => h(App)
}).$mount('#app')

