import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      emitWarning: true,
      emitError: true,
      failOnWarning: false, // Do not fail on warnings
      failOnError: false, // Optionally, you can also choose to not fail on errors
    }),
  ],
});
