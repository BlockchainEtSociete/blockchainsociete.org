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

// Récupération des évènements passés et futurs
console.log("Récupération des events passés...");
https.get("https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Blockchain-Societe-Nantes&status=past,upcoming&page=100", async response => {
    const { statusCode } = response;

    if (statusCode === 200) {
        console.log("Récupération des events passés OK");
        const responseDatas = JSON.parse(await getResponse(response));
        //console.log(`Response : ${responseDatas}`);
        responseDatas.results.forEach(event => {
            console.log(`${event.name} le ${new Date(event.time)}`);
        });
    } else {
        console.log("Erreur lors de la récupération des events passés");
        console.log(`Code retour : ${statusCode}`);
        const responseDatas = await getResponse(response);
        console.log(`Response : ${responseDatas}`);
    }
    response.resume();
});