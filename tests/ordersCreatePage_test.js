const assert = require("assert");
const { hooks } = require("../helpers/hooks");
const { messages } = require("../pages/ordersCreatePage");
Feature("Создание заявки");
Before(hooks.ClientCreateDraft);

Scenario(
  "Создание заявки на БГ",
  async ({ I, ordersCreatePage, ordersPartnersPage,
    ordersDocumentsPage,
    choseTaxPage, }) => {
    ordersCreatePage.clickSubmit(); // Попытка создать заявку не заполняя обязательные поля
    I.seeInCurrentUrl("/orders/create");
    ordersCreatePage.clickClosedAuction(); // Успешное создание заявки
    ordersCreatePage.choseLaw();
    ordersCreatePage.fillNoticeNumber();
    ordersCreatePage.fillCompetitionLink();
    ordersCreatePage.fillNoticeDate();
    ordersCreatePage.fillProtocolDate();
    ordersCreatePage.fillContractObject();
    ordersCreatePage.fillCustomerInn();
    ordersCreatePage.fillStartPrice();
    ordersCreatePage.fillTargetPrice();
    ordersCreatePage.fillGuaranteePrice();
    ordersCreatePage.choseCurrency();
    ordersCreatePage.clickAntiDumpingActive();
    ordersCreatePage.fillGuaranteeFrom();
    ordersCreatePage.fillGuaranteeTo();
    ordersCreatePage.clickAdvance();
    ordersCreatePage.fillAdvanceRub();
    ordersCreatePage.fillComment();
    ordersCreatePage.clickSubmit()
    I.wait(4);
    I.see("Выберите партнеров");
    ordersPartnersPage.isSubmitDisabled();
    ordersPartnersPage.choseAllRecommendedPartners();
    ordersPartnersPage.clickSubmit();
    I.wait(4);
    I.see("Загрузите документы");
    ordersDocumentsPage.clickSubmit();
    I.wait(4);
    I.seeElement(".MuiAlert-message > p > div > p");
  }
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

