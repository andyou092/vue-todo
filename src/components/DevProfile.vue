<template>
    <div>
        
        <!--<img src=""></img>-->
         <ul class="infoList">
            <li>이름</li>
            <li>나이</li>
            <li>성별</li>
            <li>거주지</li>
         </ul>
         <ul class="info">
            <li>전하진</li>
            <li>28살</li>
            <li>남자</li>
            <li>서울시 관악구 신림동</li>
         </ul>
            <router-view ></router-view> <!--URL값에 따라서 갱신되는 화면 영역이다. 즉 컴포넌트가 뿌려질 영역-->
            
            
     </div>  

    

</template>






<script>


export default{
 

}



//var app = new Vue({
//router
//}).$mount('#app');
  
</script>

<style scoped>
    ul{
     background-color: lightblue;
        outline: 10px dotted darkblue;
        background-repeat: no-repeat;
        background-position: right top;  
        height: auto;
    }
    .infoList{
        float: left;
        margin-left: 35%;
        margin-top: 5%;
        width: 100px; 
        list-style-type : none;
        padding-right: 2%;
    }

    .info{
         float: left;
        margin-top: 5%;
        width: 300px;
        margin-left: 7%;
         list-style-type : none;
    }


</style>