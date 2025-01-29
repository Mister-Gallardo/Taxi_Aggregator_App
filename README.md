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

Для запуска тестов введите:

```bash
npm test
```

**Важно:** На данный момент тесты не являются полностью работоспособными (не работает тест PassengerPage.test.tsx) и могут не проходить из-за проблем с обработкой сложных UI-элементов.

## Ошибки и решения

- Если тесты не проходят из-за необнаруженных текстовых элементов, проверьте корректность данных в DOM.
- Если возникают проблемы с запуском, удалите папку node_modules и выполните npm install.
