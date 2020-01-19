<template>
    <div>
        <todo-input  v-on:addTodo="addTodo"></todo-input><!--TodoInput 컴포넌트에 있는 template, method와 연결이 되어 있는데 그것들이 활용이 되면 Vue.js로 와서 methods에 있는 addTodo(todoItem)에 데이터를 보내라. 데이터를 여기서 관리하기 위해서  -->
         <!-- <div class="listCount"> -->
         <h4>|할일 개수 : {{this.$store.state.listCount}}개 |</h4>        
         <!-- </div> -->
        <todo-list id="list" propsTest="정적 props테스트"  v-bind:propsdata="todoItems" @removeTodo="removeTodo" @updateTodo="updateTodo"></todo-list><!--list는 props를 통해 상위에서 하위로 데이터를 전달하기 위해서   /지우기 위해서 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하기 위해서 이벤트 발생시킨것을 수신하는것이다.. -->
        <!-- <TodoList id="list" v-bind:propsdata="todoItems1" @removeTodo="removeTodo" @updateTodo="updateTodo"></TodoList> -->
        <todo-footer v-on:removeAll="clearAll"></todo-footer>
       
    </div>
</template>
<script>
import TodoHeader from '../components/TodoHeader.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'
//import User from '../components/userComponent/AddUser.vue'
import { mapState } from 'vuex'
export default {
    components: {//component를 등록해랏!
        'todo-header':TodoHeader,
        'todo-input': TodoInput,
        'todo-list': TodoList,
        'todo-footer': TodoFooter,
       
        //'user':User
    },
    data(){//데이터 배열로 초기화 지정
        return{
            todoItems:[]//데이터 가방
            ,removeTodoIndex:0,
            propsTest:'부모 데이터'//정적 props Test코드
        }
    },
    //created:function(){
        created(){
        console.log('created들어온다.');
        if(localStorage.length>0){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.  
            for(let i =0; i< this.$store.state.listCount; i++){ 
            let getValue = localStorage.getItem(i);//0,1,2,3
            this.todoItems.push(getValue);
            console.log('created this.$store.state.listCount'+this.$store.state.listCount+'이다.');
            }//for
               // }//else
            this.$store.commit("disTodoD");
        }else{//if
               console.log('데이터가 아직 없습니다.');     
        }//else 
        
    },
    watch:{
        todoItems: function (newVal) {
        //add
            if(this.$store.state.todoC){                
                console.log('watch add 들어왔다.');
                this.$store.commit('listCount');
                this.$store.commit('disTodoC');
        //update
            }else if(this.$store.state.todoU){
                console.log('watch update 들어왔다.');
                this.$store.commit('disTodoU');
        //delete
            }else if(this.$store.state.todoD){
                console.log('watch delete 들어왔다.')
                this.$store.commit('disListCount');
                this.$store.commit('disTodoD');
         //allDelete  
           }else if(this.$store.state.todoAD) {
                console.log('watch allDelte 들어왔다.');
                this.$store.state.todoAD=false;
            }else{
               console.log('watch else 들어왔다..');
            }    
        }//todoItems
    },
    methods:{
        /* 

        */

     addTodo(todoItem){//Todo add   
            localStorage.setItem(this.$store.state.listCount,todoItem);//key, value
            let aTGetValue = localStorage.getItem(this.$store.state.listCount,todoItem);
            this.todoItems.push(aTGetValue);
            console.log(localStorage.length);
        },
        clearAll(){//Todo AllRemove
            localStorage.clear();//localStorage에 있는것을 모두 지워라.
            this.todoItems=[];//초기화
            this.$store.commit('allDisTodoItems')
        },
        removeTodo(todoItem,index){//Todo selectItemRemove
            this.$store.commit('todoD');
            console.log('todolist의 removeTodo에 들어왔다');
            console.log('this.todoItem은 : '+ todoItem)
            this.todoItems.splice(index,1);
            localStorage.removeItem(index); //0,1,2,{3},4      index : 3
            for(let i=index; i<=this.todoItems.length;i++){
                localStorage.setItem(i,this.todoItems[i]);// 3 / 전
            }//for      
            localStorage.removeItem(localStorage.length); //0,1,2,4,{null}  
        },
        updateTodo(todoItem,index){//Todo update
        console.log('updateTodo index값' + index + 'todoItem : '+ todoItem);
            this.todoItems.splice(index,1,todoItem);
            localStorage.setItem(index,todoItem);           
        },
        historyBack(){
            history.back();
        }
    },
    
}

</script>
<style scoped>
    h4{
        margin-top: 4%;
    }
</style>