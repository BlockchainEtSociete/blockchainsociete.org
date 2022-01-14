const path = require("path");

const EVENT_PAGES_PATH = path.join(__dirname, "../../content/fr/events");

const MEETUP_ENDPOINT_GRAPHQL = "https://api.meetup.com/gql";
const MEETUP_FETCH_EVENTS_GRAPHQL_QUERY = `
query {
  groupByUrlname (urlname:"Blockchain-Societe") {
        upcomingEvents(input:{first:100}) {
          edges {
              node{
                  title,
                  shortUrl,
                  description,
                  dateTime,
                  duration,
                  venue { name, address, city },
                  topics{ edges{ node{ name } } },
                  imageUrl,
              }
          }
      },
      pastEvents(input:{first:100}) {
          edges{
              node{
                  title,
                  shortUrl,
                  description,
                  dateTime,
                  duration,
                  venue { name, address, city },
                  topics{ edges{ node{ name } } },
                  imageUrl,
              }
          }
      },
  }
}
`;

module.exports = {
  EVENT_PAGES_PATH,
  MEETUP_ENDPOINT_GRAPHQL,
  MEETUP_FETCH_EVENTS_GRAPHQL_QUERY,
};
