const https = require("https");

const getResponse = function(response) {
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

// Récupération des évènements passés
console.log("Récupération des events passés...");
https.get("https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Blockchain-Societe-Nantes&status=past&page=100", async response => {
    const { statusCode } = response;

    if (statusCode === 200) {
        console.log("Récupération des events passés OK");
        const responseDatas = JSON.parse(await getResponse(response));
        //console.log(`Response : ${responseDatas}`);
        responseDatas.results.forEach(event => {
            console.log(`${event.name} a eu lieu le ${new Date(event.time)}`);
        });
    } else {
        console.log("Erreur lors de la récupération des events passés");
        console.log(`Code retour : ${statusCode}`);
        const responseDatas = await getResponse(response);
        console.log(`Response : ${responseDatas}`);
    }
    response.resume();
});

// Récupération des évènements passés
console.log("Récupération du prochain event");
https.get("https://api.meetup.com/2/events?group_urlname=Blockchain-Societe-Nantes", async response => {
    const { statusCode } = response;

    if (statusCode === 200) {
        console.log("Récupération du prochain event OK");
        const responseDatas = JSON.parse(await getResponse(response));
        if(!!responseDatas && !!responseDatas.results && responseDatas.results.length > 0) {
            const nextEvent = responseDatas.results[0];
            console.log(`${nextEvent.name} a lieu le ${new Date(nextEvent.time)}`);
        } else {
            console.log("Pas d'event au programme");
        }
    } else {
        console.log("Erreur lors de la récupération du prochain event");
        console.log(`Code retour : ${statusCode}`);
        const responseDatas = await getResponse(response);
        console.log(`Response : ${responseDatas}`);
    }
    response.resume();
});