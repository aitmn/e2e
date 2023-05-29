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
      nonResidentCompanyName: "input[name='nonResidentName']",
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
        individual: "li[data-value='INDIVIDUAL']",
      },
      userRoles: {
        agent: ".//li[contains(., 'Агент')]",
        client: ".//li[contains(., 'Клиент')]",
        diler: ".//li[contains(., 'Дилер')]",
        partner: ".//li[contains(., 'Партнер')]",
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
        Uzbekistan: "li[data-value='UZ']",
      },
    },
    lists: "ul.MuiList-root",
  },
  credentials: {
    password: "12345",
    Moldavia: {
      inn: "1010600022460",
      companyName: "SRL 'MOLDRETAIL GROUP'",
      phone: "22737794",
      email: "info@infobiz.md",
    },
  },
  clickSubmitButton() {
    I.click(this.buttons.submit);
  },
  clickConfirmTerms() {
    I.click(this.checkboxes.confirmTerms);
  },
  choseLegal() {
    I.click(this.elements.selects.userClass);
    I.seeElement(this.elements.lists);
    I.wait(1);
    I.click(this.elements.listElements.userClasses.legal);
  },
  choseAgent() {
    I.click(this.elements.selects.userRole);
    I.seeElement(this.elements.lists);
    I.wait(1);
    I.click(this.elements.listElements.userRoles.agent);
  },
  choseMoldavia() {
    I.click(this.elements.selects.country);
    I.seeElement(this.elements.lists);
    I.click(this.elements.listElements.Moldavia);
  },
  choseMoldaviaCode() {
    I.click(this.elements.selects.flag);
    I.wait(1);
    I.click(this.elements.listElements.Moldavia);
  },
  createLegalAgentMoldova() {
    this.choseLegal();
    this.choseAgent();
    this.choseMoldavia();
    I.dontSeeElement(this.elements.fields.inn);
    I.seeElement(this.elements.fields.nonResidentInn);
    I.seeElement(this.elements.fields.nonResidentCompanyName);
    I.fillFIeld(
      this.elements.fields.nonResidentInn,
      this.credentials.Moldavia.inn
    );
    I.fillfiled(
      this.elements.fields.nonResidentCompanyName,
      this.credentials.Moldavia.companyName
    );
    this.choseMoldaviaCode();
    I.fillFIeld(this.elements.fields.phone, this.credentials.Moldavia.phone);
    I.fillField(this.elements.fields.email, this.credentials.Moldavia.email);
    I.fillFIeld(this.elements.fields.password, this.credentials.password);
    I.fillfield(
      this.elements.fields.passwordConfirm,
      this.credentials.password
    );
    this.clickConfirmTerms();
    this.clickSubmitButton();
  },
};
