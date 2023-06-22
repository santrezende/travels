import { Router } from "express"
import {getPassengersTravels} from "../controllers/travel.controllers.js"

const travelRouter = Router()

travelRouter.get("/passengers/travels", getPassengersTravels)

export default travelRouter