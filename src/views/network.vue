<template>
<div>
    <button @click.prevent="getData">axios 호출</button>
    <textarea v-model="res"/>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            res: ''
        }
    },
    methods: {
        getData() {
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
                return JSON.stringify(res.data.title)
            }).then(json => {
                this.res = json
            })
        }
    }
}
</script>
<style scoped>

</style>