/** @type {CodeceptJS.MainConfig} */
const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  tests: "./tests/*",
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
      windowSize: '1920x1080',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },
  },
  include: {
    signInPage: "./pages/signInPage.js",
    passwordRecoveryPage: "./pages/passwordRecoveryPage.js",
    ordersCreatePage: "./pages/ordersCreatePage.js",
    ordersPartnersPage: "./pages/ordersPartnersPage.js",
    appBarElement: "./elements/appBar.js",
    menuSidebarElement: "./elements/menuSidebar.js",
    GuaranteesSideBarElement: "./elements/guaranteesSideBar.js",
    choseClientModalElement: "./elements/choseClientModal.js",
    addClientModalElement: "./elements/addClientModal.js",
  },
  name: "crm-e2e",
};
