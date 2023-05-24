const { I } = inject();

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
    back: ".MuiButton-outlined.MuiButton-outlinedPrimary",
  },
  checkboxes: {
    allRecommended: "th > span > .MuiIconButton-label > input",
  },
  badges: {
  
  },

  choseAllRecommendedPartners(){
    I.click(this.checkboxes.allRecommended)
  },
  clickSubmit(){
    I.click(this.buttons.submit)
  },
  clickBack(){
    I.click(this.buttons.back)
  },
  async isSubmitDisabled(){
    const isDisabled = await I.grabAttributeFrom(this.buttons.submit)
    assert.equal(isDisabled, "Disabled")
  },
  
};
