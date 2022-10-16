import { defineConfig } from "cypress";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
