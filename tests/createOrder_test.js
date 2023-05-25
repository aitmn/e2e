const dotenv = require("dotenv");
dotenv.config();
const { guaranteeTypeSideBar } = require("../elements/guaranteesSideBar");
const { modalWindow } = require("../elements/choseClientModal");
const { elements } = require("../elements/choseClientModal");
const { hooks } = require("../helpers/hooks");
Feature("При клике на кнопку сайдбар продуктов открывается");
Before(hooks.agentSignIn);

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

Feature("Работа с модальным окном выбора клиента от роли агента");
Before(hooks.agentSignIn);

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
    I.wait(2);
    I.seeInCurrentUrl("/create");
  }
);

Scenario(
  "Нельзя создать заявку не выбрав клиента",
  ({ I, appBarElement, GuaranteesSideBarElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    I.wait(1);
    I.dontSeeElement(elements.submitButton);
  }
);

Feature("Создание заявки от роли клиента");
Before(hooks.clientSingIn);

Scenario(
  "При выборе продукта клиентом, переход к черновику заявки",
  ({ I, appBarElement, GuaranteesSideBarElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    I.wait(1);
    I.seeInCurrentUrl("/create");
  }
);
