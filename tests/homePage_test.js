const { hooks } = require("../helpers/hooks");
const { slidersElements } = require("../pages/homePage");
const { modalWindow } = require("../elements/addClientModal");
const assert = require("assert");

Feature("Проверка блока 'Работа по заявкам'");

Before(hooks.adminSignIn);
Before(hooks.homePage);
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
  "Переход в предложение/запрос/черновик работает",
  ({ I, homePage, offersSideBarElement }) => {
    homePage.goToFirstOffer(); // Переход в предложение
    I.seeElement(offersSideBarElement.offersSideBar);
    I.pressKey("Escape");
    I.wait(1);
    homePage.goToFirstRequest(); // Переход в запрос
    I.seeElement(requestsSideBarElement.requestsSideBar);
    I.pressKey("Escape");
    I.wait(1);
    homePage.goToDrafts(); // Переход в черновик
    I.seeInCurrentUrl("/orders")
  }
);

Feature("Проверка блока 'События'");

Before(hooks.adminSignIn);
Before(hooks.homePage);
Scenario("При клике переход в заявку работает", ({ I, homePage }) => {
  I.wait(2);
  homePage.goToFirstEvent();
  I.wait(1);
  I.seeInCurrentUrl("/orders");
});

Feature("Проверка блока 'Последние заявки'");
Before(hooks.adminSignIn);
Before(hooks.homePage);
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
Before(hooks.homePage);
Scenario("Работа с шаблонами", ({ I, homePage }) => {
  I.wait(2);
  homePage.goToFastOrder(); // Создание заявки из готового шаблона
  I.wait(2);
  I.seeElement(modalWindow);
  hooks.homePage();
  I.wait(2);
  homePage.addNewFastOrder(); // Создание нового шаблона
  I.seeElement(".//span[ancestor::p[contains(., 'БГ на участие')]]");
  homePage.deleteFastOrder();
  I.wait(1);
  I.pressKey("Enter");
  I.seeInCurrentUrl("/home");
});