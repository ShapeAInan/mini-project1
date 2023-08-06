<template>
    <AdminAddFacultyNav/>
    <AdminAddFacultyPage/>
</template>

<script>
    import AdminAddFacultyPage from '../components/AdminAddFacultyPage.vue';
    import AdminAddFacultyNav from '../components/AdminAddFacultyNav.vue';
    export default{
        name:'adminaddfaculty_',
        components:{
            AdminAddFacultyPage,
            AdminAddFacultyNav,
        }
    }
</script>

<style scoped>

</style>
