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
    legal: ".MuiFormGroup-root input[value='2']",
    individualPerson: ".MuiFormGroup-root input[value='1']",
    individual: ".MuiFormGroup-root input[value='3']",
  },

  
};
