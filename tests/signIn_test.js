const assert = require('assert')
const dotenv = require('dotenv');
dotenv.config()
const { faker } = require('@faker-js/faker')

Feature('Успешная аторизация, с переходом на стратовую страницу');

Before(( { I }) => {
    I.amOnPage(process.env.BASE_URL);
  });
  
Scenario('Успешная авторизация клиентом', ({ I, signInPage }) => {
    const email = process.env.CLIENT_EMAIL
    const password = process.env.BASE_PASSWORD
    
    signInPage.signIn(email, password)
    I.seeInCurrentUrl('/home')
}),

Scenario('Успешная авторизация сотрудником', ({ I, signInPage }) => {
    const email = process.env.ADMIN_EMAIL
    const password = process.env.BASE_PASSWORD
    
    signInPage.signIn(email, password)
    I.seeInCurrentUrl('/orders')
}),

Scenario('Успешная авторизация агентом', ({ I, signInPage }) => {
    const email = process.env.AGENT_EMAIL
    const password = process.env.BASE_PASSWORD
    
    signInPage.signIn(email, password)
    I.seeInCurrentUrl('/showcase')
}),

Scenario('Успешная авторизация партнером', ({ I, signInPage }) => {
    const email = process.env.BANK_EMAIL
    const password = process.env.BASE_PASSWORD
    
    signInPage.signIn(email, password)
    I.seeInCurrentUrl('/orders')
}),

Feature('Авторизация с некорректными данными')

Before(( { I }) => {
    I.amOnPage(process.env.BASE_URL);
  });

Scenario('Попытка авторизации с незаполенными полями "Логин", "Пароль"', ({ I, signInPage}) =>{

    signInPage.signIn('','')
    I.seeInCurrentUrl(process.env.BASE_URL)
}),

Scenario('Попытка авторизации с незаполенным полем "Логин"', ({ I, signInPage}) =>{
    const password = process.env.BASE_PASSWORD

    signInPage.signIn('', password)
    I.seeInCurrentUrl(process.env.BASE_URL)
}),

Scenario('Попытка авторизации с незаполенным полем "Пароль"', ({ I, signInPage}) =>{
    const email = process.env.ADMIN_EMAIL

    signInPage.signIn(email, '')
    I.seeInCurrentUrl(process.env.BASE_URL)
})

Scenario('Попытка авторизации с невалидными данными', ({ I, signInPage }) =>{
    const email = faker.internet.email(10)
    const password = faker.internet.password(5)
    
    signInPage.signIn(email, password)
    I.seeInCurrentUrl(process.env.BASE_URL)
})

Feature('Переход на другие формы')

Before(( { I }) => {
    I.amOnPage(process.env.BASE_URL);
  });

Scenario('Переход к форме восстановления пароля', ({ I, signInPage }) =>{

    signInPage.goToPasswordRecoveryPage()
    I.seeInCurrentUrl('/password-recovery')
}),

Scenario('Переход к форме регистрации', ({ I, signInPage }) =>{

    signInPage.goToSignUpPage()
    I.seeInCurrentUrl('/signup')
}),

Scenario('Переход в телеграм канал', ({ I, signInPage }) =>{
    
    signInPage.goToTelegram()
    I.switchToNextTab()
    I.seeInCurrentUrl(process.env.TELEGRAM_URL)
}),

Scenario('Переход на канал в Дзене', ({ I, signInPage }) =>{
    
    signInPage.goToDzen()
    I.switchToNextTab()
    I.seeInCurrentUrl(process.env.DZEN_URL)
})

