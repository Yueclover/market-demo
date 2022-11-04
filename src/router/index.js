import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home.vue'
import Cart from "@/views/Cart"

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        name: 'Home',
        component: Home,
    },
    {
        path: "/list",
        name: 'List',
        component: () => import("@/views/List")
    },
    {
        path: "/my",
        name: 'My',
        component: () => import("@/views/My")
    },
    {
        path: "/cart",
        name: 'Cart',
        component: Cart,
    },
    {
        path: "/search",
        name: 'Search',
        children: [
            {
                path:"searchlist/:name?",
                name:'SearchList',
                component: ()=> import("@/views/Search/SearchList")
            },
        ],
        component: () => import("@/views/Search/Search.vue")
    },
    {
        path: "/detail:id",
        name: 'Detail',
        component: () => import("@/views/Detail")
    },
]

const router = new VueRouter({
    routes,
})

export default router