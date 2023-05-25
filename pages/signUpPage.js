const { I } = inject();

module.exports = {
  elements: {
    selects: {
      userClass: "#mui-component-select-userClass",
      userRole: "#mui-component-select-role_id",
      country: "#mui-component-select-country",
      flag: "div:nth-child(1) >div > div> div > input[value = 'RU']",
    },
    fields: {
      phone: "input[name='phone']",
      email: "input[name='Email']",
      password: "input[name='password']",
      passwordConfirm: "input[name='passwordConfirm']",
    },
    buttons: {
      back: ".MuiButtonBase-root:nth-child(1)",
      showPassword: ".MuiButtonBase-root:nth-child(4)",
      submit: "#submit-reg-form",
    },
    checkboxes: {
      confirmTerms: "input[name='term']",
    },
    
  },
  clickSubmitButton(){
    I.click(this.buttons.submit)
  },
  clickConfirmTerms(){
    I.click(this.checkboxes.confirmTerms)
  },
  
};
