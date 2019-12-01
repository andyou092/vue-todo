<!-- Component의 template를 뷰에 보이기 위해서  -->
<template>
    <div id="app">
    <router-link to="/devProfile">개발자 프로필</router-link> 
    <router-link to="/info" >서비스 소개</router-link> 
    <router-link to="/guide" @click="hide" >이용 방법</router-link>
    <!--  <router-view name="info" >asas</router-view>  -->
    <!--<router-view name="guide" >가이드</router-view> -->
    <router-view></router-view> 
     
     <button class="historyBack" @click="historyBack">돌아가기</button>
     <router-link to="/vue" tag="button" class="homeBtn">홈</router-link>
      
   
    <!--<Info></Info>-->
    <!-- <router-view></router-view> -->
    <TodoHeader></TodoHeader><!--Header template를 출력해라 -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput><!--TodoInput 컴포넌트에 있는 template, method와 연결이 되어 있는데 그것들이 활용이 되면 Vue.js로 와서 methods에 있는 addTodo(todoItem)에 데이터를 보내라. 데이터를 여기서 관리하기 위해서  -->
    <TodoList id="list" v-bind:propsdata="todoItems" @removeTodo="removeTodo" @updateTodo="updateTodo"></TodoList><!--list는 props를 통해 상위에서 하위로 데이터를 전달하기 위해서   /지우기 위해서 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하기 위해서 이벤트 발생시킨것을 수신하는것이다.. -->
     

    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    

    </div>
    
   

   
</template>
   

<script>
//컴포넌트를 사용하기 위해서 src를 입력를 주어 컴포넌트를 가지고 와라.
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


//var TodoFooter={    //ES5버전으로 할때는 이렇게 해야하지만 별루다.  컴포넌트가 많아질 경우 지저분하고, 유지보수에 단점으로 작용할 것 같다.
//    template:'<div>ES5버전이다</div>'
//};


// 컴포넌트를 정의해준다.
export default{
   // name:'left',
    data(){//데이터 배열로 초기화 지정
        return{
            todoItems:[]//데이터 가방
        }
    },
    methods:{
        addTodo(todoItem){//Todo add
            localStorage.setItem(todoItem,todoItem);
            this.todoItems.push(todoItem);
        },
        clearAll(){//Todo AllRemove
            localStorage.clear();//localStorage에 있는것을 모두 지워라.
            this.todoItems=[];//초기화
        },
        removeTodo(todoItem,index){//Todo selectItemRemove
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        updateTodo(todoItem,index){
            //index를 가지고온후에 내용수정? Input으로?
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);//4를 지우면 4에는 없거나 다른것이 있다.  인덱스 정보를가지고 있기에
            
            localStorage.setItem(index,todoItem);
            this.todoItems.push(todoItem);
            //this.todoItems.push( this.todoItems[index]=todoItem);
           // this.todoItems.push(localStorage.key(index));
        },
        historyBack(){
            history.back();
        },
        hide(){
            var lists =document.getElementById('list');
            lists.hidden=true;
        },
        homeBack(){

        }
    },
    created(){
        if(localStorage.length >0){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
            for(var i =0; i< localStorage.length;i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    components: {//component를 등록해랏!
      //  'Info':Info,
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter
  }

}
</script>
<style>
    .homeBtn{
        float: right;   
    }
    .historyBack{
        float: right;

    }
    body{
        text-align: center;
        background-color: #F6F6F8;

    }
    input{
        border-style: groove;
        width: 200px;
    }
    .shadow{
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
    }
</style>

