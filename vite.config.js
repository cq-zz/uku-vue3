import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VuePluginMarkdown from "vite-plugin-md";
import hljs from "highlight.js";
import path, { resolve } from "path";

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }
  return "";
}

function markdownCardWrapper(htmlCode) {
  const group = htmlCode
    .replace(/<h3/g, ":::<h3")
    .replace(/<h2/g, ":::<h2")
    .replace(/<\/template>/g, ":::</template>")
    .split(":::");
  return group
    .map(fragment => {
      if (fragment.indexOf("<h3") !== -1) {
        return `<div class="uku-doc-card">${fragment}</div>`;
      }
      return fragment;
    })
    .join("");
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const CommonConfig = {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      VuePluginMarkdown({
        wrapperClasses: "uku-doc-markdown-body",
        transforms: {
          after: markdownCardWrapper,
        },
        markdownItOptions: {
          typographer: false,
          highlight: markdownHighlight,
        },
      }),
    ],
    alias: {
      "/@/": path.resolve(__dirname, "src"),
    },
    base: "/",
    server: {
      open: true,
      host: "0.0.0.0",
      port: 8080,
    },
  };

  switch (mode) {
    case "lib":
      // 打包组件库
      return {
        build: {
          lib: {
            entry: resolve(__dirname, "packages/index.js"),
            name: "uku-vue3",
            fileName: "uku-vue3",
          },
          rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ["vue"],
            output: {
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: "Vue",
              },
            },
          },
        },
        ...CommonConfig,
      };
    default:
      return {
        ...CommonConfig,
      };
  }
});
