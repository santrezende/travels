import connection from "../database/database.js";

export function selectAllTravels(){
    return connection.query(`
        SELECT p."fullName", COUNT(p) as "viagens"  from passengers as p
        JOIN passenger_travels ON passenger_travels."passengerId" = p.id
        JOIN travels ON travels.id = passenger_travels."travelId"
        GROUP BY p."fullName" 
        ORDER BY "viagens" desc
        LIMIT 100;
    `)
}

export function selectPage(offset){
    return connection.query(`
    SELECT p."fullName", COUNT(p) as "viagens"  from passengers as p
    JOIN passenger_travels ON passenger_travels."passengerId" = p.id
    JOIN travels ON travels.id = passenger_travels."travelId"
    GROUP BY p."fullName" 
    ORDER BY "viagens" desc
    LIMIT 25
    OFFSET $1;
    `, [offset])
}