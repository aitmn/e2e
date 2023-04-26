
const { I } = inject();

module.exports = {
  
    guaranteeTypeSideBar: "body > .MuiDrawer-root > .MuiPaper-root",
    guaranteesSideBar: "body > .MuiDrawer-modal > .MuiDrawer-paper > .ScrollbarsCustom > div > div > span",
    search: "body > div > div > div > div > div > div > div > input",
    guaranteeType:{
     bg: ""
 
    },
    guarantees:{
           
    },

choseGuarantee(){
    I.click(this.guaranteeType.bg)
    I.seeElement(this.guaranteesSideBar)
    I.click()
}
}