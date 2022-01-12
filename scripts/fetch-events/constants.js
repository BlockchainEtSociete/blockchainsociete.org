const path = require("path");

/**
 * @see https://www.meetup.com/meetup_api/docs/:urlname/events/#list
 */
const EVENTS_URL =
  "https://api.meetup.com/Blockchain-Societe-Nantes/events?fields=featured_photo&status=past,upcoming&page=100&desc=true";
const EVENT_PAGES_PATH = path.join(__dirname, "../../content/fr/events");

module.exports = {
  EVENTS_URL,
  EVENT_PAGES_PATH,
};
