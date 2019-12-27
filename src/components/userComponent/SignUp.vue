<template>

    <div class="sign-up">
         <p>회원가입</p>
            <input type="email" v-model="email" placeholder="Email Address">
            <input type="password" v-model="password"  placeholder="Password">
            <button @click="signUp">가입하기</button>
            <span>또는 <router-link to="/login"> 로그인</router-link>으로 돌아가기</span>"

    </div>


</template>

<script>
import firebase from 'firebase'

export default {
    name:'signUp',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
         signUp:function() {
             //createUserWithEmailAndPassword 메소드는 onResolve, onReject 콜백과 파이어베이스의 프로미스를 반환해준다.
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    alert('회원가입 완료!')
                },
                function(err) {
                    alert('에러 : ' + err.message)
                }
            );//then
        }
    }   
}//default
    

</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        background-color: #2F3B52; /* Green */
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }

</style>
