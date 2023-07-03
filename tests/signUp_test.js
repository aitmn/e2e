const { hooks } = require("../helpers/hooks");
const { credentials } = require("../pages/signUpPage");
const { elements } = require("../pages/signUpPage");

Feature("Регистрация нового пользователя");

Before(hooks.basePage);
Scenario(
  "Юридическое лицо, резидент Молдовы, агент",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.createLegalAgentMoldova();
    I.seeInCurrentUrl("/home");
  }
);
//После этого сценария необходимо удалить пользователя с inn "1010600022460"
Scenario(
  "Физическое лицо, резидент РФ, клиент",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.createIndividualClient();
    I.seeInCurrentUrl("/home");
  }
);

Scenario(
  "Ошибка если введенные данные уже используется",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.choseAgent();
    I.fillField(elements.fields.inn, process.env.AGENT_INN); // ввод занятого ИНН
    signUpPage.clickSubmitButton();
    I.wait(1);
    signUpPage.seeInnError();
    I.fillField(elements.fields.phone, credentials.RussiaIndividual.phone); // ввод занятого номера телефона
    signUpPage.clickSubmitButton();
    I.wait(1);
    I.seeElement(elements.errorMessages.phoneError);
    signUpPage.seePhoneError();
    I.fillField(elements.fields.email, process.env.ADMIN_EMAIL); // ввод занятого email
    signUpPage.clickSubmitButton();
    I.wait(1);
    I.seeElement(elements.errorMessages.emailError);
    signUpPage.seeEmailError();
    signUpPage.clickSubmitButton();
    I.seeInCurrentUrl("/signup");
  }
);
//После этого сценария необходимо удалить созданного пользователя с phone "+79992281488"
