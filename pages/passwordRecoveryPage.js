const { I } = inject();

module.exports = {
  //элементы страницы
  emailField: "input[name=email]",
  recoveryButton: "#submit-reg-form",

  //описание методов
  recoveryPassword(email) {
    I.fillField(this.emailField, email);
    I.click(this.recoveryButton);
    I.wait(5);
  },

  recoveryButtonDisabled(email) {
    I.fillField(this.emailField, email);
    I.seeElement("#submit-reg-form[disabled]");
  },
};
