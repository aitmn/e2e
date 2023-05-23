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
        changeTax: ".App > div.MuiBox-root > div > div > div > div > div > div > div > div:nth-child(2) > div > div > div> p"
      },
      clickChangeTax(){
        I.click(this.buttons.changeTax)
        I.wait(1)
        I.see("Выберите систему налогообложения")
      },
      clickSubmit(){
        I.click(this.buttons.submit)
      },
      clickBack(){
        I.click(this.buttons.back)
      }
}