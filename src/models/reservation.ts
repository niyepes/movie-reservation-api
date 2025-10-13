import {model} from 'mongoose';
import { reservationSchema } from '../schemas/reservation';

export type ReservationDoc = {
    _id: string;
    reservationDate: string;
    reservationHour: string;
    name: string;
    lastname: string;
    age: number;
    adress: string;
    email: string;
    ticketNumber: number;
};

export const ReservationModel = model<ReservationDoc>('Reservation', reservationSchema);
