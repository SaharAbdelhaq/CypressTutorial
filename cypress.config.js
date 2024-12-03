const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
