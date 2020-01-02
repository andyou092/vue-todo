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
       //localStorage.clear();
        //alert(localStorage.getItem.key(1))
       alert('created this.$store.state.listCount는'+this.$store.state.listCount);
       //localStorage.length >2
        if(this.$store.state.listCount <aa){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
            //
            //localStorage.lengt
            for(let i =0; i< this.$store.state.listCount;i++){  
                var aa=i;
            alert('created for문 들어온다'+localStorage.length )
                this.todoItems.push(localStorage.key(i));
            //    localStorage.setItem(todoItem);
                console.log(this.$store.state.listCount+'입니다.');
                this.$store.commit('listCount')
                
            }
        }else{
               alert('다시 확인해주세요');
               
        } 
        
    },
    watch:{
        todoItems: function (newVal) {
            alert('todolist의watch localStorage.length는'+localStorage.length);
            // 0 == 1 -> 
            //this.$store.state.listCount
           /*  if( this.todoItems.length==localStorage.length) {
                alert('todolist의watch에if 의리스트 개수 값이 수정 되었습니다.')
                    this.$store.commit('listCount')
                    alert("if watch는"+localStorage.length)
            }else{
                    alert('watch else로 들어온다.'+localStorage.length)
                 //    this.$store.state.listCount.commit('disListCount')
            } */
        //add
            if(this.$store.state.todoC){
                alert('watch add 들어왔다.')
                this.$store.commit('listCount')
                alert('watch add commit listCount 값'+ this.$store.state.listCount)
                this.$store.commit('disTodoC')
                alert('watch add commit todoC 값'+ this.$store.state.todoC)
        //update
            }else if(this.$store.state.todoU){
                alert('watch update 들어왔다.')
               // this.$store.commit('listCount')
               // alert('watch update commit listCount 값'+ this.$store.state.listCount)
              //  this.$store.commit('disTodoU')
              
               this.$store.commit('disTodoU');
                 alert('watch update commit todoU 값'+ this.$store.state.todoU)
        //delete
            }else if(this.$store.state.todoD){
                alert('watch delete 들어왔다.')
                
                this.$store.commit('disTodoD')
                this.$store.commit('disListCount')
                alert('watch delete commit listCount 값'+ this.$store.state.listCount)
                alert('watch delete commit todoD 값'+ this.$store.state.todoD)
         //allDelete  
           }else if(this.$store.state.todoAD) {
                alert('watch allDelete 들어왔다.')
               // this.$store.commit('listCount')
                alert('watch allDelete commit listCount 값'+ this.$store.state.listCount)
                this.$store.state.todoAD=false;
                //this.$store.commit('disTodoD')
                alert('watch allDelete commit todoC 값'+ this.$store.state.todoAD)
            }else{
                alert('다시 확인 해주시길 바랍니다.');
            }    
        

        



        }//todoItems
    },
    methods:{
        addTodo(todoItem){//Todo add   
            localStorage.setItem('todoItem',todoItem);
            alert('todolist의 addTodo localStorage.setItem의 localStorage.length'+localStorage.length);
            this.todoItems.push(todoItem);
            console.log(localStorage.length)
            alert('todolist의 addTodo localStorage.length'+localStorage.length);
        },
        clearAll(){//Todo AllRemove
            localStorage.clear();//localStorage에 있는것을 모두 지워라.
            this.todoItems=[];//초기화
            this.$store.commit('allDisTodoItems')
        },
        removeTodo(todoItem,index){//Todo selectItemRemove
            alert('todolist의 removeTodo의 인자값 : '+todoItem+'index는 : ' + index);
            this.todoItems.splice(index,1);
            localStorage.removeItem(index);
            this.$store.commit('todoD');
        },
        updateTodo(todoItem,index){
            //index를 가지고온후에 내용수정? Input으로?
            /* localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);//4를 지우면 4에는 없거나 다른것이 있다.  인덱스 정보를가지고 있기에
            this.todoItems.push(todoItem);
            localStorage.setItem(index,todoItem); */
            //this.$store.commit('todoU');
       //removed = myFish.splice(1, 1, 'trumpet');
            this.todoItems.splice(index,1,todoItem);
            this.$store.commit('todoU');
           // console.log(todoItems);

              // 변경
    /* var arr = ["A","C","D","A","E","F","A"];
    
    arr.splice(arr.indexOf("A"),1,"a"); // "A"를 찾아서 "a"로 변경한다.
    console.log(arr); // ["a", "C", "D", "A", "E", "F", "A"] */



            //this.todoItems.push( this.todoItems[index]=todoItem);
           // this.todoItems.push(localStorage.key(index));
        },
        historyBack(){
            history.back();
        },
        hide(){
            let lists =document.getElementById('list');
            lists.hidden=true;
        },
        homeBack(){

        }
    },
    
}

</script>
<style scoped>

</style>