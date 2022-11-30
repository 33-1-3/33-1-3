import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  plugins: [react()],
});
