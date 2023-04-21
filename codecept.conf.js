/** @type {CodeceptJS.MainConfig} */
const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  plugins: {
    chai: {
      require: "codeceptjs-chai",
    },
  },
  helpers: {
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      browser: "chromium",
    },
  },
  include: {
    I: "./helpers/steps_file.js",
    signInPage: "./pages/signInPage.js",
    passwordRecoveryPage: "./pages/passwordRecoveryPage.js",
    ordersPage: "./pages/ordersPage.js",
    appBarFragment: "./elements/appBar.js",
    menuSidebarFragment: "./elements/menuSidebar.js",
  },
  name: "CRM-E2E",
};
