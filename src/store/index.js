import Vue from 'vue'
import Vuex from 'vuex'
//Vuex는 상태유지? 를 위해서 존재한다. action, state등
Vue.use(Vuex)
//
const store = new Vuex.Store ({
    state: {
        count: 0
    },
    mutations: {
        increase(state) {
            state.count = state.count + 1
        },
        decrease(state) {
            state.count = state.count - 1
        }
    }
})

export default store