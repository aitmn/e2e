const { I } = inject();
const { modalWindow } = require("../elements/addClientModal");
const { offersSideBarElement } = require("../elements/offersSideBar");
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
      firstEvent:
        ".MuiPaper-rounded:nth-child(1) > div:nth-child(2) > div > div > div > div:nth-child(1)",
    },
    lastChats: {
      lastChat:
        ".MuiBox-root > div > div > div > div > div > div > div > div > .MuiPaper-root > .ScrollbarsCustom > div > div > div > div > div:nth-child(1)",
    },
    fastOrders: {
      firstItem:
        ".carousel__slide.carousel__slide--visible > div > div > a:nth-child(1) > div",
      editButton:
        ".MuiBox-root > div > div > div > div > div > div > div > div > div.MuiPaper-root.MuiPaper-rounded > .MuiBox-root > div.MuiBox-root.MuiBox-root-733 > button",
      deleteButton:
        ".carousel__slide.carousel__slide--visible > div > div > .MuiBox-root:nth-child(1) > div > button",
    },
    lastOrders: {
      firstOrder: "div[role = list] > div:nth-child(1)",
      allOrdersButton:
        ".MuiPaper-root > div > div > .carousel__slider--horizontal > div > div > .carousel__slide > div > .MuiBox-root > a",
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
  goToFirstEvent() {
    I.click(this.slidersElements.events.firstEvent)
  },
  goToLastChat() {
    I.click(this.slidersElements.lastChats.lastChat);
  },
  deleteFastOrder() {
    I.click(this.slidersElements.fastOrders.editButton);
    I.seeElement(this.slidersElements.fastOrders.deleteButton);
    I.click(this.slidersElements.fastOrders.deleteButton);
  },
  goToFastOrder() {
    I.click(this.slidersElements.fastOrders.firstItem);
  },
  goToLastOrder() {
    I.click(this.slidersElements.lastOrders.firstOrder);
    I.wait(2);
    I.seeInCurrentUrl("/orders");
    I.seeElement("button[role='tab']");
  },
  goToAllOrders() {
    I.click(this.slidersElements.lastOrders.allOrdersButton);
    I.seeInCurrentUrl("/orders");
  },
};
