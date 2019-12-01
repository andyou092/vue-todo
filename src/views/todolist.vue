<template>
    <div>
        <TodoHeader></TodoHeader><!--Header template를 출력해라 -->
        <p>이 친구는 todolist입니다.</p>
        <TodoInput v-on:addTodo="addTodo"></TodoInput><!--TodoInput 컴포넌트에 있는 template, method와 연결이 되어 있는데 그것들이 활용이 되면 Vue.js로 와서 methods에 있는 addTodo(todoItem)에 데이터를 보내라. 데이터를 여기서 관리하기 위해서  -->
        <TodoList id="list" v-bind:propsdata="todoItems" @removeTodo="removeTodo" @updateTodo="updateTodo"></TodoList><!--list는 props를 통해 상위에서 하위로 데이터를 전달하기 위해서   /지우기 위해서 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하기 위해서 이벤트 발생시킨것을 수신하는것이다.. -->
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>
<script>
import TodoHeader from '../components/TodoHeader.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'
export default {
    components: {//component를 등록해랏!
      //  'Info':Info,
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter
    },
    data(){//데이터 배열로 초기화 지정
        return{
            todoItems:[]//데이터 가방
        }
    },
    created(){
        if(localStorage.length >0){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
            for(var i =0; i< localStorage.length;i++){
                this.todoItems.push(localStorage.key(i));
            }
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
    
}

</script>
<style scoped>

</style>