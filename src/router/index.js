import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/login";
import Register from "../components/register"
import Courses from "../components/Courses"

const routerHistory = createWebHistory();

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/courses",
        name: "courses",
        component: Courses
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});



export default router;