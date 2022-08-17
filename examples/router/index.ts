import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/button',
        name: 'Button',
        component: () => import('../pages/Button/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
