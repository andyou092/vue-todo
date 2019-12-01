<template>
    <div >
        
         <p>안녕하세요. 이 어플은 Vue.js를 이용하여 해야할 일을 모아 목록을 만든뒤 관리할 수 있도록 하기 위한 웹 입니다.</p>
            <router-view ></router-view> <!--URL값에 따라서 갱신되는 화면 영역이다. 즉 컴포넌트가 뿌려질 영역-->
     </div>  

    

</template>


 
<script>
 
export default{
    

}


  
</script>

<style scoped>
.infoBtn{
    float: left;
}
</style>