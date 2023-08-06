<template>
  <header>
    <div>
      <router-link to="/">
       <i class="fa-solid fa-users"></i>
       </router-link>
    </div>
    <div class="logo">
      <h3>AUTOMIZE</h3>
    </div>
    <div>
        <h3>ABOUT</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header_",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
header {
  background-color: #000000;
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  color: #ececec;
  justify-content: space-around;
  align-items: baseline;
  margin: 0;
}

.btn-about{
        background-color: #FFD966;
        padding:8px 15px 8px 15px;
        color:black;
        border-radius:10%;
        display:flex;
        align-items: center;
        justify-content: space-around;
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
