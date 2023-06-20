const { I } = inject();

module.exports = {
  buttons: {
    createOrder:
      ".ScrollbarsCustom > div > div > span > .MuiBox-root > button",
    home: "a[title = 'Главная'] > button"
  },
  clickOnCreateOrderButton() {
    I.click(this.buttons.createOrder);
  },
  clickOnHomeButton(){
    I.click(this.buttons.home)
  }
};
