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
      desiredCapabilities: {
        chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },
  },
  include: {
    signInPage: "./pages/signInPage.js",
    signUpPage: "./pages/signUpPage.js",
    passwordRecoveryPage: "./pages/passwordRecoveryPage.js",
    homePage: "./pages/homePage.js",
    ordersCreatePage: "./pages/ordersCreatePage.js",
    ordersPartnersPage: "./pages/ordersPartnersPage.js",
    ordersDocumentsPage: "./pages/ordersDocumentsPage.js",
    choseTaxPage: "./pages/choseTaxPage.js",
    appBarElement: "./elements/appBar.js",
    menuSideBarElement: "./elements/menuSideBar.js",
    GuaranteesSideBarElement: "./elements/guaranteesSideBar.js",
    choseClientModalElement: "./elements/choseClientModal.js",
    addClientModalElement: "./elements/addClientModal.js",
    offersSideBarElement: "./elements/OffersSideBar.js",
    requestsSideBarElement: "./elements/requestsSideBar.js",
    lastChatsSideBarElement: "./elements/lastChatsSideBar.js",
  },
  name: "crm-e2e",
};
