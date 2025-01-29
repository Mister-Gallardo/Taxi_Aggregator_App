export interface ITrip {
    id: number;
    region: string;
    from: string;
    to: string;
    tariff: string;
    status: 'active' | 'inactive';
}

export const store = {
    get: function () {
        const localStore = localStorage.getItem('trips');

        if (localStore) {
            return JSON.parse(localStore)
        } else {
            this.set(trips);
            return trips
        }
    },

    set: function (listOfTrips: ITrip[]) {
        localStorage.setItem('trips', JSON.stringify(listOfTrips));
    }
}

const trips: ITrip[] = [
    {
        id: 1,
        region: "Москва",
        from: "Красная площадь",
        to: "ВДНХ",
        tariff: "Комфорт",
        status: 'active'
    },
    {
        id: 2,
        region: "Санкт-Петербург",
        from: "Невский проспект",
        to: "Эрмитаж",
        tariff: "Эконом",
        status: 'active',
    },
    { id: 3, region: "Казань", from: "Кремль", to: "Аэропорт", tariff: "Бизнес", status: 'active' },
    {
        id: 4,
        region: "Уфа",
        from: "Проспект Октября",
        to: "Железнодорожный вокзал",
        tariff: "Комфорт",
        status: 'inactive'
    },
    { id: 5, region: "Москва", from: "Арбат", to: "МГУ", tariff: "Бизнес", status: 'inactive' },
    {
        id: 6,
        region: "Санкт-Петербург",
        from: "Петропавловская крепость",
        to: "Казанский собор",
        tariff: "Комфорт",
        status: 'active'
    },
    {
        id: 7,
        region: "Казань",
        from: "Аметьево",
        to: "Театр Камала",
        tariff: "Эконом",
        status: 'active'
    },
    {
        id: 8,
        region: "Уфа",
        from: "ТЦ Планета",
        to: "Аэропорт Уфы",
        tariff: "Бизнес",
        status: 'inactive'
    },
    {
        id: 9,
        region: "Москва",
        from: "Воробьевы горы",
        to: "Парк Горького",
        tariff: "Эконом",
        status: 'inactive'
    },
    {
        id: 10,
        region: "Санкт-Петербург",
        from: "Лахта Центр",
        to: "Дворцовая площадь",
        tariff: "Бизнес",
        status: 'active'
    },
    {
        id: 11,
        region: "Казань",
        from: "Метро Козья Слобода",
        to: "Центр семьи Казань",
        tariff: "Комфорт",
        status: 'active'
    },
    {
        id: 12,
        region: "Уфа",
        from: "Проспект Салавата",
        to: "Конгресс-холл",
        tariff: "Эконом",
        status: 'active'
    },
    {
        id: 13,
        region: "Москва",
        from: "Третьяковская галерея",
        to: "Останкинская башня",
        tariff: "Комфорт",
        status: 'inactive'
    },
    {
        id: 14,
        region: "Санкт-Петербург",
        from: "Зимний дворец",
        to: "Аврора",
        tariff: "Эконом",
        status: 'inactive'
    },
    {
        id: 15,
        region: "Уфа",
        from: "Башкирский театр",
        to: "ТЦ Мега",
        tariff: "Бизнес",
        status: 'active'
    },
];