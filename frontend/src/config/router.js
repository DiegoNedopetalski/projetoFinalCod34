import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeVue from '@/components/home/HomeVue'
import AdminPages from '@/components/admin/AdminPages'
import ArticleByCategory from '../components/article/ArticleByCategory.vue'
import ArticleById from '../components/article/ArticleById.vue'
import AuthVue from '@/components/auth/AuthVue.vue'

import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: HomeVue
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
}, {
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticleByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}, {
    name: 'auth',
    path: '/auth',
    component: AuthVue
}]

 const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/'})
    } else {
        next()
    }
}) 

export default router
