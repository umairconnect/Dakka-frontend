import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/login";
import Register from "../components/register"

const routerHistory = createWebHistory();

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});



export default router;