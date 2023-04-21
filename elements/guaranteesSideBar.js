
const { I } = inject();

module.exports = {
  
    guaranteeTypeSideBar: "body > .MuiDrawer-root > .MuiPaper-root",
    guaranteesSideBar: "body > .MuiDrawer-modal > .MuiDrawer-paper > .ScrollbarsCustom > div > div > span",
    search: "body > div > div > div > div > div > div > div > input",
    guaranteeType:{
        bankovskieGarantii: "body > div > div > div > div > div > div > div > span > div > ul:nth-child(2)"
    },
    guarantees:{
            bgNaIspolnenie: "body > div > div > div > div > div > span > div > div > ul > li:nth-child(2)"
    },

choseGuarantee(){
    I.click(this.guaranteeType.bankovskieGarantii)
    I.seeElement(this.guaranteesSideBar)
    I.click(this.bgNaIspolnenie)
}
}