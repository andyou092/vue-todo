<template>
    <div class="inputBox shadow"> 
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal=false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal=false">
                할 일을 입력하세요.
                <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </modal>

    </div>
</template>

<script>

import Modal from './common/Modal.vue'
import { mapState } from 'vuex'
export default {
    data(){
        return {
            newTodoItem:'',
            showModal:false
        }
    },
    methods:{
        addTodo(){//setItem은 로컬 스토리지에 데이터를 추가하는 API이다.
           if(this.newTodoItem !== ""){
    //        alert('TODO Info의 if')
              var value = this.newTodoItem && this.newTodoItem.trim();

                this.$store.commit('todoC')
                this.$emit('addTodo',value);
                this.clearInput();
          }else{
    //          alert('TODO Info의 else')
              this.showModal = !this.showModal;
          } 
        },
        clearInput(){//text란을 초기화 해주기 위해서.
            this.newTodoItem='';
            showModal:false;
        }
    },
    components:{//자연스럽게 CRUD과정이 보이기 위해서 부드럽게~
        Modal:Modal
    }
}
</script>

<style scoped>
        input:focus {
            outline: none;
        }
        .inputBox {
            background: white;
            height: 50px;
            line-height: 50px;
            border-radius: 5px;
        }
        .inputBox input {
            border-style: none;
            font-size: 0.9rem;
        }
        .addContainer {
            float:right;
            background: linear-gradient(to right, #6478FB, #8763FB);
            display: inline-block;
            width: 3rem;
            border-radius: 0 5px 5px 0;
        }
        .addBtn {
            color: white;
            vertical-align: middle;
        }
</style>>

</style>

