import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import NotesPage from "@/pages/NotesPage";
import App from "@/App";



const routes = [
    {
        path: '/notes',
        component: NotesPage
    },
    {
        path: '/notes',
        component: Main
    }
]

const router = createRouter({
    routes,
    history:  createWebHistory(process.env.BASE_URL)
})

export default router;