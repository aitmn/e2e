const { I } = inject();

module.exports = {
  modalWindow: "body > div.MuiDialog-root > div.MuiDialog-container > div",
  elements: {
    choseClientInput: ".MuiAutocomplete-root input",
    createClientButton: ".MuiDialog-scrollPaper .MuiButton-root",
    closeModalButton: ".MuiBox-root .MuiSvgIcon-root > svg",
    clearClientInput: ".MuiInput-root .MuiAutocomplete-endAdornment",
    submitButton:
      ".MuiDialog-scrollPaper > div > div > div > header > div > button",
  },
  clickSubmitButton() {
    I.click(this.elements.submitButton);
    I.see("Добавить клиента");
  },
  choseClientFromList(){
    I.click(this.elements.choseClientInput)
  }

};
