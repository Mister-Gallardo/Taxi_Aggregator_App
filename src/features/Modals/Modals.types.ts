import { ITrip } from "../../entities/Trip/Trip.types";

export interface TripModalPassengerProps {
    open: boolean;
    handleClose: () => void;
    trip: ITrip;
}

export interface TripModalDriverProps {
    open: boolean;
    handleClose: () => void;
    markAsDone: (id: number) => void;
    tripId: number;
}