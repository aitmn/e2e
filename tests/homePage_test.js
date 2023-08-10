const assert = require("assert");
const { hooks } = require("../helpers/hooks");
const { slidersElements } = require("../pages/homePage");
const { modalWindow } = require("../elements/addClientModal");
const { fields } = require("../pages/newsPage");
const { HOME_PAGE_URL } = require("../constants/urls");

Feature("Проверка блока 'Работа по заявкам'");

Before(hooks.agentSignIn);
Scenario("Сайдбар с поиском корректно работает", ({ I, homePage }) => {
	I.wait(3);
	homePage.clickFilter();
	I.wait(1);
	homePage.useFilter();
	I.click(slidersElements.requets_offers.resetFilter);
	I.dontSeeElement(slidersElements.requets_offers.resetFilter);
}),
	Scenario("Кнопки сортировки работают", async ({ I, homePage }) => {
		I.wait(3);
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
	({ I, homePage, offersSideBarElement, requestsSideBarElement }) => {
		homePage.goToFirstOffer(); // Переход в предложение
		I.seeElement(offersSideBarElement.offersSideBar);
		I.pressKey("Enter");
		I.wait(1);
		homePage.clickOffersButton();
		homePage.goToFirstRequest(); // Переход в запрос
		I.seeElement(requestsSideBarElement.requestsSideBar);
		I.pressKey("Escape");
		I.wait(1);
		homePage.goToDrafts(); // Переход в черновик
		I.seeInCurrentUrl("/orders");
	}
);

Feature("Проверка блока 'События'");

Before(hooks.agentSignIn);
Scenario("При клике переход в заявку работает", ({ I, homePage }) => {
	I.wait(3);
	homePage.goToFirstEvent();
	I.wait(1);
	I.seeInCurrentUrl("/orders");
});

Feature("Проверка блока 'Последние заявки'");

Before(hooks.agentSignIn);
Scenario("При клике на номер заявки, переход в нее", ({ I, homePage }) => {
	I.wait(3);
	homePage.goToLastOrder(); // Переход по конкретной заявке
	I.wait(1);
	I.seeInCurrentUrl("/orders");
	I.amOnPage(HOME_PAGE_URL);
	I.wait(3);
	homePage.goToAllOrders(); // Переход во все заявки
	I.wait(1);
	I.seeInCurrentUrl("/orders");
});

Feature("Проверка блока 'Быстрое создание заявки'");

Before(hooks.agentSignIn);
Scenario("Работа с шаблонами", ({ I, homePage }) => {
	I.wait(3);
	homePage.goToFastOrder(); // Создание заявки из готового шаблона
	I.wait(2);
	I.seeElement(modalWindow);
	I.amOnPage(HOME_PAGE_URL);
	I.wait(2);
	homePage.addNewFastOrder(); // Создание нового шаблона
	I.seeElement(".//span[ancestor::p[contains(., 'БГ на участие')]]");
	homePage.deleteFastOrder(); // Удаление шаблона
	I.wait(1);
	I.dontSeeElement(".//span[ancestor::p[contains(., 'БГ на участие')]]");
});

Feature("Проверка блока Баннеры");

Before(hooks.agentSignIn);
Scenario(
	"При клике на баннер ссылка открывается в новом окне",
	({ I, homePage }) => {
		homePage.clickOnBanner();
		I.switchToPreviousTab(0);
		I.seeInCurrentUrl("/home");
	}
);

Feature("Проверка блока новости");

Before(hooks.agentSignIn);
Scenario("Работает переход в новость", ({ I, homePage, newsPage }) => {
	homePage.goToNews();
	I.switchToNextTab(1);
	newsPage.clickBackButton();
	I.wait(2);
	I.seeElement(fields.search);
	I.seeInCurrentUrl("/news");
});
