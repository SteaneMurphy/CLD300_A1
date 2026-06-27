import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Safely read env variables without crashing if 'process' isn't globally bound
const env = typeof process !== 'undefined' ? process.env : globalThis.process?.env || {};
const isCSB = !!(env.CSB || env.CODESANDBOX_SSE || env.HOSTNAME?.includes('csb'));

export default defineConfig({
  plugins: [react()],
  server: {
    host: isCSB ? "0.0.0.0" : "localhost",
    port: isCSB ? 3000 : 5173,
    // Dynamically allows ALL CodeSandbox domains, but keeps WSL local and secure
    allowedHosts: isCSB ? [".csb.app"] : true,
    hmr: isCSB
      ? {
          clientPort: 443,
        }
      : true,
  },
});