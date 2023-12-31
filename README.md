# Проект с e2e тестами для crm.finleo

## Структура проекта

```
├── pages/
│   └── signInPage.js
│   └── signUpPage.js
│   └── ...
├── elements/
│   └── menuSidebar.js
│   └── appBar.js
│   └── ...
├── tests/
│   └── signIn_test.js
│   └── signUp_test.js
│   └── ...
├── heplers/
│   └── output
|   └── steps_file.js
│   └── ...
├── config.js
├── codecept.conf.js
└── package.json
└── ...
```

- В папке `tests` содержатся тест-кейсы для различных функциональных возможностей приложения. В данном примере это вход в систему, регистрация пользователя.

- В папке `pages` находятся страницы (page objects), каждая из которых представляет определенную страницу приложения.

- В папке `elements` содержатся элементы (page elements), которые могут использоваться на разных страницах в качестве общих или повторяющихся элементов.

- Папка `helpers` используется для хранения вспомогательных файлов, например, кастомных репортеров, исполняемых файлов для настройки БД, и т.д.

- В папке `output` хранятся репорты

- `codecept.conf.js` - файл конфигурации CodeceptJS

## Как развернуть проект

Склонируйте проект с репозитория Gitlab:

`git clone <project-url>`

Скопируйте файл `.env-exmaple` для того, чтобы определить переменные окружения

```sh
cp ./.env-example ./.env
```

Заполните `FRONTEND_URL`

Без использования docker:

1. Установите зависимости с помощью npm:

`npm install`

Некоторые пакеты могут устанавливаться 5-10 минут, это нормально.

С использованием docker:

Установка всех необходимых пакетов и зависимостей прописана в файле `Dockerfile`

1. Для создания образа контейнера на основе `Dockerfile`, достаточно прописать команду:

`docker build -f <my_container>`

2. Для запуска тестов внутри контейнера:

`docker run <my_conainer>`

С использованием docker compose:

1. Команда `docker compose up` собирает проект в docker и запускает тесты

## Как пользоваться

1. Для запуска теста можно воспользоваться следующей командой:

`npx codeceptjs run`

Используйте флаг `--steps` , для запуска теста по шагам

2. После завершения тестирования сгенерируется файл с отчетом в папке `output`.

3. В случае необходимости можно запустить только один тест:

`npx codeceptjs run tests/<test-name>`
