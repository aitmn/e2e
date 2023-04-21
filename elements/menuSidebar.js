const { I } = inject();

module.exports = {
  buttons: {
  createOrderButton:
    ".App >.MuiBox-root > div > .ScrollbarsCustom > div > div > span > .MuiBox-root > button",
  },
  clickOnCreateOrderButton() {
    I.click(this.buttons.createOrderButton);
  },
};
