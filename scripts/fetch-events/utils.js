const https = require("https");
const fs = require("fs");
const path = require("path");
const os = require("os");
const moment = require("moment");

const {
  EVENT_PAGES_PATH,
  MEETUP_FETCH_EVENTS_GRAPHQL_QUERY,
} = require("./constants");

function formatVenue(venue) {
  let formattedVenu = "";
  if (venue && venue.name) {
    formattedVenu = venue.name;
    const { address, city } = venue;
    if (address && city) {
      formattedVenu += ", " + address + " - " + city;
    }
  }
  return formattedVenu;
}

function fetch() {
  const data = JSON.stringify({
    query: MEETUP_FETCH_EVENTS_GRAPHQL_QUERY,
  });

  const options = {
    hostname: "api.meetup.com",
    path: "gql",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      const { statusCode, headers } = res;
      let returnData = "";

      res.on("data", (chunk) => {
        returnData += chunk;
      });

      res.on("end", () => {
        resolve({ statusCode, headers, ...JSON.parse(returnData) });
      });

      res.on("error", reject);
    });

    req.on("error", reject);

    req.write(data);
    req.end();
  }).then(({ data }) => {
    const upcomingEvents = data.groupByUrlname.upcomingEvents.edges.map(
      (e) => e.node
    );
    const pastEvents = data.groupByUrlname.pastEvents.edges.map((e) => e.node);
    return [...upcomingEvents, ...pastEvents];
  });
}

function formatEvent({
  title,
  dateTime,
  imageUrl,
  duration,
  venue,
  description,
  shortUrl,
}) {
  const name = title.replace(/"/g, "'"); // remove ' character from event title
  const date = moment(dateTime);
  console.log("date", date, dateTime);
  const fDate = date.format("DD/MM/YYYY"); // format date dd/mm/yyyy -- TODO i18n
  const isoDate = date.toISOString(true);
  const image = imageUrl || "/images/event-card-default-img.png";
  const imageHighRes = imageUrl; // temporary until found a way to get high res
  const fDuration = duration
    ? moment.duration(duration, moment.ISO_8601).asSeconds()
    : 10800;
  const fVenue = formatVenue(venue);

  return {
    name,
    date: fDate,
    isoDate,
    image,
    imageHighRes,
    duration: fDuration,
    venue: fVenue,
    description,
    link: shortUrl,
  };
}

/*
  Write each event as a hugo page. It overwrites the existing file if it exists.
*/
function buildEventPages(events) {
  for (const {
    name,
    date,
    isoDate,
    image,
    imageHighRes,
    duration,
    venue,
    description,
    link,
  } of events) {
    // Event file name is its event date
    const filePath = path.join(
      EVENT_PAGES_PATH,
      `${isoDate.substring(0, 10)}.md`
    );

    const fileTemplate = [
      "---",
      `title: "${name}"`,
      `description: "Évènement du ${date}"`,
      `date: ${isoDate}`,
      "author: meetup",
      `thumbnail: ${image}`,
      imageHighRes ? `thumbnailHighRes: ${imageHighRes}` : "",
      `images: ["${image}"]`,
      `duration: ${duration}`, // event duration in seconds
      `venue: ${venue}`,
      "---",
      `${description}`,
      `<div class="text-sm text-gray-400 dark:text-gray-600">initialement publié sur Meetup.com <br/> <a href="${link}" target="_blank" rel="noopener">${link}</a></div>`,
    ];

    const fileStream = fs.createWriteStream(filePath);
    fileTemplate.forEach((line) => fileStream.write(line + os.EOL));
    fileStream.end();
  }
}

module.exports = {
  fetch,
  formatEvent,
  buildEventPages,
};
