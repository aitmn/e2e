const { I } = inject();

module.exports = {
    filter: {
        modalWindow: ".MuiDialog-container.MuiDialog-scrollPaper > div > div",
        searchField: ".MuiFormControl-root > div > input",
        firstItem: ".MuiDialog-scrollPaper > div > div > div > .MuiBox-root > div > div > div > span > div > div:nth-child(1)",
        submitButton: ".MuiDialog-root> div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > .MuiBox-root > button:nth-child(1)",
        resetButton: ".MuiDialog-root> div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > .MuiBox-root > button:nth-child(2)"
    },
    sliders: {
        requests_offers: "div > .MuiPaper-rounded:nth-child(5)",
        lastChats: "div > .MuiPaper-rounded:nth-child(4)",
        banners: "div > .MuiPaper-rounded:nth-child(3)",
        fastOrders: "div > .MuiPaper-rounded:nth-child(2)",
        events: "div > .MuiPaper-rounded:nth-child(1)",
        personalManager: "div > .MuiPaper-rounded:nth-child(6)",
        lastOrders: "div > .MuiPaper-rounded:nth-child(7)"
    },
    slidersElements: {
        requets_offers: {
            filter: "button[value = 'isFiltered']",
            offersButton: "button[value = 'showOffers']",
            requestsButton: "button[value = 'showRequests']",
            firstElement: ".MuiPaper-root > div > div > .carousel__slider > div > div > .carousel__slide > div > .MuiBox-root > .MuiBox-root > div > div > div > span > div > div:nth-child(1) > .MuiBox-root:nth-child(3) > button",
            resetFilter: ".carousel__slider > div > div > .carousel__slide > div > .MuiBox-root > div > .MuiBox-root > div"
        },  
        lastChats: {
            firstChat: ".MuiBox-root > div > div > div > div > div > div > div > div > .MuiPaper-root > .ScrollbarsCustom > div > div > div > div > div:nth-child(1)"
        },
        fastOrders: {
            firstElement: ".carousel__slide.carousel__slide--visible > div > div > a:nth-child(1) > div",
            editButton: ".MuiBox-root > div > div > div > div > div > div > div > div > div.MuiPaper-root.MuiPaper-rounded > .MuiBox-root > div.MuiBox-root.MuiBox-root-733 > button",
            deleteButton: ".carousel__slide.carousel__slide--visible > div > div > .MuiBox-root:nth-child(1) > div > button",
        },
        lastOrders: {
            firstOrder: "div[role = list] > div:nth-child(1)",
            allOrdersButton: ".MuiPaper-root > div > div > .carousel__slider--horizontal > div > div > .carousel__slide > div > .MuiBox-root > a"
        },
        personalManager: {
            social: {
            emailButton: ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(1)",
            telegramButton: ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(2)",
            whatsUpButton: ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(3)",
            phoneButton: ".MuiPaper-root.MuiPaper-rounded:nth-child(6) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)> div:nth-child(1)"
        }
    }
    },
    clickFilter(){
        I.click(this.slidersElements.requets_offers.filter)
        I.seeElement(this.filterModalWindow)
    },
    useFilter(){
        I.fillField(this.filter.searchField, "client")
        I.wait(1)
        I.click(this.filter.firstItem)
        I.click(this.filter.submitButton)
        I.seeElement(this.slidersElements.requets_offers.resetFilter)
    },
    clickOffersButton(){
        I.click(this.slidersElements.requets_offers.offersButton)
    },
    clickRequestsButton(){
        I.click(this.slidersElements.requets_offers.requestsButton)
    },
    goToFirstOffer(){
        I.click(this.slidersElements.requets_offers.firstElement)
        
    }
}