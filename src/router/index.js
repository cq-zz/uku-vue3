import { createWebHashHistory, createRouter } from "vue-router";

// 文档
import DocsSite from '../components/DocsSite.vue';
import Home from '../../docs/Home.vue';

// 示例
import Button from '../../examples/Button.vue';

const routes = [
    { path: '/', redirect: { name: 'uku' } },
    {
        path: '/uku/docs',
        name: 'uku',
        component: DocsSite,
        redirect: { name: 'home' },
        children: [
            { path: 'home', name: 'home',  component: Home }
        ]
    },
    {
        path: '/uku/example',
        name: 'example',
        redirect: 'button',
        children: [
            { path: 'button', name: 'button', component: Button }
        ]
    }
]

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes
})

router.beforeEach((to, from, next) => {
    window.title = to.name;
    next();
})

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})

export default router;