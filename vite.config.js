import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Cache-Control": "max-age=31536000, immutable",
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    assetsInlineLimit: 4096,
  },
});
