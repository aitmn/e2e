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
    law: "body > div.MuiAutocomplete-popper > div",
    currency: "#menu-currency .MuiPaper-root",
    provision: "#menu-provision .MuiPaper-root",
    raitingRA: "#menu-ratingRA .MuiPaper-root",
    raitingAKRA: "#menu-ratingAKRA .MuiPaper-root",
  },
  listElements:{
    lawFz44: ".MuiAutocomplete-popper li:first-child > div",
    currencyRouble: ".MuiList-root > li:first-child",
    noProvision: ".MuiPaper-root > ul > li:first-child",
    ruAAAraitingRA: ".MuiPaper-root > ul > li:first-child",
    AAAraitingAKRA: ".MuiPaper-root > ul > li:first-child",
  },
  choseLaw(){
    I.click(this.selects.law)
    I.seeElement(this.lists.law)
    I.click(this.listElements.lawFz44)
    },
  choseNoticeDate(){
    const today = new Date();
    const formattedDate = `${today.getDate()} ${today.getMonth() + 1} ${today.getFullYear()}`;
    I.fillField(this.fields.noticeDate, formattedDate)
   },
   
  }

 
