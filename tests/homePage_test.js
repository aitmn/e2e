const { hooks } = require('../helpers/hooks')

Feature("Проверка блока 'Работа с заявками'")

Before(hooks.adminSignIn)
Scenario("Модальное окно с фильтром работает", ( { I, homePage, menuSidebarElement } ) => {
    menuSidebarElement.clickOnHomeButton()
    I.wait(2)
    homePage.clickFilter()
    homePage.useFilter()
    I.wait(1)
})