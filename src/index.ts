import express from 'express';
import cors from 'cors';

import {connectToDatabase} from './db/mongo';
import reservationRouter from './routes/reservationRoutes';
import { errorHandler } from './middlewares/error';
import {ENV} from './config/env';

async function bootstrap() {
    await connectToDatabase();
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/api/reservations', reservationRouter);
    app.use(errorHandler);

    app.listen(ENV.PORT, () => {
        console.log(`Server is running on port ${ENV.PORT}`);
    });
}

bootstrap().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});

