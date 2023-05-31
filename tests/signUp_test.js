const { hooks } = require("../helpers/hooks");

Feature("Регистрация нового пользователя");
Before(hooks.basePage);

Scenario(
  "Юридическое лицо, резидент Молдовы, агент",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.createLegalAgentMoldova();
    I.seeInCurrentUrl("/home");
  },

  Scenario(
    "Физическое лицо, резидент РФ, клиент",
    ({ I, signInPage, signUpPage }) => {
      signInPage.goToSignUpPage();
      signUpPage.createIndividualClient();
      I.seeInCurrentUrl("/home");
    }
  )
);
