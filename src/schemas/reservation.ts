import {Schema} from 'mongoose';
import { minLength } from 'zod';

export const reservationSchema = new Schema({
    reservationDate: { type: String, required: true },
    reservationHour: { type: String, required: true },
    name: { type: String, required: true },
    lastname : { type: String, required: true },
    age : { type: Number, required: true, min: 0, max: 100 },
    adress : { type: String, required: true },
    email : { type: String, required: true },
    ticketNumber : {type: Number, required: true , min : 1, max : 10},

}, { timestamps: true })

