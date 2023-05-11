const { radio } = require("../elements/addClientModal");
const { messages } = require("../elements/addClientModal");
const { modalWindow } = require("../elements/choseClientModal");
const { guaranteeTypeSideBar } = require("../elements/guaranteesSideBar");
const { headers } = require("../pages/ordersCreatePage");
const assert = require("assert");
Feature("Работа с модальным окном");
Before(
  ({
    I,
    signInPage,
    appBarElement,
    GuaranteesSideBarElement,
    choseClientModalElement,
  }) => {
    I.amOnPage(process.env.BASE_URL);
    signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
    I.wait(3);
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    choseClientModalElement.clickCreateClientButton();
  }
);
Scenario(
  "При клике 'Назад', возвар к выбору клиента",
  ({ I, addClientModalElement }) => {
    addClientModalElement.backToChoseClient();
    I.seeElement(modalWindow);
  }
);

Scenario(
  "При клике на крестик, возвар к сайдбару продуктов",
  ({ I, addClientModalElement }) => {
    addClientModalElement.closeAddClient();
    I.seeElement(guaranteeTypeSideBar);
  }
);

Feature("Проверка доступности ролей");
Before(
  ({
    I,
    signInPage,
    appBarElement,
    GuaranteesSideBarElement,
    choseClientModalElement,
  }) => {
    I.amOnPage(process.env.BASE_URL);
    signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
    I.wait(3);
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    choseClientModalElement.clickCreateClientButton();
  }
);

Scenario("Нельзя выбрать Физическое лицо", async ({ I }) => {
  const isDisabled = await I.grabAttributeFrom(
    radio.individual,
    "aria-disabled"
  );
  assert.equal(
    isDisabled,
    "true",
    "Кнопка выбора Физического лица должна быть заблокирована, но она доступна"
  );
});

Scenario("Можно выбрать ИП и Юр. лицо", async ({ I }) => {
  const isEnabledIndividualPerson = await I.grabAttributeFrom(
    radio.individualPerson,
    "aria-disabled"
  );
  const isEnabledLegal = await I.grabAttributeFrom(
    radio.legal,
    "aria-disabled"
  );
  assert.equal(
    isEnabledIndividualPerson,
    isEnabledLegal,
    "false",
    "Кнопки должны быть доступны, но они заблокированы"
  );
});

Feature("Создание Клиента");
Before(
  ({
    I,
    signInPage,
    appBarElement,
    GuaranteesSideBarElement,
    choseClientModalElement,
  }) => {
    I.amOnPage(process.env.BASE_URL);
    signInPage.signIn(process.env.AGENT_EMAIL, process.env.BASE_PASSWORD);
    I.wait(3);
    appBarElement.clickOnCreateOrderButton();
    I.wait(2);
    GuaranteesSideBarElement.choseGuarantee();
    choseClientModalElement.clickCreateClientButton();
  }
);
Scenario("Создание нового клиента ИП", async({ I, addClientModalElement }) => {
  addClientModalElement.createIndividualPerson();
  I.waitForNavigation(2);
  I.seeInCurrentUrl("/create");
  I.wait(2)
  const clientName = await I.grabTextFrom(headers.client);
  const guarantee = await I.grabTextFrom(headers.guarantee)
  assert.equal(guarantee, "БГ на исполнение")
  assert.equal(clientName, process.env.TEST_INDIVIDUAL_PERSON_NAME)
});
Scenario(
  "Клиент ИП не создастся, если он уже прикреплен",
  async ({ I, addClientModalElement }) => {
    addClientModalElement.createAssignIndividualPerson();
    const errorMessage = await I.grabTextFrom(messages.innErrorMessage);
    assert.equal(
      errorMessage,
      "Пользователь с таким ИНН уже закреплен за вами"
    );
  }
);
/*
После этого сценария необходимо удалить тестового юзера с инн = 503021987820.
Из таблице Profiles и Users
*/

Scenario("Создание нового клиента Юр. лицо", async({ I, addClientModalElement }) => {
  addClientModalElement.createLegal();
  I.waitForNavigation(2);
  I.seeInCurrentUrl("/create");
  const clientName = await I.grabTextFrom(headers.client);
  const guarantee = await I.grabTextFrom(headers.guarantee)
  assert.equal(guarantee, "БГ на исполнение")
  assert.equal(clientName, process.env.TEST_LEGAL_NAME)
});

Scenario(
  "Клиент Юр. лицо не создастся, если он уже прикреплен",
  async ({ I, addClientModalElement }) => {
    addClientModalElement.createAssignLegal();
    const errorMessage = await I.grabTextFrom(messages.innErrorMessage);
    assert.equal(
      errorMessage,
      "Пользователь с таким ИНН уже закреплен за вами"
    );
  }
);
/*
После этого сценария необходимо удалить тестового юзера с инн = 7725396754.
Из таблице Profiles и Users
*/
