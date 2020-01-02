<template>
    <div>
        <TodoInput v-on:addTodo="addTodo"></TodoInput><!--TodoInput 컴포넌트에 있는 template, method와 연결이 되어 있는데 그것들이 활용이 되면 Vue.js로 와서 methods에 있는 addTodo(todoItem)에 데이터를 보내라. 데이터를 여기서 관리하기 위해서  -->
         <h3>|할일 개수 : {{this.$store.state.listCount}}개 |</h3>        
        <TodoList id="list" v-bind:propsdata="todoItems" @removeTodo="removeTodo" @updateTodo="updateTodo"></TodoList><!--list는 props를 통해 상위에서 하위로 데이터를 전달하기 위해서   /지우기 위해서 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하기 위해서 이벤트 발생시킨것을 수신하는것이다.. -->
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>
<script>
import TodoHeader from '../components/TodoHeader.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'
import User from '../components/userComponent/AddUser.vue'
import { mapState } from 'vuex'
export default {
    components: {//component를 등록해랏!
        'TodoHeader':TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter,
        'User':User
    },
    data(){//데이터 배열로 초기화 지정
        return{
            todoItems:[]//데이터 가방
        }
    },
    created(){
       //alert('created this.$store.state.listCount는'+this.$store.state.listCount);
       //localStorage.length >2
        if(this.$store.state.listCount <aa){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
            for(let i =0; i< this.$store.state.listCount;i++){  
                var aa=i;
          //alert('created for문 들어온다'+localStorage.length )
                this.todoItems.push(localStorage.key(i));
                console.log(this.$store.state.listCount+'입니다.');
                this.$store.commit('listCount')
                
            }
        }else{
               alert('다시 확인해주세요');
               
        } 
        
    },
    watch:{
        todoItems: function (newVal) {
        //add
            if(this.$store.state.todoC){
              //alert('watch add 들어왔다.')
                this.$store.commit('listCount')
              //alert('watch add commit listCount 값'+ this.$store.state.listCount)
                this.$store.commit('disTodoC')
              //alert('watch add commit todoC 값'+ this.$store.state.todoC)
        //update
            }else if(this.$store.state.todoU){
              //alert('watch update 들어왔다.')  
                this.$store.commit('disTodoU');
              //alert('watch update commit todoU 값'+ this.$store.state.todoU)
        //delete
            }else if(this.$store.state.todoD){
              //alert('watch delete 들어왔다.')
                this.$store.commit('disTodoD')
                this.$store.commit('disListCount')
                alert('watch delete commit listCount 값'+ this.$store.state.listCount)
              //alert('watch delete commit todoD 값'+ this.$store.state.todoD)
         //allDelete  
           }else if(this.$store.state.todoAD) {
              //alert('watch allDelete 들어왔다.')
              //alert('watch allDelete commit listCount 값'+ this.$store.state.listCount)
                this.$store.state.todoAD=false;
              //alert('watch allDelete commit todoC 값'+ this.$store.state.todoAD)
            }else{
                alert('다시 확인 해주시길 바랍니다.');
            }    
        }//todoItems
    },
    methods:{
        addTodo(todoItem){//Todo add   
            localStorage.setItem('todoItem',todoItem);
        //    alert('todolist의 addTodo localStorage.setItem의 localStorage.length'+localStorage.length);
            this.todoItems.push(todoItem);
            console.log(localStorage.length)
        //    alert('todolist의 addTodo localStorage.length'+localStorage.length);
        },
        clearAll(){//Todo AllRemove
            localStorage.clear();//localStorage에 있는것을 모두 지워라.
            this.todoItems=[];//초기화
            this.$store.commit('allDisTodoItems')
        },
        removeTodo(todoItem,index){//Todo selectItemRemove
        //    alert('todolist의 removeTodo의 인자값 : '+todoItem+'index는 : ' + index);
            this.todoItems.splice(index,1);
            localStorage.removeItem(index);
            this.$store.commit('todoD');
        },
        updateTodo(todoItem,index){//Todo update
            this.todoItems.splice(index,1,todoItem);
            this.$store.commit('todoU');
        },
        historyBack(){
            history.back();
        }
    },
    
}

</script>
<style scoped>

</style>