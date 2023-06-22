import { Router } from "express";
import travelRouter from "./travel.routes.js";

const router = Router()

router.use(travelRouter);

export default router