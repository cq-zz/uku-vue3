import { createWebHashHistory, createRouter } from "vue-router";

// 文档
import DocsSite from "../components/DocsSite.vue";
import DocsHome from "../../docs/Home.md";
import QuickStart from "../../docs/QuickStart.md";
import ButtonDocs from "../../docs/Button.md";
import ImageDocs from "../../docs/Image.md";

// 示例
import ExampleHome from "../../examples/Home.vue";
import ExampleMain from "../../examples/Main.vue";
import Button from "../../examples/Button.vue";

const routes = [
  { path: "/", redirect: { name: "uku" } },
  {
    path: "/uku/docs",
    name: "uku",
    component: DocsSite,
    redirect: { name: "home" },
    children: [
      { path: "home", name: "home", component: DocsHome },
      { path: "start", meta: { name: "快速上手" }, component: QuickStart },
      { path: "Button", meta: { name: "Button 按钮" }, component: ButtonDocs },
      { path: "Image", meta: { name: "Image 图片" }, component: ImageDocs },
    ],
  },
  {
    path: "/uku/example",
    name: "example",
    redirect: { name: "dashboard" },
    children: [
      { path: "dashboard", name: "dashboard", component: ExampleHome },
      {
        path: "components",
        name: "components",
        component: ExampleMain,
        redirect: { name: "button" },
        children: [{ path: "button", name: "button", component: Button }],
      },
    ],
  },
];

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = to.meta.name;
  }
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
