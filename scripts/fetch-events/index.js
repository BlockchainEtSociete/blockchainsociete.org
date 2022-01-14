const { fetch, buildEventPages, formatEvent } = require("./utils");

const fetchEventsAsync = new Promise(async (res, rej) => {
  console.log(`1️⃣...... Fetching events`);
  const response = await fetch().catch(rej);
  res(response);
})
  .then((events) => {
    return events.map(formatEvent);
  })
  .then((events) => {
    console.log("3️⃣...... Create events pages");
    buildEventPages(events);
  })
  .then(() => console.log("🟢 Event fetching is DONE"))
  .catch((error) => {
    console.error("🔴 Event fetching ended with following error : ", error);
    process.exit(1);
  });

module.exports = fetchEventsAsync;
