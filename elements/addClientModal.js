const { I } = inject();
const { faker } = require("@faker-js/faker");

module.exports = {
  modalWindow: ".MuiDialog-paper > div",
  fields: {
    country: "#mui-component-select-country",
    inn: "form input[name='inn']",
    name: "form input[name='name']",
    phone: "form input[name='phone']",
    email: "form input[name='email']",
  },
  buttons: {
    submit: "form button[type=submit]",
    back: "header > div > button > span",
    close: "header > div > svg",
    sendEmail: "input[name='sendEmail']",
  },
  radio: {
    legal: ".MuiFormGroup-row > label:nth-child(1) >.MuiRadio-root",
    individualPerson: ".MuiFormGroup-row > label:nth-child(3) >.MuiRadio-root",
    individual: ".MuiFormGroup-row > label:nth-child(2) >.MuiRadio-root",
  },

  messages: {
    errorMessage: "form > div > div > p",
  },

  createIndividualPerson() {
    I.click(this.radio.individualPerson);
    I.fillField(this.fields.inn, process.env.TEST_INDIVIDUAL_PERSON_INN);
    I.click(this.buttons.submit);
    I.seeInField(this.fields.name, process.env.TEST_INDIVIDUAL_PERSON_NAME);
    I.appendField(this.fields.phone, process.env.TEST_PHONE_NUMBER);
    I.fillField(this.fields.email, faker.internet.email());
    I.click(this.buttons.sendEmail);
    I.click(this.buttons.submit);
  },
  createWrongIndividualPerson() {
    I.click(this.radio.individualPerson);
    I.fillField(this.fields.inn, "1234567890");
    I.click(this.buttons.submit);
  },
  createAssignIndividualPerson() {
    I.click(this.radio.individualPerson);
    I.fillField(this.fields.inn, process.env.TEST_INDIVIDUAL_PERSON_INN);
    I.click(this.buttons.submit);
  },

  createLegal() {
    I.click(this.radio.legal);
    I.fillField(this.fields.inn, process.env.TEST_LEGAL_INN);
    I.click(this.buttons.submit);
    I.seeInField(this.fields.name, process.env.TEST_LEGAL_NAME);
    I.appendField(this.fields.phone, process.env.TEST_PHONE_NUMBER);
    I.fillField(this.fields.email, faker.internet.email());
    I.click(this.buttons.sendEmail);
    I.click(this.buttons.submit);
  },

  createAssignLegal() {
    I.click(this.radio.legal);
    I.fillField(this.fields.inn, process.env.TEST_LEGAL_INN);
    I.click(this.buttons.submit);
    I.wait(1);
  },

  createWrongLegal() {
    I.click(this.radio.legal);
    I.fillField(this.fields.inn, "123456789012");
    I.click(this.buttons.submit);
    I.wait(1);
  },

  backToChoseClient() {
    I.click(this.buttons.back);
  },
  closeAddClient() {
    I.click(this.buttons.close);
  },
  clearInnField(){
    I.doubleClick(this.fields.inn)
    I.pressKey('Backspace')
  },
};
