/**
 * Handle the result of the Meetup event (v2) API
 * and refresh the view if there is a result
 * @param {*} data
 */
function callbackMeetup(data) {
  if (!!data && !!data.results && data.results.length > 0) {
    var next_event = data.results[0];
    var oMeetupDiv = document.getElementById("meetup");

    document.getElementById("next_meetup_date").innerText = new Date(
      next_event.time
    ).toLocaleDateString();
    document.getElementById("next_meetup_location").innerHTML = unescape(
      next_event.venue.name +
        "<br/>" +
        next_event.venue.address_1 +
        "<br/> " +
        next_event.venue.city
    );
    document.getElementById("next_meetup_name").innerHTML = unescape(
      next_event.name
    );
    document.getElementById("next_meetup_description").innerHTML = unescape(
      next_event.description
    );
    document.getElementById("next_meetup_url").href = unescape(
      next_event.event_url
    );
    oMeetupDiv.className = oMeetupDiv.className.replace("d-none", "");
  }
}
