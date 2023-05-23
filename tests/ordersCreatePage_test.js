const dotenv = require("dotenv");
dotenv.config();
const assert = require("assert");
const { hooks } = require("../helpers/hooks");

Feature("Создание заявки");
Before(hooks.ClientCreateDraft);

Scenario.only(
  "Создание заявки на БГ",
  async ({
    I,
    ordersCreatePage,
    ordersPartnersPage,
    ordersDocumentsPage,
    choseTaxPage,
  }) => {
    ordersCreatePage.fillInformationStep();
    I.wait(4);
    I.see("Выберите партнеров");
    ordersPartnersPage.choseAllRecommendedPartners();
    ordersPartnersPage.clickSubmit();
    I.wait(4);
    I.see("Загрузите документы");
    ordersDocumentsPage.clickChangeTax();
    I.wait(1);
    choseTaxPage.choseOSN();
    I.wait(2);
    I.see("Загрузите документы (ОСН)");
  }
  //После сценария необходимо удалить созданный order
);
