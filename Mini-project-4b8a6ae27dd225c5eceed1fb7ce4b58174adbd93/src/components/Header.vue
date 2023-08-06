<template>
    <header>
    <div>
        <i class="fa-solid fa-users"></i>
    </div>
    <div class="logo">
        <h3>AUTOMIZE</h3>
    </div>
    <div class="btn-about">
        <Button />
    </div>
    </header>
</template>

<script>
import Button from './Button.vue'
export default{
    
    name:'Header_',
    props:{
        title:{
            type:String,
        }
    },
    components:{
        Button,
    }
}

</script>

<style scoped>

header{
    background-color: #000000;
    display:flex;
    padding:10px;
    margin-bottom: 10px;
    color:#ECECEC;
    justify-content: space-around;
    align-items: baseline;
    margin:0;
}
</style>