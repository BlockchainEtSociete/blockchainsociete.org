const https = require("https");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { EVENT_PAGES_PATH } = require("./constants");

function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const offset = dateObj.getTimezoneOffset() * 60 * 1000;
  const locale = dateObj.getTime() - offset;
  const localeDate = new Date(locale);

  let day = localeDate.getDate();
  day = day > 9 ? day : `0${day}`;

  let month = localeDate.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;

  const year = localeDate.getFullYear();

  return `${day}/${month}/${year}`;
}

function formatVenue(venue) {
  let formattedVenu = "";
  if (venue && venue.name) {
    formattedVenu = venue.name;
    const { address_1, city } = venue;
    if (address_1 && city) {
      formattedVenu += ", " + address_1 + " - " + city;
    }
  }
  return formattedVenu;
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(
          new Error("Failed to load page, status code: " + response.statusCode)
        );
      }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on("data", (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on("end", () => resolve(body.join("")));
    });
    // handle connection errors of the request
    request.on("error", (err) => reject(err));
  });
}

/*
  Write each event as a hugo page. It overwrites the existing file if it exists.
*/
function buildEventPages(events) {
  for (const {
    link,
    time,
    name,
    description,
    featured_photo,
    duration,
    venue,
  } of events) {
    const fName = name.replace(/"/g, "'"); // remove ' character from event title
    const date = formatDate(time); // format date dd/mm/yyyy -- TODO i18n
    const image = featured_photo
      ? featured_photo.photo_link
      : "/images/event-card-default-img.png"; // set default image
    const isoDate = new Date(time).toISOString();

    // Event file name is its event date
    const filePath = path.join(
      EVENT_PAGES_PATH,
      `${isoDate.substring(0, 10)}.md`
    );

    const fileTemplate = [
      "---",
      `title: "${fName}"`,
      `description: "Évènement du ${date}"`,
      `date: ${isoDate}`,
      "author: Bob",
      `thumbnail: ${image}`,
      `images: ["${image}"]`,
      `duration: ${duration / 1000 || 10800}`, // event duration in seconds
      `venue: ${formatVenue(venue)}`,
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
  buildEventPages,
};
