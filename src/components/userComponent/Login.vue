<template>
    <div class="login">
        <h3>로그인</h3>
            <input type="email" v-model="email" placeholder="Email Address">
            <input type="password" v-model="password" placeholder="Password">
            <button class="logBtn" @click="login">로그인</button>         
           <br>
            <span><router-link to="/googlelogin"><img class="googleLogo " src="assets\googlelogo.png"/> </router-link></span><br>
            <span><router-link to="/facebooklogin" ><img class="faceBookLogo" src="assets\faceBookLogo.png"/> </router-link></span><br>
            
            <span  type="button" class="btn btn-warning"> 
               <span>계정이 없다면 </span>
               <router-link to="/signup">회원가입</router-link>
            </span><br>
        
    </div>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
//const user = firebase.auth().currentUser;
 
export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''  ,
        users:[]   
      }
    },
    methods: {
      login() {//x => { ... } // 인수가 하나일 때
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          x=> {
            alert('로그인 완료!')
            
             this.$store.commit('loginAuth')
             let user = firebase.auth().currentUser;
             this.$store.state.email=user.email;
              this.$store.commit('loginEmail')
            alert(JSON.stringify(user.email))//JSON객체를 String으로 변환해준다. parse는 String을 JSON Object로 변환해준다.
          }
        ).catch( x=> {
           console.err('이메일 형식 로그인 err : ' + err)
           alert('에러 : ' + err.message)   
          });
            this.$router.replace(this.$route.query.redirect || '/')
            this.clearInput();
            
      }//logi
    ,clearInput(){ 
          this.email='';
          this.password='';
    },authUser() {
            this.$store.dispatch('authUser')
    }//authUser
    //methods
      
  },
  watch:{//유저 로그인 or 로그아웃시
          users: function (authUser) {
              if(this.$store.state.loginAuth) {
                  alert('유저 상태 값이 수정 되었습니다.')
                      this.$store.commit('authUser')
              }else{
                alert('유저 상태 값이 수정 되었습니다.')
                      this.$store.commit('authUser')
              }
          }
      }//watch
}



</script>

<style scoped>
    .signUp{
      margin-top: 10%;
      border: 3px solid black;
    }
    .login{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
   .logBtn {
    background-color: #2F3B52; /* Green */
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
    img{
      
      width: 20%;
    }
    span{
      font-size: 11px;
      width: 20%;
      font-weight: bold;
    }
   
</style>