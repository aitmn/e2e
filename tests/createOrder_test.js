const dotenv = require("dotenv");
dotenv.config();
const { guaranteeTypeSideBar } = require("../elements/guaranteesSideBar");
const { modalWindow } = require("../elements/choseClientModal");
const { elements } = require("../elements/choseClientModal");
Feature("При клике на кнопку сайдбар продуктов открывается");

Before(({ I, signInPage }) => {
  I.amOnPage(process.env.BASE_URL);
  signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
  I.wait(3);
});

Scenario(
  "По клику на кнопку из appBar, открывается сайдбар",
  ({ I, appBarElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.seeElement(guaranteeTypeSideBar);
  }
);

Scenario(
  "По клику на кнопку из menuSideBar, открывается сайдбар",
  ({ I, menuSidebarElement }) => {
    menuSidebarElement.clickOnCreateOrderButton();
    I.seeElement(guaranteeTypeSideBar);
  }
);

Scenario("Выбор продукта", ({ I, appBarElement, GuaranteesSideBarElement }) => {
  appBarElement.clickOnCreateOrderButton();
  I.wait(2);
  GuaranteesSideBarElement.choseGuarantee();
  I.seeElement(modalWindow);
});

Feature("Работа с модальным окном выбора клиента");

Before(({ I, signInPage }) => {
  I.amOnPage(process.env.BASE_URL);
  signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
  I.wait(3);
});
Scenario(
  "При нажатии 'Создать клиента', переход на модальное окно",
  ({ I, appBarElement, GuaranteesSideBarElement, choseClientModalElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    choseClientModalElement.clickCreateClientButton();
  }
);
Scenario(
  "Выбор клиента из списка и создание заявки",
  ({ I, appBarElement, GuaranteesSideBarElement, choseClientModalElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    choseClientModalElement.choseClientFromList();
    I.amOnPage("/create");
  }
);

Scenario.only(
  "Нельзя создать заявку не выбрав клиента",
  ({ I, appBarElement, GuaranteesSideBarElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    I.wait(1)
    I.dontSeeElement(elements.submitButton)
  }
);


