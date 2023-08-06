<template>
     <div class="head">
    <HeaderFacultyLogin />
  </div>
  <div class="form">
    <LoginFaculty />
  </div>
</template>

<script>
    import HeaderFacultyLogin from '../components/HeaderFacultyLogin.vue'
    import LoginFaculty from '../components/LoginFaculty.vue'
    export default{
        name:'facultylogin_',
        components:{
            LoginFaculty,
            HeaderFacultyLogin,
        }
    }
</script>

<style scoped>

</style>