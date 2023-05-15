const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  hooks: {
    basePage: ({ I }) => {
      I.amOnPage(process.env.BASE_URL);
    },
    agentSignIn: ({ I, signInPage }) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
    },
    clientSingIn: ({ I, signInPage }) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.signIn(process.env.CLIENT_EMAIL, process.env.BASE_PASSWORD);
    },
    createClient: ({
      I,
      signInPage,
      appBarElement,
      GuaranteesSideBarElement,
      choseClientModalElement,
    }) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
      I.wait(3);
      appBarElement.clickOnCreateOrderButton();
      I.wait(2);
      GuaranteesSideBarElement.choseGuarantee();
      choseClientModalElement.clickCreateClientButton();
    },
    passwordRecovery: ({ I, signInPage }) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.goToPasswordRecoveryPage();
    },
    createOrder: ({ I, appBarElement, GuaranteesSideBarElement }) => {
      appBarElement.clickOnCreateOrderButton();
      I.wait(2);
      GuaranteesSideBarElement.choseGuarantee();
      I.wait(1);
    }
  },
};
