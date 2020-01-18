<template>
<div>
    <button @click="hello()">asas</button>
</div>
</template>

<script>



export default {
    methods:{
        hello(){
        let sum = 0;
        for (let i=1; i<5; i++) {
            sum = sum + i;
             console.log(sum + ': sum10'); // 10
        }
                console.log(sum + ': sum'); // 10
        //        console.log(i + ': i'); // Uncaught ReferenceError: i is not defined

        }

    }

    }

</script>