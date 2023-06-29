const { faker } = require("@faker-js/faker");
const { hooks } = require("../helpers/hooks");
const passwordRecoveryPage = require("../pages/passwordRecoveryPage");
Feature("Успешная аторизация, с переходом на стратовую страницу");

Before(hooks.basePage);
Scenario("Успешная авторизация клиентом", ({ I, signInPage }) => {
  signInPage.signIn(process.env.CLIENT_EMAIL, process.env.BASE_PASSWORD);
  I.seeInCurrentUrl("/home");
});

Scenario("Успешная авторизация сотрудником", ({ I, signInPage }) => {
  signInPage.signIn(process.env.ADMIN_EMAIL, process.env.BASE_PASSWORD);
  I.seeInCurrentUrl("/orders");
});

Scenario("Успешная авторизация агентом", ({ I, signInPage }) => {
  signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
  I.seeInCurrentUrl("/home");
});

Scenario("Успешная авторизация партнером", ({ I, signInPage }) => {
  signInPage.signIn(process.env.BANK_EMAIL, process.env.BASE_PASSWORD);
  I.seeInCurrentUrl("/orders");
});

Feature("Авторизация с некорректными данными");

Before(hooks.basePage);
Scenario(
  'Попытка авторизации с незаполенными полями',
  ({ I, signInPage }) => {
    signInPage.signIn("", ""); // не заполняем оба поля
    I.seeInCurrentUrl(process.env.BASE_URL);
    signInPage.signIn("", process.env.BASE_PASSWORD); // не заполняем поле логин
    I.seeInCurrentUrl(process.env.BASE_URL);
    signInPage.clearPasswordField()
    signInPage.signIn(process.env.ADMIN_EMAIL, ""); // не заполняем поле пароль
    I.seeInCurrentUrl(process.env.BASE_URL);
    signInPage.clearEmailField()
    signInPage.signIn(faker.internet.email(10), faker.internet.password(5)); // логинимся с несуществующими данными
    I.seeInCurrentUrl(process.env.BASE_URL);
  }
);

Feature("Проверка переходов на другие страницы");

Before(hooks.basePage);
Scenario(
  "Переход на другие формы",
  ({ I, signInPage }) => {
    signInPage.goToPasswordRecoveryPage(); // переход на страницу восстановления пароля
    I.seeInCurrentUrl("/password-recovery");
    passwordRecoveryPage.clickBackButton();
    signInPage.goToSignUpPage(); // переход на страницу регистрации
    I.seeInCurrentUrl("/signup");
    passwordRecoveryPage.clickBackButton();
    signInPage.goToTelegram(); // переход в телеграм канал
    I.switchToNextTab();
    I.seeInCurrentUrl(process.env.TELEGRAM_URL);
    I.closeCurrentTab();
    signInPage.goToDzen(); // переход на страницу в Яндекс.Дзен
    I.switchToNextTab();
    I.seeInCurrentUrl(process.env.DZEN_URL);
  }
);
