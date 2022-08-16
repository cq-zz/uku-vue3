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
import Image from "../../examples/Image.vue";

const routes = [
  { path: "/", redirect: { name: "docs" } },
  {
    path: "/docs",
    name: "docs",
    component: DocsSite,
    redirect: { name: "home" },
    children: [
      { path: "home", name: "home", component: DocsHome },
      { path: "start", meta: { name: "快速上手" }, component: QuickStart },
      { path: "components/Button", meta: { name: "Button 按钮" }, component: ButtonDocs },
      { path: "components/Image", meta: { name: "Image 图片" }, component: ImageDocs },
    ],
  },
  {
    path: "/example",
    name: "example",
    redirect: { name: "dashboard" },
    children: [
      { path: "dashboard", name: "dashboard", component: ExampleHome },
      {
        path: "components",
        name: "components",
        component: ExampleMain,
        redirect: { name: "button" },
        children: [
          { path: "Button", name: "button", component: Button },
          { path: "Image", name: "image", component: Image },
        ],
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
  } else {
    document.title = "uku-vue3移动端组件库";
  }
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
