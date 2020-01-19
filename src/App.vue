<!-- Component의 template를 뷰에 보이기 위해서  -->
<template>
    <div id="app">
        <TodoHeader router-link to="/vue" ></TodoHeader>
        <router-link to="/devProfile"   type="button" class="btn btn-default">| 개발자 프로필</router-link> |
        <router-link to="/info"  type="button" class="btn btn-default">서비스 소개</router-link> |
        <router-link to="/guide" type="button" class="btn btn-default" >이용 방법</router-link> |
        <router-link to="/todolist" type="button" class="btn btn-default">Todolist보기</router-link> |
        <router-link to="/counter" type="button" class="btn btn-default">Counter</router-link> |
        <router-link to="/network" type="button" class="btn btn-default">Network</router-link> |
        <router-link to="/eventTest" type="button" class="btn btn-default">EventExample</router-link> |
        <button type="button" class="btn btn-default" @click="historyBack" >돌아가기</button> |
        <router-link to="/"  type="button" class="btn btn-default">홈</router-link> |
        <router-view></router-view> 
        
    </div>
</template>
   

<script>
//컴포넌트를 사용하기 위해서 src를 입력를 주어 컴포넌트를 가지고 와라.
import TodoHeader from './components/TodoHeader'
import firebase from 'firebase'
import { mapState } from 'vuex'
//import Prism from "prismjs";

// languages
//import "prismjs/`components`/prism-bash";
//import "prismjs/components/prism-csharp";
//var TodoFooter={    //ES5버전으로 할때는 이렇게 해야하지만 별루다.  컴포넌트가 많아질 경우 지저분하고, 유지보수에 단점으로 작용할 것 같다.
//    template:'<div>ES5버전이다</div>'
//};

// Your web app's Firebase configuration
 
//로그아웃

// 컴포넌트를 정의해준다.
export default{
    name:'home',
    data(){//데이터 배열로 초기화 지정
        return{
           // todoItems:[]//데이터 가방         
        }
    },
    methods:{
        historyBack(){
            history.back();
        }    
    },
    created(){
   //     if(localStorage.length >0){//localStorage에 데이터가 있다면 data(){todoItems} 에 있는todoItems에 데이터를 넣어두어라.
   //         for(let i =0; i< localStorage.length;i++){
   //             this.todoItems.push(localStorage.key(i));
  //          }
  //      }
    },
    components: {//component를 등록해랏!
        'TodoHeader': TodoHeader
  
  }

}
</script>
<style>
    .homeBtn{
       
        background-color: #2F3B52; /* Green */
        border: none;
        color: white;
        padding: 2px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
  
    }
    .historyBack{
        
        background-color:  #2F3B52; /* Green */
        border: none;
        color: white;
        padding: 2px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;

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
    /*  .router-link-active {
        color: white;
        background-color: red;
    } */
    /*  .router-link-exact-active {
        color: white;
        background-color: #62acde;
    } */
</style>

