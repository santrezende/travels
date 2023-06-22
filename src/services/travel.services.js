import {selectAllTravels, selectPage} from "../repositories/travel.repositories.js"

export async function getPassengerTravels(page){
    
    let result
    const offset = (parseInt(page) - 1) * 25;
    if(page){
        if(page <= 0){
            throw new Error("Invalid page value");
        }
        result = await selectPage(offset);
    } else{
        result = await selectAllTravels();
    }

    if(result.rowCount > 100){
        throw new Error("Too many results");
    }
    return result.rows;
}