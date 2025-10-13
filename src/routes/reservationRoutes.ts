import { createReservation } from "../controllers/reservationController";
import { Router } from "express";

const reservationRouter = Router();
reservationRouter.post('/', createReservation);
export default reservationRouter;

