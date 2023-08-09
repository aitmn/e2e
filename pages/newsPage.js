const { I } = inject();

module.exports = {
  fields: {
    search: "input[placeholder='Поиск']",
  },
  currentNew: {
    buttons: {
      back: "a[role = 'button']",
      sendComment: ".MuiBox-root > div > div > div > div > button",
    },
    fields: {
      comment: ".MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div"
    }
  },

  clickBackButton() {
    I.waitForElement(this.currentNew.buttons.back, 10)
    I.click(this.currentNew.buttons.back);
  },
};
