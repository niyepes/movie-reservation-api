import { NextFunction, Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: any, next: NextFunction) {

    const status = err.status ?? 500;
    const message = err.message || 'Internal Server Error';

    if (process.env.NODE_ENV !== 'production') {
        console.error(`[ERROR] ${err}`);
    }
    res.status(status).json({error: err.message|| message})};

    


