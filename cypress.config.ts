import { defineConfig } from "cypress";
import { tasks } from "./cypress/support/tasks";
import process from "process";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234",
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      // 0.05%以上差異が出るようならDocker環境にする
      // 640px * 360px = 230,400px
      // 230,400px * 0.01% =  23.04px
      // 230,400px * 0.05% = 115.20px
      THRESHOLD: process.env.CI ? 0 : 23,
    },
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on("task", tasks);
      return config;
    },
    experimentalRunAllSpecs: true,
  },
});
