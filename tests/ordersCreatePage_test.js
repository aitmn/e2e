const dotenv = require("dotenv");
dotenv.config();
const assert = require("assert");
const { hooks } = require('../helpers/hooks');
const { ordersCreatePage } = require('../pages/ordersCreatePage');
Feature("Создание заявки");
Before(hooks.ClientCreateDraft)

Scenario.only("Создание заявки на БГ, с заполнением обязательных полей", ({ I, ordersCreatePage }) => {
    ordersCreatePage.fillInformationStep()
})
