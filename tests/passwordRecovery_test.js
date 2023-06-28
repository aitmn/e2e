const assert = require("assert");
const { faker } = require("@faker-js/faker");
const { errorMessage } = require("../pages/passwordRecoveryPage");
const { hooks } = require("../helpers/hooks");
Feature("Восстановления пароля");

Before(hooks.passwordRecovery);

Scenario(
  "Восстановления пароля при вводе зарегистрированного email",
  ({ I, passwordRecoveryPage }) => {
    passwordRecoveryPage.recoveryPassword(process.env.ADMIN_EMAIL);
    I.see("На Ваш email отправлено письмо со ссылкой для сброса пароля");
  }
);

Scenario(
  "Попытка восстановления пароля при вводе случайного email",
  async ({ I, passwordRecoveryPage }) => {
    passwordRecoveryPage.recoveryPassword(faker.internet.email());
    const errorMessageText = await I.grabTextFrom(errorMessage);
    assert.equal(errorMessageText, "Пользователь с таким адресом не найден");
  }
);

Scenario(
  'Кнопка "Восстановить" задизейблена если не заполнить поле',
  ({ I, passwordRecoveryPage }) => {
    passwordRecoveryPage.recoveryButtonDisabled("");
    I.seeInCurrentUrl("/password-recovery");
  }
);

Scenario(
  'Кнопка "Восстановить" задизейблена если ввести не email',
  async ({ I, passwordRecoveryPage }) => {
    passwordRecoveryPage.recoveryButtonDisabled(faker.name.firstName(6));
    I.seeInCurrentUrl("/password-recovery");
    const errorMessageText = await I.grabTextFrom(errorMessage);
    assert.equal(errorMessageText, "Неверный email");
  }
);
