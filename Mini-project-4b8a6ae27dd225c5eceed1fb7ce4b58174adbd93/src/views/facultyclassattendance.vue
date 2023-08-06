<template>
    <ClassAttendanceNav />
    <ClassAttendance/>
</template>

<script>
    import ClassAttendanceNav from "../components/ClassAttendenceNav.vue";
    import ClassAttendance from "../components/ClassAttendance.vue";
    export default{
        name:'facultyclassattendance_',
        components:{
            ClassAttendanceNav,
            ClassAttendance,
        }
    }
</script>

<style scoped>

</style>