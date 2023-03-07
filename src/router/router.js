import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import NotesPage from "@/pages/NotesPage";
import App from "@/App";



const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/notes',
        component: NotesPage
    }
]

const router = createRouter({
    routes,
    history:  createWebHistory(process.env.BASE_URL)
})

export default router;