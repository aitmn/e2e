const { I } = inject();
const { modalWindow } = require("../elements/addClientModal");
const { offersSideBarElement } = require("../elements/offersSideBar");
const assert = require("assert");
module.exports = {
  filter: {
    modalWindow: ".MuiDialog-container.MuiDialog-scrollPaper > div > div",
    searchField: ".MuiFormControl-root > div > input",
    firstItem:
      ".MuiDialog-scrollPaper > div > div > div > .MuiBox-root > div > div > div > span > div > div:nth-child(1)",
    submitButton:
      ".MuiDialog-root> div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > .MuiBox-root > button:nth-child(1)",
    resetButton:
      ".MuiDialog-root> div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > .MuiBox-root > button:nth-child(2)",
  },
  slidersElements: {
    requets_offers: {
      filter: "button[value = 'isFiltered']",
      offersButton: "button[value = 'showOffers']",
      requestsButton: "button[value = 'showRequests']",
      firstCard:
        ".carousel__slide--visible > div > .MuiBox-root > div.MuiBox-root > div > div > div > span > div > div:nth-child(1)",
      submitButton:
        ".MuiPaper-root > div > div > .carousel__slider > div > div > .carousel__slide > div > .MuiBox-root > .MuiBox-root > div > div > div > span > div > div:nth-child(1) > .MuiBox-root:nth-child(3) > button",
      resetFilter:
        ".carousel__slider > div > div > .carousel__slide > div > .MuiBox-root > div > .MuiBox-root > div",
    },
    events: {
      firstElement:
        ".MuiPaper-rounded:nth-child(1) > div:nth-child(2) > div > div > div > div:nth-child(1)",
    },
    lastChats: {
      lastChat:
        ".MuiBox-root > div > div > div > div > div > div > div > div > .MuiPaper-root > .ScrollbarsCustom > div > div > div > div > div:nth-child(1)",
    },
    fastOrders: {
      firstElement:
        ".carousel__slide.carousel__slide--visible > div > div > a:nth-child(1) > div",
      editButton:
        ".MuiPaper-rounded > .MuiBox-root > .MuiBox-root > button",
      deleteButton:
        ".carousel__slide.carousel__slide--visible > div > div > .MuiBox-root:nth-child(1) > div > button",
    },
    lastOrders: {
      firstElement: "div[role = list] > div:nth-child(1)",
      allOrdersButton:
        ".MuiPaper-root.MuiPaper-rounded > .MuiBox-root > a",
    },
    personalManager: {
      social: {
        emailButton:
          ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(1)",
        telegramButton:
          ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(2)",
        whatsAppButton:
          ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(3)",
        phoneButton:
          ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(4)",
      },
    },
  },
  clickFilter() {
    I.click(this.slidersElements.requets_offers.filter);
  },
  useFilter() {
    I.click(this.filter.searchField);
    I.fillField(this.filter.searchField, "client");
    I.wait(1);
    I.click(this.filter.firstItem);
    I.click(this.filter.submitButton);
    I.seeElement(this.slidersElements.requets_offers.resetFilter);
  },
  clickOffersButton() {
    I.click(this.slidersElements.requets_offers.offersButton);
  },
  clickRequestsButton() {
    I.click(this.slidersElements.requets_offers.requestsButton);
  },
  goToFirstOffer() {
    I.click(this.slidersElements.requets_offers.offersButton);
    I.wait(1);
    I.click(this.slidersElements.requets_offers.submitButton);
    I.wait(1);
  },
  goToFirstRequest() {
    I.click(this.slidersElements.requets_offers.requestsButton);
    I.wait(1);
    I.click(this.slidersElements.requets_offers.submitButton);
    I.wait(1);
  },
  goToDrafts() {
    I.click(".MuiPaper-root:nth-child(7) > div > div > div:nth-child(2) > button:nth-child(2)")
    I.see('Черновики')
    I.click(".MuiBox-root > div > div > div > span > div > div:nth-child(1) > div:nth-child(1) > button ")
  },
  goToFirstEvent() {
    I.click(this.slidersElements.events.firstElement)
  },
  goToLastChat() {
    I.click(this.slidersElements.lastChats.lastChat);
  },
  async deleteFastOrder() {
    I.click(this.slidersElements.fastOrders.editButton);
    I.wait(1)
    const isActive = await I.grabAttributeFrom(this.slidersElements.fastOrders.editButton, 'aria-pressed')
    assert.equal(isActive, 'true')
    I.seeElement(this.slidersElements.fastOrders.deleteButton);
    I.click(this.slidersElements.fastOrders.deleteButton);
  },
  addNewFastOrder(){
    I.click("div:nth-child(2) > .carousel > .MuiBox-root > button:nth-child(2)")
    I.click(".//button[contains(., 'Создать шаблон')]")
    I.click(".//p[ancestor::li[ancestor::ul][contains(., 'Банковские гарантии')]]")
    I.click(".//li[contains(., 'БГ на участие')]")
  },
  goToFastOrder() {
    I.click(this.slidersElements.fastOrders.firstElement);
    I.wait(2);
  },
  goToLastOrder() {
    I.click(this.slidersElements.lastOrders.firstElement);
    I.wait(2);
  },
  goToAllOrders() {
    I.click(this.slidersElements.lastOrders.allOrdersButton);
  },
};
