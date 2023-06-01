const { hooks } = require("../helpers/hooks");
const { credentials } = require("../pages/signUpPage");
const { elements } = require("../pages/signUpPage");
const dotenv = require("dotenv");
dotenv.config();

Feature("Регистрация нового пользователя");
Before(hooks.basePage);
Before(hooks.signUpPage);

Scenario(
  "Юридическое лицо, резидент Молдовы, агент",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.createLegalAgentMoldova();
    I.seeInCurrentUrl("/home");
  }
);

Scenario(
  "Физическое лицо, резидент РФ, клиент",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    signUpPage.createIndividualClient();
    I.seeInCurrentUrl("/home");
  }
);

Scenario(
  "Ошибка если введенный номер телефона уже используется",
  ({ I, signInPage, signUpPage }) => {
    I.fillField(elements.fields.phone, credentials.RussiaIndividual.phone);
    signUpPage.clickConfirmPhone();
    I.seeElement(elements.errorMessages.phoneError);
    signUpPage.seePhoneError();
    signUpPage.clickSubmitButton();
    I.seeInCurrentUrl("/signup");
  }
);
//После этого сценария необходимо удалить созданного пользователя с phone "9992281488"
Scenario(
  "Ошибка если введенный email уже используется",
  ({ I, signInPage, signUpPage }) => {
    signInPage.goToSignUpPage();
    I.fillField(elements.fields.email, process.env.ADMIN_EMAIL);
    signUpPage.clickSubmitButton();
    I.seeElement(elements.errorMessages.emailError);
    signUpPage.seeEmailError();
    signUpPage.clickSubmitButton();
    I.seeInCurrentUrl("/signup");
  },
  Scenario(
    "Ошибка если введенный ИНН уже используется",
    ({ I, signInPage, signUpPage }) => {
      signInPage.goToSignUpPage();
      signUpPage.choseAgent();
      I.fillField(elements.fields.inn, process.env.AGENT_INN);
      signUpPage.clickSubmitButton();
      signUpPage.seeInnError();
      signUpPage.clickSubmitButton();
      I.seeInCurrentUrl("/signup");
    }
  )
);
