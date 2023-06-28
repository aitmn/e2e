const assert = require("assert");
const { hooks } = require("../helpers/hooks");
const { messages } = require("../pages/ordersCreatePage");
Feature("Создание заявки");
Before(hooks.ClientCreateDraft);

Scenario(
  "Если не заполнить обязательные поля, заявка не создается, появляется подсказка",
  async ({ I, ordersCreatePage }) => {
    ordersCreatePage.clickSubmit();
    I.wait(2);
    I.seeInCurrentUrl("/orders/create");
    const numOfElements = await I.grabNumberOfVisibleElements(messages.errors);
    assert.equal(numOfElements, 10);
  }
);

Scenario(
  "Создание заявки на БГ", async ({
    I,
    ordersCreatePage,
    ordersPartnersPage,
    ordersDocumentsPage,
    choseTaxPage,
  }) => {
    ordersCreatePage.fillInformationStep();
    I.wait(4);
    I.see("Выберите партнеров");
    ordersPartnersPage.isSubmitDisabled();
    ordersPartnersPage.choseAllRecommendedPartners();
    ordersPartnersPage.clickSubmit();
    I.wait(4);
    I.see("Загрузите документы");
    ordersDocumentsPage.clickChangeTax();
    I.wait(1);
    choseTaxPage.choseOSN();
    I.wait(2);
    I.see("Загрузите документы (ОСН)");
    ordersDocumentsPage.clickSubmit();
    I.wait(4);
    I.seeElement(".MuiAlert-message > p > div > p");
  },
);
  Scenario(
    "Заявка не создастся, если по номеру извещения уже создана заявка",
    async ({ I, ordersCreatePage }) => {
      ordersCreatePage.fillOnlyRequiredFields();
      I.wait(2);
      I.seeInCurrentUrl("/orders/create");
      I.seeElement(messages.noticeNumberError);
      const errorMessage = await I.grabTextFrom(messages.noticeNumberError);
      assert.equal(errorMessage, "По данной закупке уже создана заявка");
    }
);
  //После сценария необходимо удалить созданный order

