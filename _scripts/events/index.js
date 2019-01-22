const https = require("https");
const fs = require("fs");
const path = require("path");

const EVENTS_URL="https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Blockchain-Societe-Nantes&status=past,upcoming&page=100"

const OUTPUT_FILE_PATH=path.join(__dirname,"hugo/data/events.json");

async function buildResponse(response) {
    return new Promise((resolve, reject) => {
        let rawData = '';
        response.on('data', (chunk) => { rawData += chunk; });
        response.on('end', () => {
            try {
                resolve(rawData);
            } catch (e) {
                reject("Erreur lors de la récupération des données dans la réponse");
            }
        });
    });
}

function parseResponse(callback){
    return async (response)=>{
        const { statusCode } = response;

        if (statusCode === 200) {
            console.log("Récupération des events passés OK");
            callback(JSON.parse(await buildResponse(response)).results);
            
        } else {
            console.log("Erreur lors de la récupération des events passés");
            console.log(`Code retour : ${statusCode}`);
            console.log(`Response : ${await buildResponse(response)}`);
            process.exit(1);
        }
        response.resume();
    }
}

function parseDate(date){
    let dateObj = new Date(date);
    let offset = dateObj.getTimezoneOffset() * 60 * 1000;
    let local = dateObj.getTime() - offset;
    return new Date(local).toISOString().slice(0,19);
}

function buildEventFile(events){

    let output = events.map(event => {
        let venue = event.venue ? {
            name: event.venue.name,
            address_1: event.venue.address_1,
            city: event.venue.city
        } : {city:"NANTES"}
        return {
            name: event.name,
            date: parseDate(event.time),
            duration: events.duration || 10800000,
            venue: venue,
            event_url: event.venue_url
        }
    });

    fs.writeFileSync(OUTPUT_FILE_PATH,JSON.stringify(output));
    console.log("Terminé avec succès");
}

// Récupération des évènements passés et futurs
console.log("Récupération des events passés...");
https.get(EVENTS_URL, parseResponse(buildEventFile));