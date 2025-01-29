export interface ITrip {
    id: number;
    region: string;
    from: string;
    to: string;
    tariff: string;
    status: 'Активные' | 'Завершенные';
}

export interface TripCardProps {
    trip: ITrip;
    markAsDone?: (id: number) => void;
}