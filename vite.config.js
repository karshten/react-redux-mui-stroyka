import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "hooks",
        replacement: path.resolve(__dirname, "src/hooks"),
      },
      {
        find: "img",
        replacement: path.resolve(__dirname, "src/assets/img"),
      },
      {
        find: "icons",
        replacement: path.resolve(__dirname, "src/assets/icons"),
      },
      {
        find: "pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "theme",
        replacement: path.resolve(__dirname, "src/theme"),
      },
    ],
  },
  server: {
    port: 3005,
  },
})
