<template>
  <div>
    
      <button class="social-button" v-on:click="faceBookLogin">
      <img alt="faceBookLogin Logo" src="assets\facebooklogo.png">
      </button>
    
  </div>
</template>

<script>
import firebase from 'firebase'
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');

 provider.setCustomParameters({
  'display': 'popup'
})




 
export default {
  name: 'faceBookLogin',
  data() {
    return {
    
    }
  },
  methods: {
    faceBookLogin() {
      firebase.auth().signInWithPopup(provider).then((result) => {
        var token = result.credential.accessToken
        var user = result.user
 
        console.log("token : " + token)
        console.log("user : " + user)

        this.$store.commit('loginAuth')
        this.$router.replace('user')
        
      }).catch((err) => {
        alert('에러 : ' + err.message)
      });
    }
  }
}//methods


</script>

<style>

.social{
  
}


</style>