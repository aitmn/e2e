const { radio, messages } = require("../elements/addClientModal");
const { modalWindow } = require("../elements/choseClientModal");
const { guaranteeTypeSideBar } = require("../elements/guaranteesSideBar");
const { hooks } = require("../helpers/hooks");
const assert = require("assert");

Feature("Работа с модальным окном");

Before(hooks.createClient);
Scenario(
  "Переход из модального окна",
  ({ I, addClientModalElement }) => {
    addClientModalElement.backToChoseClient(); // При клике 'Назад', возвар к выбору клиента
    I.seeElement(modalWindow);
    addClientModalElement.closeAddClient(); // При клике на крестик, возвар к сайдбару продуктов
    I.seeElement(guaranteeTypeSideBar);
  }
);

Feature("Проверка доступности ролей");

Before(hooks.createClient);
Scenario("Проверка состояния радиобаттонов", async ({ I }) => {
  const isDisabledIndividual = await I.grabAttributeFrom(
    radio.individual,
    "aria-disabled"
  );
  assert.equal(
    isDisabledIndividual,
    "true",
    "Кнопка выбора Физического лица должна быть заблокирована, но она доступна"
  );
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

Before(hooks.createClient);
Scenario(
  "Создание клиента ИП",
  async ({ I, addClientModalElement }) => {
    addClientModalElement.createWrongIndividualPerson(); //ИП не создастся, если ИНН не равен 12 символам
    I.seeElement(messages.errorMessage);
    const errorText = await I.grabTextFrom(messages.errorMessage);
    assert.equal(errorText, "Требуемая длина ИНН - 12, сейчас - 10");
    addClientModalElement.clearInnField()
    addClientModalElement.createIndividualPerson(); //Успешное создание нового клиента ИП
    I.wait(2);
    I.seeInCurrentUrl("/create");
  }
);

Scenario(
  "Клиент ИП не создастся, если он уже прикреплен",
  async ({ I, addClientModalElement }) => {
    addClientModalElement.createAssignIndividualPerson();
    I.wait(2);
    const errorMessage = await I.grabTextFrom(messages.errorMessage);
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
Scenario(
  "Создание Юр. лица",
  async ({ I, addClientModalElement }) => {
    addClientModalElement.createWrongLegal(); // Юр. лицо не создастся, если ИНН не равен 10 символам
    I.seeElement(messages.errorMessage);
    const errorText = await I.grabTextFrom(messages.errorMessage);
    assert.equal(errorText, "Требуемая длина ИНН - 10, сейчас - 12");
    addClientModalElement.clearInnField()
    addClientModalElement.createLegal(); // Создание нового клиента Юр. лицо
    I.wait(2);
    I.seeInCurrentUrl("/create");
  }
);

Scenario(
  "Клиент Юр. лицо не создастся, если он уже прикреплен",
  async ({ I, addClientModalElement }) => {
    addClientModalElement.createAssignLegal();
    const errorMessage = await I.grabTextFrom(messages.errorMessage);
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
