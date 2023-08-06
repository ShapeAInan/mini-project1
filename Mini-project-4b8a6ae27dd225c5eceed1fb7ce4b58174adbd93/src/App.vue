<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

  export default{
    name:'App',
    beforeCreate(){
      this.$store.commit('initializeStore')

      const access = this.$store.state.access

      if (access){
        axios.defaults.headers.common['Authorization'] = "JWT" + access
      } else{
        axios.defaults.headers.common['Authorization'] = ''
      }
    }
  }
</script>
<style scoped>

</style>