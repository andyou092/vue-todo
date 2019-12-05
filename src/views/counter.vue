<template>
    <div>
        <h3>{{$store.state.count}}</h3>
        <button @click="increase1">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
        }
    },
    created() {
        console.log('store에 있는 count', this.$store.state.count)
    },
    methods: {
        increase() {
            this.$store.commit('increase')
        },
        decrease() {
            this.$store.commit('decrease')
        },
        increase1() {//action을 사용할 때는 dispatch를 써야 한다.
           this.$store.dispatch('increase1');
        },
    },
    computed: {
    }
}
</script>
<style scoped>

</style>