
<template>
        <div>
         <h3>User Page</h3> 
        <router-link to="/addUser" v-on="addUser" >회원가입</router-link> | 
        <router-link to="/addUser" >회원목록</router-link> | 
        <router-link to="/addUser" >로그인</router-link> | 
        <!-- <UserList v-bind:userpropsdata="users" ></UserList>
        <TodoList id="list" v-bind:propsdata="user"
        
          -->
        </div>
</template>

<script>
import AddUser from '../userComponent/AddUser'



export default {
   data(){//데이터 배열로 초기화 지정
        return{
            users:[]
        }
    },
    created(){
      //  for(let i =0; i< localStorage.length;i++){
      //          this.users.push(localStorage.key(i));
      //          console.log(this.$store.state.listCount+'입니다.');
      //  }
    },
    components:{
     'AddUser':AddUser
   },
   methods:{
     addUser(email,password){
       alert(들어오네);
       localStorage.setItem('object', JSON.stringify({ email: email },{ password: password }));
          
          JSON.parse(localStorage.getItem('object')); // { a: 'b' }

          localStorage.setItem('user',email,password);
            this.users.push(user);
            console.log(localStorage.key(0));
     }
   }
   
}
</script>

<style scoped>

</style>