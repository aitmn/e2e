const { radio } = require("../elements/addClientModal");
const assert = require("assert");
const axios = require("");
Feature("Проверка доступности ролей");
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
  const isDisabled = await I.grabAttributeFrom(
    radio.individual,
    "aria-disabled"
  );
  assert.equal(isDisabled, "true", "Нельзя выбрать физ. лицо");
});

Scenario("Можно выбрать ИП и Юр. лицо", async ({ I }) => {
  const isEnabledIndividualPerson = await I.grabAttributeFrom(
    radio.individualPerson,
    "aria-disabled"
  );
  const isEnabledLegal = await I.grabAttributeFrom(
    radio.legal,
    "aria-disabled"
  );
  assert.equal(
    isEnabledIndividualPerson,
    isEnabledLegal,
    "false",
    "Можно выбрать ИП, юр. лицо"
  );
});
