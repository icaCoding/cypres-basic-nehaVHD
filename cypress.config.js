const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: false,
  watchForFileChanges: true,
  screenshotsFolder: 'cypress/screenshoot',
  videosFolder: 'cypress/videos',
  experimentalStudio: true,
  //config minimal seperti di atas video 14

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
