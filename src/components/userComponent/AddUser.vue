<template>
    <div>
        
        
            <input type="email" v-model="email" placeholder="Email Address">
            <input type="password" v-model="password" placeholder="Password">
            
        
        <button @click="addUser">회원가입</button>
        
    </div>
</template>

<script>
//여기서는 일단 localStorage에서 data[]에 데이터가 있는지 확인하고 있으면 로그인 없으면 alert로 회원가입을 하라고하자 저 꼼꼼히는 차후에 하자.
export default {
    data(){
        return{
            users:[],
            email:'',
            password:'',
            user:[]
        }
    },
    methods:{
        addUser(email,password){
            if(this.user !==""){//아이디 목록에 같은 아이디가 있으면 회원가입 되도록 해라!
                alert('회원가입 하세요.'+this.password)
                localStorage.setItem('object', JSON.stringify([{email: this.email} ,{password: this.password }]));
          //JSON.parse(localStorage.getItem('object')); // { a: 'b' }
            alert('UserLocaltrorage'+localStorage.getItem('object').password); // { a: 'b' }
                this.user={email,password};
                this.users.push(user);
                console.log(localStorage.getItem.email);

             
                 this.clearInput();
               
            }else{//아이디가 없으면
                alert('회원가입 하세요.'+this.password);
                localStorage.setItem('object', JSON.stringify({email: this.email , password: this.password }));
                alert('UserLocaltrorage'+localStorage.getItem('object')); // { a: 'b' }
                user={email,password};
                this.users.push(localStorage.key(0));
                console.log(localStorage.key(0));
                this.clearInput();
            }
            
            
        },
         clearInput(){//text란을 초기화 해주기 위해서.
            this.email='';
            this.password='';
        }

        
    }
    
}



</script>

<style scoped>

</style>