const dotenv = require("dotenv");
dotenv.config();
const {guaranteesSideBar} = require ('../elements/menuSidebar')
Feature("Работа с сайдбаром меню");

Before(({ I, signInPage }) => {
    I.amOnPage(process.env.BASE_URL);
    signInPage.signIn(process.env.ADMIN_EMAIL, process.env.BASE_PASSWORD)
    I.wait(2)
  });

Scenario('По клику на кнопку, открывается сайдбар', ({ I, appBarElement }) => {
    appBarElement.clickOnCreateOrderButton()
    I.seeElement(guaranteesSideBar)
})