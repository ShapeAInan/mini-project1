import {createRouter,createWebHistory} from 'vue-router'
import adminPage from '../views/adminPage.vue'
import adminLogin from '../views/adminLogin.vue'
import about from '../views/about.vue'
import facultylogin from '../views/facultylogin.vue'
import adminsetcancel from '../views/adminsetcancel.vue'
import adminaddfaculty from '../views/adminaddfaculty.vue'
import facultyPage from '../views/facultyPage.vue'
import facultyclassallotment from '../views/facultyclassallotment.vue'
import facultyclassattendance from '../views/facultyclassattendance.vue'
const routes = [
    {
        path :'/',
        name:'adminLogin',
        component:adminLogin
    },
    {
        path:'/adminPage',
        name:'adminPage',
        component: adminPage
    },
    {
        path:'/about',
        name:'about',
        component:about
    },
    {
        path:'/facultylogin',
        name:'facultylogin',
        component:facultylogin
    },
    {
        path:'/adminsetcancel',
        name:'adminsetcancel',
        component:adminsetcancel
    },
    {
        path:'/adminaddfaculty',
        name:'adminaddfaculty',
        component:adminaddfaculty
    },
    {
        path:'/facultyPage',
        name:'facultyPage',
        component:facultyPage
    },
    {
        path:'/facultyclassallotment',
        name:'facultyclassallotment',
        component:facultyclassallotment
    },
    {
        path:'/facultyclassattendance',
        name:'facultyclassattendance',
        component:facultyclassattendance
    },
]

const router = createRouter({
        history: createWebHistory(process.env.
            BASE_URL),
            routes,
    })

export default router