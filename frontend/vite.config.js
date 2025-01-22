import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",       // Main entry point
        client: "./client.html",   // Client interface
        lawstudent: "./lawstudent.html", // Law student interface
        lawyer: "./lawyer.html",   // Lawyer interface
      },
    },
  },
});
