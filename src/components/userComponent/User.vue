
<template>
        <div>
            <!--<LoginForm ></LoginForm>  -->
        <!-- <router-link to="/loginform">유저</router-link> |  -->
        <!-- <UserList v-bind:userpropsdata="users" ></UserList>  -->
        </div>
</template>

<script>
///C:\vuejs\vue-todo\src\components\user\LoginForm.vue
import LoginForm from './components/userComponent/LoginForm.vue'
//import AddUser from './components/user/AddUser'



export default {
   data(){
  //     users:[]
   },  
   methods:{
   addUser(email,password){//Todo add
            alert('들어오네 들어와');
            this.users.push(email,password);
            console.log('이메을과 비밀번호는 |'+ email+'|'+password);
        }
//
   } ,
  // created(){
   //     for(let i =0; i< localStorage.length;i++){
  //              this.users.push(localStorage.key(i));
  //              console.log(this.$store.state.listCount+'입니다.');
  //      }
  //  },
   components:{
       'LoginForm':LoginForm
   //     'UserList':UserList
   }
}
</script>

<style scoped>

</style>