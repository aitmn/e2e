const { hooks } = require("../helpers/hooks");

Feature("Регистрация нового пользователя");
Before(hooks.basePage);

Scenario.only(
  "Юридическое лицо, резидент Молдовы, агент",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.createLegalAgentMoldova();
    I.seeInCurrentUrl("/home")
  }
);
