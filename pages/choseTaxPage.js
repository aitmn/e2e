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
      },
      checkboxes: {
        OSN: "input[value='1']",
        USN: "input[value='2']",
        patent: "input[value='4']"
      },
      choseOSN(){
        I.click(this.checkboxes.OSN)
        I.click(this.buttons.submit)
      }

    }