
<template>
    <section>
            <li v-for="(user,index) in userpropsdata" :key="user" > 
                    <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                    <span>{{index}} : {{ user }}</span> <!--리스트 데이터 -->
            </li>
            <router-view></router-view>
    </section>
</template>

<script>
export default {
    data(){
        users:[]
    },
    props:['userpropsdata']
}
</script>

<style scoped>

</style>