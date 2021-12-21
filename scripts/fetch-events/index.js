const { EVENTS_URL } = require("./constants");
const { fetch, buildEventFile } = require("./utils");

const fetchEventsAsync = new Promise(async (res, rej) => {
  console.log(`1️⃣...... Fetching events from ENDPOINT ${EVENTS_URL}`);
  const response = await fetch(EVENTS_URL).catch(rej);
  res(response);
})

  .then((response) => {
    console.log("2️⃣...... Formating events");
    const json = JSON.parse(response);
    buildEventFile(json);
  })
  .then(() => console.log("🟢 Event fetching is DONE"))
  .catch((error) => {
    console.error("🔴 Event fetching ended with following error : ", error);
    process.exit(1);
  });

module.exports = fetchEventsAsync;
