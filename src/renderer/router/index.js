import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home/main',
            name: 'home-main',
            component: require('@/views/home/main').default
        },
        {
            path: '/',
            name: 'home',
            component: require('@/views/home').default,
            children: [
                {
                    path: '/home/py',
                    name: 'home-py',
                    component: require('@/views/home/py').default
                },
                {
                    path: '/home/star',
                    name: 'home-star',
                    component: require('@/views/home/star').default
                }
            ]
        }
    ]
})
