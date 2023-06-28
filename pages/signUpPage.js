const { I } = inject();
const assert = require("assert");

module.exports = {
  elements: {
    selects: {
      userClass: "#mui-component-select-userClass",
      userRole: "#mui-component-select-role_id",
      country: "#mui-component-select-country",
      flag: "form > div > div > div > div> div > div > div > div > div > div > div",
    },
    fields: {
      firstName: "input[name='firstName']",
      lastName: "input[name='lastName']",
      phone: "input[name='phone']",
      email: "input[name='email']",
      password: "input[name='password']",
      passwordConfirm: "input[name='passwordConfirm']",
      inn: "input[name='inn']",
      nonResidentInn: "input[name='nonResidentInn']",
      nonResidentCompanyName: "input[name='nonResidentName']",
      confirmCode: "input[name='confirmCode']",
    },
    buttons: {
      back: ".MuiButtonBase-root:nth-child(1)",
      showPassword: ".MuiButtonBase-root:nth-child(4)",
      submit: "#submit-reg-form",
      confirmPhone: "button[name='confirmPhoneBtn']",
      changePhoneNumber: "button[name='changePhoneNumber']",
    },
    checkboxes: {
      confirmTerms: "input[type='checkbox']",
    },
    errorMessages: {
      phoneError: "form > div > .MuiBox-root > div > p",
      emailError: "form > .MuiBox-root:nth-child(4) > div > p",
      innError: "form > .MuiBox-root:nth-child(3) > div > p"
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
    flagList: "#menu- > div > ul",
  },
  credentials: {
    password: "12345",
    confirmCode: "1111",
    MoldaviaLegal: {
      inn: "1010600022460",
      companyName: "SRL 'MOLDRETAIL GROUP'",
      phone: "22737794",
      email: "info@infobiz.md",
    },
    RussiaIndividual: {
      firstName: "Никита",
      lastName: "Джигурда",
      phone: "9992281488",
      email: "test100500@test.ru",
    },
  },
  clickSubmitButton() {
    I.click(this.elements.buttons.submit);
  },
  clickConfirmTerms() {
    I.click(this.elements.checkboxes.confirmTerms);
  },
  choseLegal() {
    I.click(this.elements.selects.userClass);
    I.seeElement(this.elements.lists);
    I.wait(1);
    I.click(this.elements.listElements.userClasses.legal);
  },
  choseIndividual() {
    I.click(this.elements.selects.userClass);
    I.seeElement(this.elements.lists);
    I.wait(1);
    I.click(this.elements.listElements.userClasses.individual);
  },
  choseAgent() {
    I.click(this.elements.selects.userRole);
    I.seeElement(this.elements.lists);
    I.wait(1);
    I.click(this.elements.listElements.userRoles.agent);
  },
  choseClient() {
    I.click(this.elements.selects.userRole);
    I.seeElement(this.elements.lists);
    I.wait(1);
    I.click(this.elements.listElements.userRoles.client);
  },
  clickConfirmPhone(){
    I.click(this.elements.buttons.confirmPhone)
  },
  confirmPhone() {
    I.click(this.elements.buttons.confirmPhone);
    I.wait(1);
    I.seeElement(this.elements.fields.confirmCode);
    I.click(this.elements.fields.confirmCode);
    I.fillField(this.elements.fields.confirmCode, this.credentials.confirmCode);
    I.wait(1);
  },
  async seePhoneError(){
    const message = await I.grabTextFrom(this.elements.errorMessages.phoneError)
    assert.equal(message, 'Пользователь с таким номером телефона уже зарегистрирован')
  },
  async seeEmailError(){
    const message = await I.grabTextFrom(this.elements.errorMessages.emailError)
    assert.equal(message, 'Пользователь с таким email существует')
  },
  async seeInnError(){
    const message = await I.grabTextFrom(this.elements.errorMessages.innError)
    assert.equal(message, 'ИНН занят, обратитесь в поддержку')
  },
  fillPassword() {
    I.fillField(this.elements.fields.password, this.credentials.password);
    I.fillField(
      this.elements.fields.passwordConfirm,
      this.credentials.password
    );
  },
  createLegalAgentMoldova() {
    this.choseLegal();
    this.choseAgent();
    I.click(this.elements.selects.country);
    I.seeElement(this.elements.lists);
    I.click(this.elements.listElements.countries.Moldavia);
    I.dontSeeElement(this.elements.fields.inn);
    I.seeElement(this.elements.fields.nonResidentInn);
    I.seeElement(this.elements.fields.nonResidentCompanyName);
    I.fillField(
      this.elements.fields.nonResidentInn,
      this.credentials.MoldaviaLegal.inn
    );
    I.fillField(
      this.elements.fields.nonResidentCompanyName,
      this.credentials.MoldaviaLegal.companyName
    );
    I.click(this.elements.selects.flag);
    I.seeElement(this.elements.flagList);
    I.click(this.elements.listElements.countries.Moldavia);
    I.fillField(
      this.elements.fields.phone,
      this.credentials.MoldaviaLegal.phone
    );
    I.wait(1);
    I.seeElement(this.elements.buttons.confirmPhone);
    this.confirmPhone();
    I.fillField(
      this.elements.fields.email,
      this.credentials.MoldaviaLegal.email
    );
    this.fillPassword();
    this.clickConfirmTerms();
    this.clickSubmitButton();
  },
  createIndividualClient() {
    this.choseIndividual();
    this.choseClient();
    I.wait(1)
    I.fillField(
      this.elements.fields.lastName,
      this.credentials.RussiaIndividual.lastName
    );
    I.click(this.elements.fields.firstName)
    I.fillField(
      this.elements.fields.firstName,
      this.credentials.RussiaIndividual.firstName
    );
    I.fillField(
      this.elements.fields.phone,
      this.credentials.RussiaIndividual.phone
    );
    this.confirmPhone();
    I.fillField(
      this.elements.fields.email,
      this.credentials.RussiaIndividual.email
    );
    this.fillPassword();
    this.clickConfirmTerms();
    this.clickSubmitButton();
  },
};
