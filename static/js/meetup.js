/**
 * Handle the result of the Meetup event (v2) API
 * and refresh the view if there is a result
 * @param {*} data
 */
function callbackMeetup(data) {
  /**
   * Format Date object to String with pattern dd/mm/yyyy
   * @param {Date} dateObject
   * @return {String}
   */
  var _formatDate = function(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;
  };

  if (!!data && !!data.results && data.results.length > 0) {
    var next_event = data.results[0];

    const dateOptions = {
      hour: "2-digit",
      minute: "2-digit"
    };

    let startHour = new Date(next_event.time).toLocaleTimeString(
      [],
      dateOptions
    );
    let endHour = new Date(
      next_event.time + next_event.duration
    ).toLocaleTimeString([], dateOptions);

    var oMeetupDiv = document.getElementById("meetup");

    document.getElementById("next_meetup_date").innerText =
      _formatDate(new Date(next_event.time)) +
      " de " +
      startHour +
      " à " +
      endHour;
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
