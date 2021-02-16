import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/login";

const routerHistory = createWebHistory();

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});



export default router;