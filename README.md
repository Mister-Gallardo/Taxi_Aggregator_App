# Агрегатор такси

## Описание

Приложение агрегатора такси позволяет пассажирам быстро добавлять запросы на поездки, а водителям обрабатывать эти заказы. Интерфейс прост и удобен в использовании.

## Основные функции

- Добавление заказа на поездку для пассажира
- Выбор тарифа (Комфорт, Бизнес и др.)
- Выбор региона и пунктов маршрута

## Технологии

- **React (Vite)** — для быстрой разработки и рендеринга
- **TypeScript** — для статической типизации
- **Material UI (MUI)** — создание удобного UI
- **React Testing Library (RTL)** — для проверки работоспособности

## Хранение данных  

Информация о поездках сохраняется в `localStorage` для обеспечения доступности данных между сессиями пользователя. Это позволяет сохранять добавленные поездки и восстанавливать их при следующем запуске приложения.

## Инструкция по установке

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/Mister-Gallardo/Taxi_Aggregator_App
   ```

2. Перейдите в каталог с проектом:

   ```bash
   cd Taxi_Aggregator_App
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Запустите приложение в режиме разработки:

   ```bash
   npm run dev
   ```

5. Откройте [http://localhost:5173/Taxi_Aggregator_App/](http://localhost:5173/Taxi_Aggregator_App/) в браузере.

## Тестирование

Проект содержит модульные и интеграционные тесты для ключевых компонентов, таких как `TripModalDriver` и `PassengerPageModal`, чтобы проверить их корректную работу и надежность.

Для запуска тестов введите:

```bash
npm test
```

## Ошибки и решения

- Если возникают проблемы с запуском, удалите папку node_modules и выполните npm install.
