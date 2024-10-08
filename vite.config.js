import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactSpringCopy/", // Указываем базовый путь
  build: {
    outDir: "dist", // По умолчанию директория сборки
  },
});
