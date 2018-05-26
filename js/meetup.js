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
  }

  if (!!data && !!data.results && data.results.length > 0) {
    var htmlTemplate =
    '<div class="container">\
      <div class="row">\
        <div class="col-lg-8 mx-auto text-center">\
          <h2 class="section-heading text-white">Prochain Meetup</h2>\
          <hr class="light my-4">\
          <div id="details">\
            <p class="mb-4">\
              <div class="row">\
                <span class="icon col-1 fa fa-lg fa-calendar-alt"></span>\
                <span class="col-11" id="next_meetup_date"></span>\
              </div>\
              <div class="row">\
                <span class="icon col-1 fas fa-lg fa-map-marker-alt"></span>\
                <span class="col-11" id="next_meetup_location"></span>\
              </div>\
              <div id="next_meetup_description">\
                <h4>Au programme :</h4>\
                <span id="description"></span>\
              </div>\
            </p>\
          </div>\
          <a class="btn btn-light btn-xl" id="next_meetup_url" href="" target="_blank">Je m\'inscris</a>\
        </div>\
      </div>\
    </div>';
      
    var next_event = data.results[0];
    
    document.getElementById("meetup").innerHTML = htmlTemplate;
    document.getElementById("next_meetup_date").innerText = _formatDate(new Date(next_event.time));
    document.getElementById("next_meetup_location").innerHTML = unescape(next_event.venue.name + '<br/>' + next_event.venue.address_1 + '<br/> ' + next_event.venue.city);
    document.getElementById("next_meetup_description").innerHTML = unescape(next_event.description);
    document.getElementById("next_meetup_url").href = unescape(next_event.event_url);

  }

}