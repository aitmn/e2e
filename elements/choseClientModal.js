const { modalWindow } = require("./addClientModal");

const { I } = inject();

module.exports = {
  modalWindow: "body > div.MuiDialog-root > div.MuiDialog-container > div",
  elements: {
    choseClientInput: ".MuiAutocomplete-root input",
    createClientButton: ".MuiDialog-scrollPaper .MuiButton-root",
    closeModalButton: ".MuiBox-root .MuiSvgIcon-root > svg",
    clearClientInput: ".MuiInput-root .MuiAutocomplete-endAdornment",
    clientList: ".MuiAutocomplete-popperDisablePortal > div",
    FirstItemInList: ".MuiAutocomplete-popper .ScrollbarsCustom-Content >li",
    submitButton: ".MuiAutocomplete-root + div > button"
  },
  clickCreateClientButton() {
    I.click(this.elements.createClientButton);
    I.seeElement(modalWindow);
  },
  choseClientFromList(){
    I.click(this.elements.choseClientInput)
    I.wait(1)
    I.click(this.elements.FirstItemInList)
    I.wait(1)
    I.seeElement(this.elements.submitButton, { visible: true})
    I.click(this.elements.submitButton)
  }
};
