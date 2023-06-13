const { I } = inject();

module.exports = {
  buttons: {
    createOrderButton:
      ".ScrollbarsCustom > div > div > span > .MuiBox-root > button",
    home: ".MuiBox-root > div > ul > a:nth-child(1) > button",
    menu: ".MuiBox-root > div > button:nth-child(1)"
  },
  clickOnCreateOrderButton() {
    I.click(this.buttons.createOrderButton);
  },
  clickOnHomeButton(){
    I.click(this.buttons.home)
  }
};
