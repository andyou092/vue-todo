<template>
    <div class="login">
        <h3>로그인</h3>
            <input type="email" v-model="email" placeholder="Email Address">
            <input type="password" v-model="password" placeholder="Password">
            <button @click="login">로그인</button>
            <p>만약  계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>

    </div>
</template>

<script>
import firebase from 'firebase'
//여기서는 일단 localStorage에서 data[]에 데이터가 있는지 확인하고 있으면 로그인 없으면 alert로 회원가입을 하라고하자 저 꼼꼼히는 차후에 하자.
export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        user:false
      }
    },
    methods: {
      login() {
          alert(this.password)
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user) {
          
            alert('로그인 완료!')
              
           
           
          
          },
          function(err) {
            alert('에러 : ' + err.message)
          }
        );
         this.$router.replace(this.$route.query.redirect || '/')
       this.clearInfut();
      }//login
      ,
      clearInfut(){ 
          this.email='';
          this.password='';
    },
        authUser() {
            this.$store.dispatch('authUser')
        }
    }//methods
    ,watch:{
        todoItems: function (authUser) {
            if(this.$store.state.listCount <localStorage.length) {
                alert('리스트 개수 값이 수정 되었습니다.')
                    this.$store.commit('authUser')
            }else{
                    this.$store.commit('authUser')
            }
        }
    }
  }//default



</script>

<style scoped>
    .login{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
</style>