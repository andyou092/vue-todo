<template>
    <div>
        <textarea class="response"  v-model="res"/>
        <p>{{res}} </p>
        <button class="axiosBlock" @click.prevent="getData">axios 호출</button>
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
              alert(JSON.stringify(res.data.title));
                return JSON.stringify(res.data.title);
            }).then(json => {
                this.res = json
            })
        }
    
    }
}
    
</script>
<style scoped>
.axiosBlock{
    background-color:rgb(63, 78, 97); /* gray */
    color: white;
    padding: 4px 30px;
    text-decoration: none;  
    font-size: 16px;
  }
  .response{
        margin-top: 2%;

  }
</style>