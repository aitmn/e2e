const { hooks } = require("../helpers/hooks")

Feature("Регистрация нового пользователя")
Before(hooks.basePage)

Scenario.only("Юридическое лицо, резидент молдовы, агент", ({ I, signInPage, signUpPage}) => {
    signInPage.goToSignUpPage()
    signUpPage.createLegalAgentMoldova()
    I.amOnPage("/home")
})
