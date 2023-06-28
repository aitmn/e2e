module.exports = {
  hooks: {
    basePage: ({ I }) => {
      I.amOnPage(process.env.BASE_URL);
    },
    signUpPage: ( { signInPage } ) =>{
      signInPage.goToSignUpPage()
    },
    agentSignIn: ({ I, signInPage }) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
    },
    clientSingIn: ({ I, signInPage }) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.signIn(process.env.CLIENT_EMAIL, process.env.BASE_PASSWORD);
    },
    adminSignIn: ({ I, signInPage}) => {
      I.amOnPage(process.env.BASE_URL);
      signInPage.signIn(process.env.ADMIN_EMAIL, process.env.BASE_PASSWORD); 
    },
    clickOnHomeButton: ({ I, menuSideBarElement }) => {
       I.click(menuSideBarElement.buttons.home);
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
    },
    ClientCreateDraft: ({ I, signInPage, GuaranteesSideBarElement, appBarElement}) =>{
    I.amOnPage(process.env.BASE_URL)
    signInPage.signIn(process.env.CLIENT_EMAIL, process.env.BASE_PASSWORD)
    I.wait(2)
    appBarElement.clickOnCreateOrderButton();
      I.wait(2);
      GuaranteesSideBarElement.choseGuarantee();
      I.wait(5);
    }
  },
};
