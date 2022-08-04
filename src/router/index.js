import { createWebHashHistory, createRouter } from "vue-router";

// 文档
import docs from '../components/Docs.vue';
import home from '../../docs/Home.vue';

// 示例
import example from '../components/Example.vue';
import button from '../../examples/Button.vue';

const routes = [
    { path: '/', redirect: { name: 'docs' } },
    {
        path: '/docs',
        name: 'docs',
        component: docs,
        redirect: { name: 'home' },
        children: [
            { path: 'home', name: 'home', component: home }
        ]
    },
    {
        path: '/example',
        component: example,
        redirect: { name: 'button' },
        children: [
            { path: 'button', name: 'button', component: button },
        ]
    },
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