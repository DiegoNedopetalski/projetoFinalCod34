import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeVue from '@/components/home/HomeVue'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: HomeVue
}, {
    name: 'admin',
    path: '/admin',
    component: AdminPages
}]

export default new VueRouter({
    mode: 'history',
    routes
})
