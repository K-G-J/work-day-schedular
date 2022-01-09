var currentDay = document.getElementById("currentDay")
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a')
var timeBlockContainer = document.getElementsByClassName("container")

// time block color-coded to indicate past, present, or future
var currentTime = new Date();
var currentHour = currentTime.getHours();

var createEvent = function(calEventObj) {
  var calEventLi = document.createElement("li")
  calEventLi.textContent = calEventObj.eventText
  $("#list-" + calEventObj.eventHour).append(calEventLi);
}
$(".saveBtn").click(function(event) {
  userSelection = event.target
  var eventHour = $(userSelection).closest(".hour").html()
  console.log(eventHour);
  var eventText = $("input[name=event-input]").val().trim()
  var calEventObj = {
    text: eventText,
    hour: eventHour
  }
  saveCalEvent(calEventObj)
  createEvent(calEventObj)
});
function saveCalEvent(calEventObj) {
  var currentEvents = loadCalEvents();
  currentEvents.push(calEventObj);
  localStorage.setItem("calEventObj", JSON.stringify(currentEvents))
}
function loadCalEvents() {
  var calEvents = JSON.parse(localStorage.getItem("calEventObj"));
  if (!calEvents || !Array.isArray(calEvents)) return []
  else return calEvents;
}
loadCalEvents();