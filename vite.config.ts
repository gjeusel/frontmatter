import path from "path"
import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

export default defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [Vue()],
  optimizeDeps: {
    include: ["vue"],
  },
})
