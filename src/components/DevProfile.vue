<template>
    <div>
        
        <!--<img src=""></img>-->
       
        <table class="table table-striped">
            
            <tbody>
            <tr > 
                <th scope="col">이름</th>    
                <td>전하진</td>
            </tr>
            <tr> 
                <th scope="col">나이</th>    
                <td>28살</td>
            </tr>
            <tr scope="row"> 
                <th scope="col">성별</th>    
                <td>남자</td>
            </tr >
            <tr scope="row"> 
                <th scope="col">거주지</th>    
                <td >서울시 관악구 신림동</td>
            </tr>
            </tbody>
        </table>



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
     table{
        margin-top: 5%;
    }
</style>