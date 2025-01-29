import { ITrip } from "../entities/Trip/Trip.types";

export const regions = [
    "Московская область",
    "Челябинская область",
    "Астраханская область",
    "Башкортостан",
];

export const store = {
    get: function () {
        const localStore = localStorage.getItem('trips');

        if (localStore) {
            return JSON.parse(localStore)
        } else {
            this.set(initialTrips);
            return initialTrips;
        }
    },

    set: function (listOfTrips: ITrip[]) {
        localStorage.setItem('trips', JSON.stringify(listOfTrips));
    }
}

const initialTrips: ITrip[] = [
    {
        id: 1,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Красная площадь",
        to: "ВДНХ",
        tariff: "Комфорт",
        status: 'Активные'
    },
    {
        id: 2,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Невский проспект",
        to: "Эрмитаж",
        tariff: "Эконом",
        status: 'Активные',
    },
    { id: 3, region: regions[Math.round(Math.random() * 10) % 4], from: "Кремль", to: "Аэропорт", tariff: "Бизнес", status: 'Завершенные' },
    {
        id: 4,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Проспект Октября",
        to: "Железнодорожный вокзал",
        tariff: "Комфорт",
        status: 'Активные'
    },
    { id: 5, region: regions[Math.round(Math.random() * 10) % 4], from: "Арбат", to: "МГУ", tariff: "Бизнес", status: 'Завершенные' },
    {
        id: 6,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Петропавловская крепость",
        to: "Казанский собор",
        tariff: "Комфорт",
        status: 'Активные'
    },
    {
        id: 7,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Аметьево",
        to: "Театр Камала",
        tariff: "Эконом",
        status: 'Активные'
    },
    {
        id: 8,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "ТЦ Планета",
        to: "Аэропорт Уфы",
        tariff: "Бизнес",
        status: 'Завершенные'
    },
    {
        id: 9,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Воробьевы горы",
        to: "Парк Горького",
        tariff: "Эконом",
        status: 'Завершенные'
    },
    {
        id: 10,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Лахта Центр",
        to: "Дворцовая площадь",
        tariff: "Бизнес",
        status: 'Активные'
    },
    {
        id: 11,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Метро Козья Слобода",
        to: "Центр семьи Казань",
        tariff: "Комфорт",
        status: 'Завершенные'
    },
    {
        id: 12,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Проспект Салавата",
        to: "Конгресс-холл",
        tariff: "Эконом",
        status: 'Завершенные'
    },
    {
        id: 13,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Третьяковская галерея",
        to: "Останкинская башня",
        tariff: "Комфорт",
        status: 'Завершенные'
    },
    {
        id: 14,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Зимний дворец",
        to: "Аврора",
        tariff: "Эконом",
        status: 'Завершенные'
    },
    {
        id: 15,
        region: regions[Math.round(Math.random() * 10) % 4],
        from: "Башкирский театр",
        to: "ТЦ Мега",
        tariff: "Бизнес",
        status: 'Активные'
    },
];