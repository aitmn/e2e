const { I } = inject();

module.exports = {
  buttons: {
    createOrder:
      ".ScrollbarsCustom > div > div > span > .MuiBox-root > button",
    home: ".MuiBox-root > div > div > div > div > span > .MuiBox-root > div > ul > a:nth-child(1) > button"
  },
  clickOnCreateOrderButton() {
    I.click(this.buttons.createOrder);
  },
  clickOnHomeButton(){
    I.click(this.buttons.home)
  }
};
