<template>
  <header>
    <div>
      <i class="fa-solid fa-users"></i>
    </div>
    <div class="logo">
      <h3>AUTOMIZE</h3>
    </div>
    <div class="btn-about">
      <Button id="about" />
      <ButtonHome />
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
import ButtonHome from "./ButtonHome.vue";
export default {
  name: "HeaderFacultyLogin_",
  props: {
    title: {
      type: String,
    },
  },
  components: {
    Button,
    ButtonHome,
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
.btn-about {
  display: flex;
}
#about{
    margin-right: 1em;
}
</style>
