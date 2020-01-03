<template>
    <div>
        <TodoInput v-on:addTodo="addTodo"></TodoInput><!--TodoInput 컴포넌트에 있는 template, method와 연결이 되어 있는데 그것들이 활용이 되면 Vue.js로 와서 methods에 있는 addTodo(todoItem)에 데이터를 보내라. 데이터를 여기서 관리하기 위해서  -->
         <h3>|할일 개수 : {{this.$store.state.listCount}}개 |</h3>        
        <TodoList id="list" v-bind:propsdata="todoItems" @removeTodo="removeTodo" @updateTodo="updateTodo"></TodoList><!--list는 props를 통해 상위에서 하위로 데이터를 전달하기 위해서   /지우기 위해서 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하기 위해서 이벤트 발생시킨것을 수신하는것이다.. -->
        <!-- <TodoList id="list" v-bind:propsdata="todoItems1" @removeTodo="removeTodo" @updateTodo="updateTodo"></TodoList> -->
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
        alert('created들어온다.')
        //if(localStorage.length<=this.$store.state.listCount){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
         if(localStorage.length>0){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
         // 123   13   =  0,1                            /3     2    
           for(let i =0; i< this.$store.state.listCount; i++){  
              //this.todoItems.push(localStorage.key(i));
              alert('localStorage.length : '+ localStorage.length);
                let getValue = localStorage.getItem(i);
                alert('localStorage.getItem(i) : '+ localStorage.getItem(i)+ " i는 : "+ i );
                this.todoItems.push(getValue);
             
                console.log(this.$store.state.listCount+'입니다.');
            }
        }else{
               alert('다시 확인해주세요');
               
        } 
        
    },
    watch:{
        todoItems: function (newVal) {
        //add
            if(this.$store.state.todoC){                
                console.log('watch add 들어왔다.')
                this.$store.commit('listCount')
                this.$store.commit('disTodoC')
        //update
            }else if(this.$store.state.todoU){
                console.log('watch update 들어왔다.')
                
                this.$store.commit('disTodoU');
        //delete
            }else if(this.$store.state.todoD){
                console.log('watch delete 들어왔다.')
                this.$store.commit('disTodoD')
                this.$store.commit('disListCount')
         //allDelete  
           }else if(this.$store.state.todoAD) {
                console.log('watch allDelte 들어왔다.')
                this.$store.state.todoAD=false;
            }else{
               alert('다시 확인 해주시길 바랍니다.');
            }    
        }//todoItems
    },
    methods:{
        addTodo(todoItem){//Todo add   
            localStorage.setItem(this.$store.state.listCount,todoItem);//key, value
            let aTGetValue = localStorage.getItem(this.$store.state.listCount,todoItem);
            this.todoItems.push(aTGetValue);
            console.log(localStorage.length)
        },
        clearAll(){//Todo AllRemove
            localStorage.clear();//localStorage에 있는것을 모두 지워라.
            this.todoItems=[];//초기화
            this.$store.commit('allDisTodoItems')
        },
        removeTodo(todoItem,index){//Todo selectItemRemove
          alert('todolist의 removeTodo의 인자값 : '+todoItem+'index는 : ' + index);
            console.log('todolist의 removeTodo에 들어왔다');
          //  let aa = this.todoItems.indexOf(index,0);
          console.log('this.todoItem은 : '+ todoItem)
            localStorage.removeItem(todoItem);    
            this.todoItems.splice(index,1);
            //localStorage.push(index,aa);
            /* for(let j=0; j<localStorage.length ;j++){
                alert(j+'는'+localStorage.getItem(j))
            }; */
           //     localStorage.splice(index,1);       
          
                    
              alert('todolist의 removeTodo의 localStorage.length : '+ localStorage.length );
        },
        updateTodo(todoItem,index){//Todo update
        console.log('updateTodo index값' + index + 'todoItem : '+ todoItem);
            this.todoItems.splice(index,1,todoItem);
            localStorage.setItem(index,todoItem);           
            alert('update index는' + index); 
        },
        historyBack(){
            history.back();
        }
    },
    
}

</script>
<style scoped>

</style>