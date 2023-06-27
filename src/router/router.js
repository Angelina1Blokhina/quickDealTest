
import TasksPage from "@/TasksPage"
import MainPage from "@/MainPage"
import {createRouter, createWebHistory} from "vue-router"
const routes =[{
    path:'/',
    component:MainPage
},
{
    path:'/tasks',
    component:TasksPage
}]

const router =createRouter({
    routes,
    history: createWebHistory(process.env.BASE)
})

export default router;