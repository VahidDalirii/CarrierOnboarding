/* eslint-disable */
const { chromium } = require('playwright');

module.exports = {
  browserType: chromium,
  launchConfig: {
    headless: false,
    slowMo: 10,
  },
};
