import {selectAllTravels} from "../repositories/travel.repositories.js"
import { getPassengerTravels } from "../services/travel.services.js";

export async function getPassengersTravels(req, res){
    const { page } = req.query;

    try {
        const result = await getPassengerTravels(page);
        res.send(result)
    } catch(err){
        res.status(500).send(err.message);
    }
}