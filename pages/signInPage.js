const { I } = inject();

module.exports = {

  fields: {
    email: "input[name=email]",
    password: "input[name=password]",
  },

  buttons: {
    signInButton: "button[type=submit]",
    signUpButton: ".//button[contains(., 'Регистрация')]",
    passwordRecoveryButton: '[href ="/password-recovery"]',
    telegramButton: '[href="https://t.me/finleo"]',
    dzenButton: '[href="https://dzen.ru/finleo"]',
  },

  signIn(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.signInButton);
    I.wait(3);
  },
  clearEmailField(){
    I.doubleClick(this.fields.email)
    I.pressKey('Backspace')
  },
  clearPasswordField(){
    I.doubleClick(this.fields.password)
    I.pressKey('Backspace') 
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
