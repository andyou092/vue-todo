<template>
    <div >
        
        <p>안녕하세요.</p> 
        <p>Vue.js를 이용하여 해야할 일을 모아 목록을 만든뒤 관리 기능.</p>
        <p>로그인 및 이벤트 테스트를 하기 위한 애플리케이션 입니다.</p>
          <!-- router-view ></router-view> -->

       


       
     </div>  

    

</template>



<script>
//var Info={templte:'<div><p>메롱</p></div>'};
//var Guide={templte:'<div><p>메롱1</p></div>'};

export default{
  data(){
     // return{
      //  count: 3,
      //  watchedCount: 9}    
  },
  /* computed:{
    // 계산된 getter
    calculated: function () {
        
    	if(this.count === 2) {
      	alert('값이 2가 되었습니다.')
      }
      return this.count;
    }
  }, */
/*   watch:{
     count: function (newVal) {
    	if(newVal == 0) {
      	alert('값이 0이 되었습니다.')
        this.count = 3
      }
    }
  } */

}//default



//var app = new Vue({
//router
//}).$mount('#app');
  
</script>

<style scoped>
    .info{
        margin-top: 5%;
        margin-left: auto;
        /* width: 30%; */
        width: auto;
        border:3px solid rgb(63, 78, 97);
    }


</style>