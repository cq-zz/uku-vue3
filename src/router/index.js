import { createWebHashHistory, createRouter } from "vue-router";

// 文档
import DocsSite from '../components/DocsSite.vue';
import DocsHome from '../../docs/Home.vue';

// 示例
import ExampleHome from '../../examples/Home.vue';
import ExampleMain from '../../examples/Main.vue';
import Button from '../../examples/Button.vue';

const routes = [
    { path: '/', redirect: { name: 'uku' } },
    {
        path: '/uku/docs',
        name: 'uku',
        component: DocsSite,
        redirect: { name: 'home' },
        children: [
            { path: 'home', name: 'home', component: DocsHome }
        ]
    },
    {
        path: '/uku/example',
        name: 'example',
        redirect: { name: 'dashboard' },
        children: [
            { path: 'dashboard', name: 'dashboard', component: ExampleHome },
            {
                path: 'components',
                name: 'components',
                component: ExampleMain,
                redirect: { name: 'button' },
                children: [
                    { path: 'button', name: 'button', component: Button }
                ]
            },
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

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

export default router;