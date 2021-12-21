const https = require("https");
const fs = require("fs");
const path = require("path");
const { EVENT_FILE_PATH } = require("./constants");

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

function formatTime(timestamp, duration) {
  const locale = "fr-FR";
  const timeOptions = {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const startTime = new Date(timestamp).toLocaleTimeString(locale, timeOptions);
  const endTime = new Date(timestamp + duration).toLocaleTimeString(
    locale,
    timeOptions
  );

  const formatedTime = `${startTime} - ${endTime}`;
  return formatedTime;
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

function buildEventFile(events) {
  let output = events.map((event) => {
    return {
      name: event.name,
      isoDate: new Date(event.time).toISOString(),
      duration: event.duration / 1000 || 10800, // event duration in seconds
      date: formatDate(event.time),
      time: formatTime(event.time, event.duration || 10800000),
      venue: formatVenue(event.venue),
      image: event.featured_photo ? event.featured_photo.photo_link : undefined, // has `featured_photo.highres_link` if necessary!
      url: event.link,
    };
  });

  fs.mkdirSync(path.parse(EVENT_FILE_PATH).dir, { recursive: true });
  fs.writeFileSync(EVENT_FILE_PATH, JSON.stringify(output));
}

module.exports = {
  fetch,
  buildEventFile,
};
