import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/MainPage.vue'),
    }
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;