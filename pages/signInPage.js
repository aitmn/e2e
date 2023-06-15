const { I } = inject();

module.exports = {
  //элементы страницы
  fields: {
    email: "input[name=email]",
    password: "input[name=password]",
  },

  buttons: {
    signInButton: "button[type=submit]",
    signUpButton: ".MuiBox-root [type=button]",
    passwordRecoveryButton: '[href ="/password-recovery"]',
    telegramButton: '[href="https://t.me/finleo"]',
    dzenButton: '[href="https://dzen.ru/finleo"]',
  },

  //описание методов
  signIn(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.signInButton);
    I.wait(3);
  },

  goToSignUpPage() {
    I.click(this.buttons.signUpButton);
    I.wait(2);
  },

  goToPasswordRecoveryPage() {
    I.click(this.buttons.passwordRecoveryButton);
    I.wait(2);
  },

  goToTelegram() {
    I.click(this.buttons.telegramButton);
    I.wait(2);
  },

  goToDzen() {
    I.click(this.buttons.dzenButton);
    I.wait(2);
  },
};
