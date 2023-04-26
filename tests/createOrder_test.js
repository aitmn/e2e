const dotenv = require("dotenv");
dotenv.config();
const {guaranteeTypeSideBar} = require("../elements/guaranteesSideBar");
const { modalWindow } = require("../elements/choseClientModal");
Feature("При клике на кнопку сайдбар продуктов открывается");

Before(({ I, signInPage }) => {
  I.amOnPage(process.env.BASE_URL);
  signInPage.signIn(process.env.ADMIN_EMAIL, process.env.BASE_PASSWORD);
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

Scenario(
  "Выбор продукта",
  ({ I, appBarElement, GuaranteesSideBarElement }) => {
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    I.seeElement(modalWindow)
  }
);
