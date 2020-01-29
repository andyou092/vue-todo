<template>
   <div>
       <h2>vue.js</h2>
    <ul> 
       
        <router-link to="/logout" tag="button" v-if="isLogin()">로그아웃</router-link>
       <router-link to="/login" tag="button" v-else>로그인</router-link>

    <p v-if="loginValue">{{this.$store.state.email}}로그인중</p>

    </ul>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            loginValue:''
        }    
    },
    methods:{
        isLogin:function (){
            console.log(this.$store.state.loginAuth)
            this.loginValue =this.$store.state.loginAuth;
                 firebase.auth().signOut().then(function() {
            // Sign-out successful.
                console.log('logOut 성공');
            }).catch(function(error) {
            // An error happened.
            console.log('logOut 실패'+ err);
            }); 
            return this.loginValue;
        }
    }
   /*  watch:{
        loginValue:function(){
          //  this.loginValue =this.$store.state.loginAuth;

             firebase.auth().signOut().then(function() {
            // Sign-out successful.
                console.log('logOut 성공');
            }).catch(function(error) {
            // An error happened.
            console.log('logOut 실패'+ err);
            });
        }
    }//watch */
}
</script>

<style scoped>
    header{
        font-size: 20px;
        color: #2F3B52;
        font-weight: 1000;
        margin: 2.5rem 0 1.5rem;
    }
    .login{
        margin-top: 20%;
    }
    router-link{
        float: right;
    }
    button{
    background-color: rgb(63, 78, 97); /* Green */
    border: none;
    color: white;
    padding: 4px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>

