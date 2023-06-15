const { hooks } = require("../helpers/hooks");
const { slidersElements } = require("../pages/homePage");
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

Feature("Проверка блока 'События'");

Before(hooks.adminSignIn);
Before(hooks.clickOnHomeButton);
Scenario("При клике переход в заявку работает", ({ I, homePage }) => {
  I.waitForElement(slidersElements.events.firstEvent, 5);
  homePage.goToFirstEvent();
  I.wait(1);
  I.seeInCurrentUrl("/orders");
});
