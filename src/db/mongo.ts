import mongoose from 'mongoose';
import {ENV} from '../config/env';

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(ENV.MONGODB_URI);
    console.log('Connected to MongoDB');
}
