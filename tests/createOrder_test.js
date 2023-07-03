const { guaranteeTypeSideBar } = require("../elements/guaranteesSideBar");
const { modalWindow } = require("../elements/choseClientModal");
const { elements } = require("../elements/choseClientModal");
const { hooks } = require("../helpers/hooks");

Feature("Сайдбар выбора продуктов");

Before(hooks.agentSignIn);
Scenario(
  "По клику на кнопку, открывается сайдбар, можно выбрать продукт",
  ({ I, appBarElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.seeElement(guaranteeTypeSideBar);
    I.pressKey("Escape");
    menuSideBarElement.clickOnCreateOrderButton();
    I.seeElement(guaranteeTypeSideBar); 
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    I.seeElement(modalWindow);
  }
);


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
    I.wait(1);
    I.dontSeeElement(elements.submitButton); // нельзя создать заявку не выбрав клиента
    choseClientModalElement.choseClientFromList(); 
    I.wait(2);
    I.seeInCurrentUrl("/create");
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
