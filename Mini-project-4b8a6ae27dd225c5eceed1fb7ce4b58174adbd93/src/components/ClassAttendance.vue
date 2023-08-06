<template>
    <div id="container-whole">
    <h1 id="title"></h1>
    <div id="container">
      
    </div>
  </div>
</template>

<script>

export default{
    name:'ClassAttendance',
    components:{

    },
}
</script>

<style scoped>
    #container-whole{
    background-image: linear-gradient(rgba(15,15,5,0.9),rgba(15,15,5,0.9)),url("../images/logo.png");
    background-position:center;
    position: relative;
    background-size: cover;
    margin:0;
}

#title {
  text-align: center;
  color: white;
}

#container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

</style>