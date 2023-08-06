<template>
  <div class="head">
    <Header />
  </div>
  <div class="form">
    <LoginAdmin />
  </div>
  <Footer />
</template>

<script>

import Header from '../components/Header.vue';
import LoginAdmin from '../components/LoginAdmin.vue'
import Footer from '../components/Footer.vue'
export default{
    name:'adminLogin',
    components:{
      Header,
      LoginAdmin,
      Footer,
    }
  }

</script>

<style scoped>

</style>