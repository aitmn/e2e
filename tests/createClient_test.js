const { radio } = require("../elements/addClientModal");
const assert = require('assert');
Feature("Создание клиента");
Before(
  ({
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
  }
);

Scenario("Нельзя выбрать Физическое лицо", async ({ I }) => {
  let isDisabled = await I.grabAttributeFrom(radio.individual, "aria-disabled");
  assert.equal(isDisabled, 'true', 'Нельзя выбрать физ. лицо')
});
