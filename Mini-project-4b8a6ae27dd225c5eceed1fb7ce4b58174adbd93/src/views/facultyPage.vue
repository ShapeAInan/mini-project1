<template>
    <FacultyHomeNav />
    <FacultyHome />
</template>

<script>

    import FacultyHomeNav from "../components/FacultyHomeNav.vue";
    import FacultyHome from "../components/FacultyHome.vue";
    export default{
        name:'facultyPage',
        components:{
            FacultyHomeNav,
            FacultyHome
        }
    }
</script>

<style scoped>

</style>