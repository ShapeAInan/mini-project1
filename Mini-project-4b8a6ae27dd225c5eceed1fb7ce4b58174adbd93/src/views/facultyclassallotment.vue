<template>
    <ClassAllotmentPageNav />
    <ClassAllotment/>
</template>

<script>

    import ClassAllotmentPageNav from '../components/ClassAllotmentPageNav.vue';
    import ClassAllotment from "../components/ClassAllotment.vue";
    export default{
        name:'facultyPage',
        components:{
            ClassAllotment,
            ClassAllotmentPageNav
        }
    }
</script>

<style scoped>

</style>