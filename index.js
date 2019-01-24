const https = require("https");
const fs = require("fs");
const path = require("path");
const { execSync } = require('child_process');

const EVENTS_URL="https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Blockchain-Societe-Nantes&status=past,upcoming&page=100"
const EVENT_FILE_PATH=path.join(__dirname,"data/events.json");
const SITE_PATH=path.join(__dirname,'docs');

function formatDate(date){
    let dateObj = new Date(date);
    let offset = dateObj.getTimezoneOffset() * 60 * 1000;
    let locale = dateObj.getTime() - offset;
    let localeDate = new Date(locale);
    let month = localeDate.getMonth() + 1;
    month = month > 9 ? month : '0'+month;
    return localeDate.getDate()+'/'+month+'/'+localeDate.getFullYear();
}

function formatTime(date,duration){
    let locale = 'fr-FR';
    let timeOptions = {hour:'2-digit', minute:'2-digit'}
    let startTime = new Date(date).toLocaleTimeString(locale,timeOptions);
    let endTime = new Date(date+duration).toLocaleTimeString(locale,timeOptions);
    return startTime + ' - ' + endTime;
}

function formatVenue(venue){
    return venue ? venue.name + ", " + venue.address_1 + " - " + venue.city : "Nantes";
}

function fetch(url) {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }
            // temporary data holder
            const body = [];
            // on every content chunk, push it to the data array
            response.on('data', (chunk) => body.push(chunk));
            // we are done, resolve promise with those joined chunks
            response.on('end', () => resolve(body.join('')));
        });
        // handle connection errors of the request
        request.on('error', (err) => reject(err))
    })
};
      
function buildEventFile(events){

    let output = events.map(event => {
        return {
            name: event.name,
            date: formatDate(event.time),
            time: formatTime(event.time,event.duration || 10800000),
            venue: formatVenue(event.venue),
            url: event.event_url
        }
    });

    fs.writeFileSync(EVENT_FILE_PATH,JSON.stringify(output));
    
}

console.log("Récupération des évènements depuis api.meetup.com");

fetch(EVENTS_URL)
    .then(response => JSON.parse(response).results)
    .then(buildEventFile)
    .then(_=>execSync(`hugo -d ${SITE_PATH}`))
    .then(_=>console.log("Terminé avec succès"))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })