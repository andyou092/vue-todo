<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods:{
        clearTodo(){//이것도 하위에서 상위로 이벤트를 발생시키는  event방식으로 
           this.$emit('removeAll');
        }//clearTodo()
    }
}//default





</script>

<style scoped>

    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn {
        color: #e20303;
        display: block;
     }



</style>

