import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
