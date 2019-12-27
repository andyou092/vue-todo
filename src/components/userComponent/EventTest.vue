
<template>
        <div>
         <h3>이벤트 리스너와 수식어</h3> 

        <p>한 번에 여러 이벤트와 각각의 리스너 선언 할 수 있다.</p>
          <button v-on="{mousedown: doThis, mouseup:doThat}">
             객체로 이벤트 리스너 추가
          </button>     
        <p>폼 이벤트 리스너.</p>
          <button v-on:click="reverseMessage">메시지 뒤집기</button>
           <p>{{ message }}</p>

          <button v-on:click="reverseMessageArg('인자1')">인자값 추가 메시지 뒤집기</button>
           <p>{{ messageArg }}</p>

        <p>v-model을 이용한 양방향 바인딩</p>
        <input type="text" v-model="messageForm" v-on:keyup.enter="binding">

        <p>명시적으로 이벤트 정보 전달</p>
        <button v-on:click ="greet($event)">Greet</button>

        <p></p>
        <button v-on:click="warn('Form cannot be submitted yey.', $event)">Submit</button>
        </div>
</template>

<script>
import AddUser from '../userComponent/AddUser'



export default {
   data(){//데이터 배열로 초기화 지정
      return{
          message: '뒤집기 전',
           messageArg: '뒤집기 전',
           messageForm:'양방향 바인딩',
           name:'Vue.js'
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
        
     }
       
   }
   
}
</script>

<style scoped>
  button{
     background-color:#2F3B52;; /* Green */
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

</style>