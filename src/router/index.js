import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/login";
import Register from "../components/register"
import Courses from "../components/Courses"
import Trainer from "../components/Trainers"
import CourseView from "../components/CourseView"

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
    },
    {
        path: "/trainer",
        name: "trainer",
        component: Trainer
    },
    {
        path: "/course-view/:id",
        name: "course-view",
        component: CourseView
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});



export default router;