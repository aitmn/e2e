const { I } = inject();

module.exports = {
  modalWindow: ".MuiDialog-paper > div",
  fields: {
    country: "#mui-component-select-country",
    inn: "form input[name='inn']",
    name: "form input[name='name']",
  },
  buttons: {
    submit: ".MuiButtonBase-root[type=submit] > span",
    back: "header > div > button > span",
    close: "header > div > svg",
  },
  radio: {
    legal: ".MuiFormGroup-row > label:nth-child(1) >.MuiRadio-root",
    individualPerson: ".MuiFormGroup-row > label:nth-child(3) >.MuiRadio-root",
    individual: ".MuiFormGroup-row > label:nth-child(2) >.MuiRadio-root",
  },

  
};
