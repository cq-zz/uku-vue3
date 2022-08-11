import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VuePluginMarkdown from "vite-plugin-md";
import hljs from "highlight.js";
import * as path from "path";

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }
  return "";
}

function markdownCardWrapper(htmlCode) {
  const group = htmlCode.replace(/<h3/g, ":::<h3").replace(/<h2/g, ":::<h2").split(":::");
  const content = group
    .map(fragment => {
      if (fragment.indexOf("</template>") > -1) {
        fragment = fragment.replace("</template>", "");
      }
      if (fragment.indexOf("<h3") !== -1) {
        return `<div class="uku-doc-card">${fragment}</div>`;
      }
      return fragment;
    })
    .join("");
  return `${content}</template>`;
}

// https://vitejs.dev/config/
export default defineConfig({
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
});
