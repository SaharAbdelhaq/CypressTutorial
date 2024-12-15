const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    // specPattern: "**/*{.feature,cy.js}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://magento.softwaretestingboard.com",
    video: false,
    trashAssetsBeforeRuns: true,
    videosFolder: "MyVideos",
    videoCompression: 0,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});
