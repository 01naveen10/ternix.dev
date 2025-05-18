import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname, "client"), // Where your Vite app lives
  plugins: [react()],
  base: "./", // ✅ Use relative base for production build
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // Your client src folder
      "@shared": path.resolve(__dirname, "shared"), // Shared code
      "@assets": path.resolve(__dirname, "attached_assets"), // External assets
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Output goes here for Vercel
    emptyOutDir: true,
  },
});
