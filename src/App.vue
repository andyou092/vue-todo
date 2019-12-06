<!-- Component의 template를 뷰에 보이기 위해서  -->
<template>
    <div id="app">
    <TodoHeader router-link to="/vue" ></TodoHeader>|
    
    <router-link to="/user" >유저</router-link> | 
    <router-link to="/devProfile">개발자 프로필</router-link> |
    <router-link to="/info" >서비스 소개</router-link> |
    <router-link to="/guide" @click="hide" >이용 방법</router-link> |
    <router-link to="/todolist">Todolist보기</router-link> |
    <router-link to="/counter">Counter</router-link> |
    <router-link to="/network">Network</router-link> |
    <button class="historyBack" @click="historyBack">돌아가기</button>
    <router-link to="/vue" tag="button" class="homeBtn">홈</router-link>
    <router-view></router-view> 
     
    </div>
</template>
   

<script>
//컴포넌트를 사용하기 위해서 src를 입력를 주어 컴포넌트를 가지고 와라.
import TodoHeader from './components/TodoHeader'


//var TodoFooter={    //ES5버전으로 할때는 이렇게 해야하지만 별루다.  컴포넌트가 많아질 경우 지저분하고, 유지보수에 단점으로 작용할 것 같다.
//    template:'<div>ES5버전이다</div>'
//};


// 컴포넌트를 정의해준다.
export default{
   // name:'left',
    data(){//데이터 배열로 초기화 지정
        return{
            todoItems:[]//데이터 가방
            ,users:[]
        }
    },
    created(){
        for(let i =0; i< localStorage.length;i++){
                this.users.push(localStorage.key(i));
                console.log(this.$store.state.listCount+'입니다.');
        }
    },
    methods:{
       
        historyBack(){
            history.back();
        },
        hide(){
            let lists =document.getElementById('list');
            lists.hidden=true;
        }
    },
    created(){
        if(localStorage.length >0){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
            for(let i =0; i< localStorage.length;i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    components: {//component를 등록해랏!
        'TodoHeader': TodoHeader
  
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

