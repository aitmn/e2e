const dotenv = require("dotenv");
dotenv.config();
const { hooks } = require('../helpers/hooks');

Feature("Создание заявки");
Before(hooks.clientSingIn, hooks.createClient)

Scenario("Создание заявки на БГ, с заполнением обязательных полей",({}) => {

})
