import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define the duration value
export const duration = 60000; // Duration in milliseconds (e.g., 1 minute)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
