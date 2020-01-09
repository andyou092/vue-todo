<template>
    <div>
        <textarea class="response"  v-model="res"/>
        <!-- <p>{{res}} </p> -->
        <br>
        <button class="axiosBlock" @click.prevent="getData">axios 객체 호출</button>
        <button class="axiosBlock1" @click.prevent="fetchData">axios 객체, 배열 호출</button>
          <div class="tableCss">
            <table class="table">
                <thead class="thead-dark">
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    <th scope="col">address</th>
                    <th scope="col">phone</th>
                    <th scope="col">website</th>
                    <th scope="col">company</th>
                </thead>
                <tbody>
                    <tr v-for="(value, valueIdx ) in response" :key="valueIdx">
                        <td  scope="row">{{value.id}}</td>
                        <td>{{value.name}}</td>
                        <td>{{value.username}}</td>
                        <td>{{value.email}}</td>
                        <td>{{value.address.street}}, {{value.address.suite}}, {{value.address.city}}, {{value.address.zipcode}}, {{value.address.geo.lat}}, {{value.address.geo.lng}}</td>
                        <td>{{value.phone}}</td>
                        <td>{{value.website}}</td>
                        <td>{{value.company.name}}, {{value.company.catchPhrase}}, {{value.company.bs}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    data() {
        return{
            res: '',
            response:[]
        }
    },
    methods: {
        getData:function() {
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
               // let value= JSON.stringify(res.data.id)+JSON.stringify(res.data.title);
              //  let value1 = res.data.id+res.data.title+res.data.completed
              //  return value1
              this.res=JSON.stringify(res.data.title);
               // alert(JSON.stringify(res.data.title));
                return JSON.stringify(res.data.title);
            }).catch(json => {
                this.res = json
            })
        }//getData
    ,
    fetchData: function() {
      axios.get('https://jsonplaceholder.typicode.com/users/').then(response => {
        
         this.response= response.data;
        }).catch(json => {
          console.log(err);
        })
    }//fetchData


    }//method
}
    
</script>
<style scoped>
.axiosBlock{
    background-color:rgb(63, 78, 97); /* gray */
    color: white;
    /* padding: 4px 20px; */
    text-decoration: none;  
    font-size: 14px;
    width: auto;  
  }
  .axiosBlock1{
    background-color:rgb(63, 78, 97); /* gray */
    color: white;
    /* padding: 4px 20px; */
    text-decoration: none;  
    font-size: 14px;
    width: auto;   
  }
  .response{
        margin-top: 2%;
  }
  table{
      margin-top: 3%;
       border:3px solid rgb(63, 78, 97);
       width: 100%;
  }
  
</style>