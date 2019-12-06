<template>
    <div>
        <form @submit.prevent="login(email, password)">
            <input type="email" v-model="email" placeholder="Email Address">
            <input type="password" v-model="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>


        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:[],
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            
            alert(this.email+ '|' + this.password);
            
            this.email='';
            this.password='';
        }

        
    }
    
}



</script>

<style scoped>

</style>