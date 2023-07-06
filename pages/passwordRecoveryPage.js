const { I } = inject();

module.exports = {

  emailField: "input[name=email]",
  recoveryButton: "#submit-reg-form",
  errorMessage:
    ".ScrollbarsCustom > div > div > div > div > div > div > div > form > div.MuiBox-root > div:nth-child(2) > p",
  backButton: " header > button",

  clickBackButton() {
    I.click(this.backButton);
    I.wait(1);
  },
  recoveryPassword(email) {
    I.fillField(this.emailField, email);
    I.click(this.recoveryButton);
    I.wait(5);
  },

  recoveryButtonDisabled(email) {
    I.fillField(this.emailField, email);
    I.seeElement("#submit-reg-form[disabled]");
  },
  clearField(){
    I.doubleClick(this.emailField)
    I.pressKey('Backspace')
  }
};
