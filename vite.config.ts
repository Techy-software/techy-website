import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [react(), svgr()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http:/144.126.200.46",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "/api"),
  //     },
  //   },
  // },
  server: {
    port: 3000,
  },
});
