const { radio } = require("../elements/addClientModal");

Feature("Создание клиента")
Before(({ I, signInPage, appBarElement, GuaranteesSideBarElement, choseClientModalElement }) => {
    I.amOnPage(process.env.BASE_URL);
    signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
    I.wait(3);
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    choseClientModalElement.clickCreateClientButton();
  })

