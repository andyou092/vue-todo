
<template>
  <div>
      <p>된다.</p>
  </div>
    
</template>

<script>
import AddUser from '../userComponent/AddUser'



 

export default {
  //el: ('#example-2'), 
    data(){//데이터 배열로 초기화 지정
      return{
          message: '뒤집기 전',
           messageArg: '뒤집기 전',
           messageForm:'양방향 바인딩',
           name:'Vue.js',
           counter: 0
      } 
    },     
   methods:{
    doThis:function(){
      console.log('마우스가 눌렀어요.')
    },
    doThat:function(){     
      console.log('마우스가 땠습니다.')
    },
    reverseMessage:function(){
      this.message= this.message.split('').reverse().join('');
    },
    reverseMessageArg:function(arg1){
      this.messageArg= this.messageArg.split('').reverse().join('')+arg1;
    },
    binding:function(){
      console.log(this.messageForm)
       alert('바뀐 값'+this.messageForm)
    },
    greet:function(event){
      alert('Hello '+ this.name);
       if(event){
          alert(event.target.tagName);
       }//if
    },
    warn:function(message,event){
      if(event)event.preventDefault
        alert(message);
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // 이제 네이티브 이벤트에 액세스 할 수 있습니다
      if (event) event.preventDefault()
      alert(message)
    },
    warn1: function (message, event) {
    // 이제 네이티브 이벤트에 액세스 할 수 있습니다
      if (event) event.preventDefault()
      alert(message)      
    }//warn1 
   }
}//default
</script>

<style scoped>
  button{
    background-color:#2F3B52;; /* Green */
    /* border: none; */
    color: white;
    padding: 15px 30px;
    /* text-align: center; */
    text-decoration: none;
/*     display: inline-block; */
    font-size: 16px;
    
    
    border:3px solid rgb(97, 63, 65);
  }
  pre{
     border:3px solid rgb(63, 78, 97);
      width: 51%;
      background-color: rgb(132, 135, 138);
      text-align: left;
      color: white;
  }
  h2{
      text-align: left;
      width: 51%;
  }
  h3{
      text-align: left;
      width: 51%;
  }
  p{
      text-align: left;
      width: 51%;
  }
  ul{
      text-align: left;
  }
  li{
      text-align: left;
  }
  .demo{
    margin-left: -52%;
  }
 

</style>