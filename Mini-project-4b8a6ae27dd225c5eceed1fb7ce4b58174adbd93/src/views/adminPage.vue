<template>
   <AdminHomenav />
   <AdminHome />
</template>

<script>
import AdminHomenav from '../components/AdminHomenav.vue'
import AdminHome from '../components/AdminHome.vue'
export default{
    name:'adminPage',
    components:{
        AdminHomenav,
        AdminHome,
    }
}
</script>

<style scoped>

</style>