/** @type {CodeceptJS.MainConfig} */
const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  plugins: {},
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      browser: "chromium"
      },
  },
  include: {
    signInPage: "./pages/signInPage.js",
    signUpPage: "./pages/signUpPage.js",
    passwordRecoveryPage: "./pages/passwordRecoveryPage.js",
    homePage: "./pages/homePage.js",
    newsPage: "./pages/newsPage.js",
    ordersCreatePage: "./pages/ordersCreatePage.js",
    ordersPartnersPage: "./pages/ordersPartnersPage.js",
    ordersDocumentsPage: "./pages/ordersDocumentsPage.js",
    choseTaxPage: "./pages/choseTaxPage.js",
    appBarElement: "./elements/appBar.js",
    menuSideBarElement: "./elements/menuSidebar.js",
    GuaranteesSideBarElement: "./elements/guaranteesSideBar.js",
    choseClientModalElement: "./elements/choseClientModal.js",
    addClientModalElement: "./elements/addClientModal.js",
    offersSideBarElement: "./elements/offersSideBar.js",
    requestsSideBarElement: "./elements/requestsSideBar.js",
    lastChatsSideBarElement: "./elements/lastChatsSideBar.js",
  },
  name: "crm-e2e",
};
