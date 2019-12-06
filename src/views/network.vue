<template>
<div>
    <button @click.prevent="getData">axios 호출</button>
    <textarea v-model="res"/>
    <p>{{res}} </p>
</div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    data() {
        return{
            res: ''
        }
    },
    methods: {
        getData() {
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
               // let value= JSON.stringify(res.data.id)+JSON.stringify(res.data.title);
              //  let value1 = res.data.id+res.data.title+res.data.completed
              //  return value1
              alert(JSON.stringify(res.data.title)+JSON.stringify(res.data.id));
                return JSON.stringify(res.data.id)+ JSON.stringify(res.data.title)
            }).then(json => {
                this.res = json
            })
        }
    
    }
}
    
</script>
<style scoped>

</style>