const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "vu7m84",
  e2e: {
    experimentalPromptCommand : true,
    experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    env: {
      allure: true
    },
  },
});
