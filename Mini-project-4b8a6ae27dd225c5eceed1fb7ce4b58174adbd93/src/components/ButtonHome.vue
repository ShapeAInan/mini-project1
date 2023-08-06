<template>
    <button @click="Home" class="btn-about">Home</button>
</template>

<script>
export default{
    name:'Button_',
    methods:{
        Home(){
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>
    .btn-about{
        background-color: #FFD966;
        padding:8px 15px 8px 15px;
        color:black;
        border-radius:10%;
        display:flex;
        align-items: center;
        font-family:Arial, Helvetica, sans-serif ;
        transition:0.5s;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .btn-about:hover{
        background-color: #000000;
        transform: translateY(-2px);
        border-color: aqua;
        color:white;
    }
</style>