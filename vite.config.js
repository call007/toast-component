import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/toast-component/",
  publicDir: true,
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
});
