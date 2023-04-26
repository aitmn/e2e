const { I } = inject();

module.exports = {
  buttons: {
    logo: "header > div > .MuiBox-root > a",
    createOrder: "header > div > div> button ",
    avatar: "header > div > div > div > div > span > div",
    profile: "header > div > div > div:nth-child(2)",
    chat: "header > div > div > div > div > span > button",
    notifications: "header > div > div > div > span > button"
  },
  
  clickOnCreateOrderButton(){
    I.click(this.buttons.createOrder)
    I.wait(2)
    }
  }

