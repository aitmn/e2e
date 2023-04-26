const { I } = inject();

module.exports = {
  guaranteeTypeSideBar: "body > .MuiDrawer-root > .MuiPaper-root",
  guaranteesSideBar:
    "body > .MuiDrawer-modal > .MuiDrawer-paper > .ScrollbarsCustom > div > div > span",
  search: "body > div > div > div > div > div > div > div > input",
  guaranteeType: {
    bg: {
      xpath:
        ".//p[ancestor::li[ancestor::ul][contains(., 'Банковские гарантии')]]",
    },
  },
  guarantees: {
    bgExecution: {
      xpath:
        ".//p[ancestor::li[ancestor::ul][contains(., 'БГ на исполнение')]]",
    },
  },

  choseGuarantee() {
    I.moveCursorTo(this.guaranteeType.bg);
    I.seeElement(this.guaranteesSideBar);
    I.click(this.guarantees.bgExecution);
  },
};
