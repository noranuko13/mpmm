import { defineConfig } from "cypress";
import { tasks } from "./cypress/support/tasks";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on("task", tasks);
      return config;
    },
  },
});
