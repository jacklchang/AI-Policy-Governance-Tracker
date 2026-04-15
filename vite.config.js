import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change "/ai-policy-tracker/" to match your GitHub repository name.
// e.g. if your repo is github.com/yourname/my-tracker, use "/my-tracker/"
export default defineConfig({
  plugins: [react()],
  base: "/ai-policy-governance-tracker/",
});
