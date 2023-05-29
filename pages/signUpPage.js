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
      inn: "input[name='inn']",
      nonResidentInn: "input[name='nonResidentInn']",
      nonResidentCompanyName: "input[name='nonResidentName']"
    },
    buttons: {
      back: ".MuiButtonBase-root:nth-child(1)",
      showPassword: ".MuiButtonBase-root:nth-child(4)",
      submit: "#submit-reg-form",
    },
    checkboxes: {
      confirmTerms: "input[name='term']",
    },
    listElements: {
      userClasses: {
        legal: "li[data-value='LEGAL']",
        individual: "li[data-value='INDIVIDUAL']"
      },
      userRoles: {
        agent: ".//li[contains(., 'Агент')]",
        client: ".//li[contains(., 'Клиент')]",
        diler: ".//li[contains(., 'Дилер')]",
        partner: ".//li[contains(., 'Партнер')]"
      },
      countries: {
        Armenia: "li[data-value='AM']",
        Azerbaijan: "li[data-value='Az']",
        Belarus: "li[data-value='BY']",
        Kyrgyzia: "li[data-value='KG']",
        Kazakhstan: "li[data-value='KZ']",
        Moldavia: "li[data-value='MD']",
        Russia: "li[data-value='RU']",
        Tajikistan: "li[data-value='TJ']",
        Uzbekistan: "li[data-value='UZ']"
      }
    },
      lists: "ul.MuiList-root"
  },
  clickSubmitButton(){
    I.click(this.buttons.submit)
  },
  clickConfirmTerms(){
    I.click(this.checkboxes.confirmTerms)
  },
  createLegalAgentMoldova(){
    I.click(this.elements.selects.userClass)
    I.seeElement(this.elements.lists)
    I.wait(1)
    I.click(this.elements.listElements.userClasses.legal)
    I.click(this.elements.selects.userRole)
    I.seeElement(this.elements.lists)
    I.click(this.elements.listElements.userRoles.agent)
    I.click(this.elements.selects.country)
    I.seeElement(this.elements.lists)
    I.click(this.elements.listElements.Moldavia)
    I.dontSeeElement(this.elements.fields.inn)
    I.seeElement(this.elements.fields.nonResidentInn)
    I.seeElement(this.elements.fields.nonResidentCompanyName)
    I.fillFIeld(this.elements.fields.nonResidentInn, "1010600022460")
    I.fillfiled(this.elements.fields.nonResidentCompanyName, "SRL 'MOLDRETAIL GROUP'")
    I.click(this.elements.selects.flag)
    I.wait(1)
    I.click(this.elements.listElements.Moldavia)
    I.fillFIeld(this.elements.fields.phone, "22737794")
    I.fillField(this.elements.fields.email, "http://www.linella.md")
    I.fillFIeld(this.elements.fields.password, "12345")
    I.fillfield(this.elements.fields.passwordConfirm, "12345")
    this.clickConfirmTerms()
    this.clickSubmitButton()
  }
};
