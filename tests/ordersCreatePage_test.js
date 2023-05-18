const dotenv = require("dotenv");
dotenv.config();
const assert = require("assert");
const { hooks } = require('../helpers/hooks');
Feature("Создание заявки");
Before(hooks.ClientCreateDraft)

Scenario.only("Создание заявки на БГ, с заполнением обязательных полей", ({ I, ordersCreatePage }) => {
    ordersCreatePage.clickClosedAuction()
    ordersCreatePage.choseLaw()
    ordersCreatePage.fillNoticeNumber()
    ordersCreatePage.fillCompetitionLink()
    ordersCreatePage.fillNoticeDate()
    ordersCreatePage.fillProtocolDate()
    ordersCreatePage.fillContractObject()
    ordersCreatePage.fillCustomerInn()
    ordersCreatePage.fillStartPrice()
    ordersCreatePage.fillTargetPrice()
    ordersCreatePage.fillGuaranteePrice()
    ordersCreatePage.choseCurrency()
})
