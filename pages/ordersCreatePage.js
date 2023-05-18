const dotenv = require("dotenv");
dotenv.config();
const { I } = inject()
const assert = require("assert");
module.exports = {
  headers: {
    guaranteeType: " .MuiBox-root:nth-child(3) > h3",
    guarantee: " .MuiBox-root:nth-child(3) > p",
    client: "div:last-child > h3",
    orderNumber: ".MuiBox-root:first-child > h3",
    orderStatus: ".MuiBox-root:first-child > p",
  },
  tabs: {
    information: ".carousel > div > div:first-child ",
    partners: ".carousel > div > div:nth-child(3)",
    documents: ".carousel > div > div:last-child",
  },
  buttons: {
    deleteDraft: ".MuiBox-root> div > button",
    submit: "button[type=submit]",
    changeClient: "div:nth-child(5) > p"
  },
  checkboxes: {
    closedAuction: "input[name=closed_auction]",
    foreignCustomer: "input[name=isForeignCustomer]",
    antiDumpingActive: "input[name=anti_dumping_active]",
    advance: "input[name=advance]",
    undisputedOff: "input[name=undisputed_off]",
    formPresents: "input[name=form_presents]",
  },
  fields: {
    noticeNumber: "input[name=notice_number]",
    competitionLink: "input[name=competition_link]",
    noticeDate: "input[name=notice_date]",
    protocolDate: "input[name=protocol_date]",
    lotNumber: "input[name=lot_number]",
    contractObject: "input[name=contract_object]",
    customerInn: "input[name=customer_inn]",
    customerName: "input[name=customer_name]",
    contractStartPrice: "input[name=contract_start_price]",
    contractTargetPrice: "input[name=contract_target_price]",
    guaranteePrice: "input[name=guarantee_price]",
    advancePercent: "input[name=advance_percent]",
    advanceRub: "input[name=advance_rub]",
    guaranteeFrom: "input[name=guarantee_from]",
    guaranteeTo: "input[name=guarantee_to]",
    comment: "input[name=comment]",
  },
  selects: {
    law: ".MuiInputBase-input.MuiInput-input.MuiAutocomplete-input",
    currency: "#mui-component-select-currency",
    provision: "#mui-component-select-provision",
    raitingRA: "#mui-component-select-ratingRA",
    raitingAKRA: "#mui-component-select-ratingAKRA",
  },
  lists: {
    law: "body > div.MuiAutocomplete-popper",
    currency: "#menu-currency .MuiPaper-root",
    provision: "#menu-provision .MuiPaper-root",
    raitingRA: "#menu-ratingRA .MuiPaper-root",
    raitingAKRA: "#menu-ratingAKRA .MuiPaper-root",
  },
  listElements:{
    lawFz44: ".MuiAutocomplete-popper li:first-child > div",
    currencyRouble: ".MuiList-root > li:first-child",
    noProvision: ".MuiPaper-root > ul > li:first-child",
    raAAA: ".MuiPaper-root > ul > li:first-child",
    akraAAA: ".MuiPaper-root > ul > li:first-child",
  },
    clickClosedAuction() {
    I.click(this.checkboxes.closedAuction)
  },
  choseLaw(){
    I.click(this.selects.law)
    I.seeElement(this.lists.law)
    I.click(this.listElements.lawFz44)
    },
    fillNoticeNumber(){
    I.fillField(this.fields.noticeNumber, process.env.BG_NOTICE_NUMBER)
    },
    fillCompetitionLink(){
    I.fillField(this.fields.competitionLink, process.env.BG_COMPETITION_LINK)
    },
    fillNoticeDate(){
    I.fillField(this.fields.noticeDate, process.env.BG_NOTICE_DATE)
   },
   fillProtocolDate(){
    I.fillField(this.fields.protocolDate, process.env.BG_PROTOCOL_DATE)
   },
   fillContractObject(){
    I.fillField(this.fields.contractObject, process.env.BG_CONTRACT_OBJECT)
   },
   clickForeignCustomer(){
    I.click(this.checkboxes.foreignCustomer)
   },
   fillCustomerInn(){
    I.fillField(this.fields.customerInn, process.env.BG_CUSTOMER_INN)
    I.click(this.fields.customerName)
    I.wait(1)
    const customerName = I.grabValueFrom(this.fields.customerName)
    assert(customerName).to.equal(process.env.BG_CUSTOMER_NAME)
   },
   fillStartPrice(){
    I.fillField(this.fields.contractStartPrice, process.env.BG_PRICE)
   },
   fillTargetPrice(){
    I.fillField(this.fields.contractTargetPrice, process.env.BG_PRICE)
   },
   fillGuaranteePrice(){
    I.fillField(this.fields.guaranteePrice, process.env.BG_PRICE)
   },
   choseCurrency(){
    I.click(this.selects.currency)
    I.seeElement(this.lists.currency)
    I.click(this.listElements.currencyRouble)
   },
   clickAntiDumpingActive(){
    I.click(this.checkboxes.antiDumpingActive)
    const increasedPrice = I.grabValueFrom(this.fields.guaranteePrice)
    assert.equal(increasedPrice, process.env.INCREASED_BG_PRICE)
   },
   fillGuaranteeFrom(){
    const today = new Date().toLocaleDateString()
    I.fillField(this.fields.guaranteeFrom, today)
   },
   fillGuaranteeTo(){
    I.fillField(this.fields.guaranteeTo, process.env.GUARANTEE_TO)
   },
   clickAdvance(){
    I.click(this.checkboxes.advance)
    I.seeElement(this.fields.advancePercent)
    I.seeElement(this.fields.advanceRub)
   },
   fillAdvanceRub(){
    I.fillField(this.fields.advanceRub, process.env.BG_ADVANCE_RUB)
    const advancePercent = I.grabValueFrom(this.fields.advancePercent)
    assert.equal(advancePercent, process.env.BG_ADVANCE_PERCENT)
   },
   clickUndisputedOff(){
    I.click(this.checkboxes.undisputedOff)
   },
   clickformPresents(){
    I.click(this.checkboxes.formPresents)
   },
   choseProvision(){
    I.click(this.selects.provision)
    I.seeElement(this.lists.provision)
    I.click(this.listElements.noProvision)
   },
   choseRaitingRA(){
    I.click(this.selects.raitingRA)
    I.seeElement(this.lists.raitingRA)
    I.click(this.listElements.raAAA)
   },
   choseRaitingAKRA(){
    I.click(this.selects.raitingAKRA)
    I.seeElement(this.lists.raitingAKRA)
    I.click(this.listElements.akraAAA)
   },
   fillComment(){
    I.fillField(this.fields.comment, "TEST")
   },
   clickSubmit(){
    I.click(this.buttons.submit)
   },
   clickDeleteDraft(){
    I.click(this.buttons.deleteDraft)
   },
   goToPartnersTab(){
    I.click(this.tabs.partners)
   },
   goToDocumentsTab(){
    I.click(this.tabs.documents)
   }
  }

 
