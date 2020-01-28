<template>
  <div>
    
      <button class="social-button" v-on:click="googleLogin">
      <img alt="faseBookLogin Logo" src="\assets\googlelogo.png">
      </button>
    
  </div>
</template>

<script>
import firebase from 'firebase'
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

 provider.setCustomParameters({
  'display': 'popup'
})
 
export default {
  name: 'googleLogin',
  data() {
    return {
    userEmail:''
    }
  },
  methods: {
    googleLogin() {
      firebase.auth().signInWithPopup(provider).then((result) => {//es06
        var token = result.credential.accessToken
        var user = result.user
 
        console.log("token : " + token)
        console.log("user : " + user)
        this.$store.commit('loginAuth')
         let userEmail = firebase.auth().currentUser;
             this.$store.state.email=userEmail.email;
              this.$store.commit('loginEmail')
        this.$router.replace('TodoList')
        
      }).catch((err) => {
        alert('에러 : ' + err.message)
      });
    }
  }
}//methods


</script>

<style>


</style>