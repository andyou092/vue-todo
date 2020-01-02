<template>
    
    <section>  
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem,index) in propsdata" :key="todoItem" class="shadow" > 
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                    <span>{{index+1}} : {{ todoItem }}</span> <!--리스트 데이터 -->
                <span class="updateBtn" type="button" @click="updateTodo(todoItem, index)">
                     <i class="checkBtn fas fa-wrench" aria-hidden="true"></i>     
                </span>        
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)"><!--@click은 v-bind: 이것과 같은것인데  실무에 가면 v-bind를 써서 가독성과 일관성을 주자. -->
                    <i class="checkBtn fa fa-times" aria-hidden="true"></i>   
                </span>
            </li>
        </transition-group>    
    </section>
   
    
</template>

<script>
export default {
   
    props:['propsdata'],   //Vue컴포넌트에서 v-bind:propsdata="todoItems" 이렇게해서 데이터를 보낸것을 받고 이것을 템플레이트에서 활용하여 List를 출력한다. 
    methods:{
        removeTodo(todoItem,index){
            alert('todoList의 removeTodo의 todoItem, index:',index);
            this.$emit('removeTodo',todoItem,index);//이벤트명  removeTodo
            
        },
        updateTodo(todoItem,index){
            let updateItem =prompt('수정 내용을 입력하세요');
            this.$emit('updateTodo',updateItem,index);//이벤트명  updateItem
            console.log(updateItem,index);
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
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .updateBtn{
        padding-left: 80%;
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
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


