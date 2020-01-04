<template>
    
    <section>  
        <!-- <transition-group name="list" tag="ul"> -->
            <li v-for="(todoItem,index) in propsdata" :key="index" class="shadow" > 
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                    <span class="todoListli">{{index+1}} : {{ todoItem }}</span> <!--리스트 데이터 -->
                <span class="updateBtn" type="button" @click="updateTodo(todoItem, index)">
                     <i class="checkBtn fas fa-wrench" aria-hidden="true"></i>     
                </span>        
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)"><!--@click은 v-bind: 이것과 같은것인데  실무에 가면 v-bind를 써서 가독성과 일관성을 주자. -->
                    <i class="checkBtn fa fa-times" aria-hidden="true"></i>   
                </span>
            </li>
        <!-- </transition-group>     -->
    </section>
   
    
</template>

<script>
export default {
   
    props:['propsdata'],   //Vue컴포넌트에서 v-bind:propsdata="todoItems" 이렇게해서 데이터를 보낸것을 받고 이것을 템플레이트에서 활용하여 List를 출력한다. 
    methods:{
        removeTodo(todoItem,index){
    //        alert('todoList의 removeTodo의 todoItem, index:',index);
            console.log('TodoList의 deleteTodo들어온다.');
            this.$store.commit('todoD');
            console.log('TodoList의 deleteTodo COMMIT');
            this.$emit('removeTodo',todoItem,index);//이벤트명  removeTodo
        },
        updateTodo(todoItem,index){
            console.log('TodoList의 updateTodo들어온다.');
            this.$store.commit('todoU')//true
            let updateItem =prompt('수정 내용을 입력하세요');
                if(updateItem !==null){
                    console.log('TodoList updateTodo에 들어온 값 : '+ updateItem);
                    this.$emit('updateTodo',updateItem,index);//이벤트명  todolist에 이벤트를 발생시켜서 값을 보내라.updateItem
                    console.log('emit후 updateItem : '+updateItem + 'index'+index);  
                }else if(updateItem==null){
                    alert('입력값이 필요합니다.');
                }
            
        }
    }//methods
}


</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
       
        width: 98.5%;
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .todoListli{
       
        width: 90%;
        text-align: left;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .updateBtn{
        margin-right: 10px;
        padding-right:  10px;
        line-height: 45px;
        color: #62acde;
        margin-left:auto;
        
    }
    .removeBtn {
        
        margin-left: auto;
        color: #de4343;
        margin-right: 5px;
    }
    .list-item{
        display: inline-block;
        margin-right: 10px;
    }
    .list-move{
        transition: transform 1s;
    }

    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    }
</style>


