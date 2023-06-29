const assert = require("assert");
const { faker } = require("@faker-js/faker");
const { errorMessage } = require("../pages/passwordRecoveryPage");
const { hooks } = require("../helpers/hooks");
Feature("Тестирование экрана восстановления пароля");

Before(hooks.passwordRecovery);
Scenario(
  "Попытки восстановления пароля",
  async ({ I, passwordRecoveryPage }) => {
    passwordRecoveryPage.recoveryButtonDisabled(""); // Кнопка "Восстановить" задизейблена если не заполнить поле
    I.seeInCurrentUrl("/password-recovery");
    passwordRecoveryPage.recoveryButtonDisabled(faker.name.firstName(6)); // Кнопка "Восстановить" задизейблена если ввести не email
    const notEmail = await I.grabTextFrom(errorMessage);
    I.seeInCurrentUrl("/password-recovery");
    assert.equal(notEmail, "Неверный email");
    passwordRecoveryPage.recoveryPassword(faker.internet.email()); // Попытка восстановления пароля при вводе случайного email
    const notFound = await I.grabTextFrom(errorMessage);
    I.seeInCurrentUrl("/password-recovery");
    assert.equal(notFound, "Пользователь с таким адресом не найден");
    passwordRecoveryPage.clearField();
    passwordRecoveryPage.recoveryPassword(process.env.ADMIN_EMAIL); // Восстановления пароля при вводе зарегистрированного email
    I.wait(1);
    I.see("На Ваш email отправлено письмо со ссылкой для сброса пароля");
  }
);
