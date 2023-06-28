const { hooks } = require("../helpers/hooks");
const { slidersElements } = require("../pages/homePage");
const { modalWindow } = require("../elements/addClientModal");
const assert = require("assert");
Feature("Проверка блока 'Работа по заявкам'");

Before(hooks.adminSignIn);
Before(hooks.clickOnHomeButton);
Scenario("Сайдбар с поиском корректно работает", ({ I, homePage }) => {
  I.wait(1);
  homePage.clickFilter();
  I.wait(1);
  homePage.useFilter();
  I.see("client");
  I.click(slidersElements.requets_offers.resetFilter);
  I.dontSeeElement(slidersElements.requets_offers.resetFilter);
}),
  Scenario("Кнопки сортировки работают", async ({ I, homePage }) => {
    I.wait(1);
    homePage.clickOffersButton();
    const offersIsActive = await I.grabAttributeFrom(
      slidersElements.requets_offers.offersButton,
      "aria-pressed"
    );
    assert.equal(offersIsActive, "true");
    homePage.clickOffersButton();
    const offerIsInactive = await I.grabAttributeFrom(
      slidersElements.requets_offers.offersButton,
      "aria-pressed"
    );
    assert.equal(offerIsInactive, "false");
    homePage.clickRequestsButton();
    const requestIsActive = await I.grabAttributeFrom(
      slidersElements.requets_offers.requestsButton,
      "aria-pressed"
    );
    assert.equal(requestIsActive, "true");
    homePage.clickRequestsButton();
    const requestIsInactive = await I.grabAttributeFrom(
      slidersElements.requets_offers.requestsButton,
      "aria-pressed"
    );
    assert.equal(requestIsInactive, "false");
  });
Scenario(
  "Переход в предложение работает",
  ({ I, homePage, offersSideBarElement }) => {
    homePage.goToFirstOffer();
    I.seeElement(offersSideBarElement.offersSideBar);
  }
);
Scenario(
  "Переход в запрос работает",
  ({ I, homePage, requestsSideBarElement }) => {
    homePage.goToFirstRequest();
    I.seeElement(requestsSideBarElement.requestsSideBar);
  }
);
Scenario("Переход в черновики работает", ({ I, homePage }) => {
  I.wait(2);
  homePage.goToDrafts();
  I.seeInCurrentUrl("/orders")
});

Feature("Проверка блока 'События'");

Before(hooks.adminSignIn);
Before(hooks.clickOnHomeButton);
Scenario("При клике переход в заявку работает", ({ I, homePage }) => {
  I.wait(2);
  homePage.goToFirstEvent();
  I.wait(1);
  I.seeInCurrentUrl("/orders");
});

Feature("Проверка блока 'Последние заявки'");
Before(hooks.adminSignIn);
Before(hooks.clickOnHomeButton);
Scenario("При клике на номер заявку, переход в нее", ({ I, homePage }) => {
  I.wait(2);
  homePage.goToLastOrder();
  I.wait(1);
  I.seeInCurrentUrl("/orders");
});
Scenario(
  "По кнопке 'Все заявки' переход на страницу /orders",
  ({ I, homePage }) => {
    I.wait(2);
    homePage.goToAllOrders();
    I.wait(1);
    I.seeInCurrentUrl("/orders");
  }
);

Feature("Проверка блока 'Быстрое создание заявки'");
Before(hooks.adminSignIn);
Scenario("Создание заявки из готового шаблона", ({ I, homePage }) => {
  I.amOnPage(process.env.HOME_PAGE);
  I.wait(2);
  homePage.goToFastOrder();
  I.wait(2);
  I.seeElement(modalWindow);
});

Scenario("Создать новый шаблон", async ({ I, homePage }) => {
  I.amOnPage(process.env.HOME_PAGE);
  I.wait(3);
  homePage.addNewFastOrder();
  I.seeElement(".//span[ancestor::p[contains(., 'БГ на участие')]]");
});
Scenario("Удаление созданного шаблона", async ({ I, homePage }) => {
  I.amOnPage(process.env.HOME_PAGE);
  I.wait(2);
  homePage.deleteFastOrder();
  I.wait(1);
  I.pressKey("Enter");
  I.seeInCurrentUrl("/home");
  I.seeElement(".MuiPaper-rounded:nth-child(2)");
});
