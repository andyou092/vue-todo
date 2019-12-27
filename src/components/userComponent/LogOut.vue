<template>
    <div class="logOut">
        <h3>로그인</h3>
            <button @click="logout">로그아웃</button>
            

    </div>
</template>

<script>
import firebase from 'firebase'
//여기서는 일단 localStorage에서 data[]에 데이터가 있는지 확인하고 있으면 로그인 없으면 alert로 회원가입을 하라고하자 저 꼼꼼히는 차후에 하자.
 
export default {
    name: 'logout',
    data() {
      return {
       
      }
    },
    methods: {
     logout: function(){
           firebase.auth().signOut().then(() => {
                alert("로그아웃 되었습니다")
                this.$store.commit('disLoginAuth')
                console.log('store dis로 커밋 ')
                this.$router.replace('user') 
            }).catch(function(error) {
            if(error){
                    alert("로그아웃 실패");
                   this.$router.replace('login')   
            }
            });
      }//logout
      
     
    }//methods
   
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