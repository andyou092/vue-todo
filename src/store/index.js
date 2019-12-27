import Vue from 'vue'
import Vuex from 'vuex'

//Vuex는 상태유지? 를 위해서 존재한다. action, state등
Vue.use(Vuex)
//
const store = new Vuex.Store ({
    state: {
        count: 0,
        listCount:0,
        auth:false,
        loginAuth:false//falst이면 로그인 화면 나오도록
        ,email:'logout'
    },
    mutations: {
        increase(state) {
            console.log('mutations increase에 들어온다.');
            return    state.count = state.count + 1;
        },
        increase1(state) {
            console.log('mutations increase에 들어온다.');
            return    state.count = state.count + 1;
        }
        ,
        decrease(state) {
            return   state.count = state.count - 1;
        },
        listCount(state) {
            console.log('mutations listCount에 들어온다.'+state.listCount);
            return    state.listCount = state.listCount + 1;
        },
        disListCount(state) {
            console.log('mutations dislistCount에 들어온다.'+state.listCount);
            return    state.listCount = state.listCount -1;
        },
        userAuth(state){
           
            return    state.auth = state.auth;
        },
        loginAuth(state){//로그인상태  true 니까 로그아웃 화면이 나와야한다
            state.email=state.email
            return    state.loginAuth = true,state.email;
            
        },
        loginEmail(state){//로그인상태  true 니까 로그아웃 화면이 나와야한다
            
            return  state.email=state.email;
            
        }
        ,
        disLoginAuth(state){//로그인 안된상태
            state.email='';
            return    state.loginAuth = false;
        }
    },
    actions: {
        increase1: function (state) {
          // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
          console.log('action increase에 들어온다.');
          return state.commit('increase');
        },
        userAuth: function (state) {
            // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
            console.log('action userAuth 들어온다.'+state);
            return state.commit('userAuth');
          }
      }
});
//외부에서 사용할 수 있도록 
export default store