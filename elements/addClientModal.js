const { I } = inject();
const {faker} = require("@faker-js/faker")
module.exports = {
  modalWindow: ".MuiDialog-paper > div",
  fields: {
    country: "#mui-component-select-country",
    inn: "form input[name='inn']",
    name: "form input[name='name']",
    phone: "form input[name='phone']",
    email: "form input[name='email']"
  },
  buttons: {
    submit: "form button[type=submit]",
    back: "header > div > button > span",
    close: "header > div > svg",
    sendEmail: "input[name='sendEmail']"
  },
  radio: {
    legal: ".MuiFormGroup-row > label:nth-child(1) >.MuiRadio-root",
    individualPerson: ".MuiFormGroup-row > label:nth-child(3) >.MuiRadio-root",
    individual: ".MuiFormGroup-row > label:nth-child(2) >.MuiRadio-root",
  },

  choseIndividualPerson(){
    I.click(this.radio.individualPerson)
    I.fillField(this.fields.inn, process.env.TEST_CLIENT_INN)
    I.click(this.buttons.submit)
    I.seeInField(this.fields.name, process.env.TEST_CLIENT_NAME)
    I.fillField(this.fields.phone, '89999999999') //пока не правильно
    I.fillField(this.fields.email, faker.internet.email())
    I.click(this.buttons.sendEmail)
    I.click(this.buttons.submit)
  }
};
