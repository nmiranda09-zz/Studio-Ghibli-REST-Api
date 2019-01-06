import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/New'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/new',
            name: 'New',
            component: New
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})