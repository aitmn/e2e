const dotenv = require("dotenv");
dotenv.config();
const { guaranteesSideBar } = require("../elements/guaranteesSideBar");
Feature("При клике на кнопку сайдбар продуктов открывается");

Before(({ I, signInPage }) => {
  I.amOnPage(process.env.BASE_URL);
  signInPage.signIn(process.env.ADMIN_EMAIL, process.env.BASE_PASSWORD);
  I.wait(3);
});

Scenario("По клику на кнопку из appBar, открывается сайдбар", ({ I, appBarElement }) => {
  appBarElement.clickOnCreateOrderButton();
  I.seeElement(guaranteesSideBar);
});

Scenario("По клику на кнопку из menuSideBar, открывается сайдбар", ({ I, menuSidebarElement }) => {
  menuSidebarElement.clickOnCreateOrderButton();
  I.seeElement(guaranteeTypeSideBar);
});

Scenario.only("Выбор продукта", ({ I, appBarElement }) => {
  appBarElement.clickOnCreateOrderButton();
  const bg = locate('p')
  .inside(locate('li').inside(locate('ul')).withText('Банковские гарантии'))
  I.wait(2)
  I.moveCursorTo(bg)
  const ispolnenie = locate('p')
  .inside(locate('li').inside(locate('ul')).withText('БГ на исполнение'))
  I.seeElement(ispolnenie)
})