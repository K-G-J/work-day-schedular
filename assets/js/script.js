// jumbotron display 
var currentDay = document.getElementById("currentDay")
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a')

// setting and getting calendar events 
$(".saveBtn").click(function(event) {
  var userSelection = event.target
  var eventHour = $(userSelection).siblings(".hour").html()
  var eventText = $(userSelection).siblings("input[name=event-input]").val().trim()
  var calEventObj = {
    text: eventText,
    hour: eventHour
  }
  saveCalEvent(calEventObj);
    var calEventLi = document.createElement("li")
    calEventLi.textContent = calEventObj.text
    // add classes for styling 
    $("#list-" + calEventObj.hour).append(calEventLi);
  });
function saveCalEvent(calEventObj) {
  var currentEvents = loadCalEvents();
  currentEvents.push(calEventObj);
  localStorage.setItem("calEventObjects", JSON.stringify(currentEvents))
}
function loadCalEvents() {
  var calEventsArr = JSON.parse(localStorage.getItem("calEventObjects"));
  if (!calEventsArr || !Array.isArray(calEventsArr)) return []
  else return calEventsArr;
}
var showCalendar = function() {
  var currentEvents = loadCalEvents();
  for (var item of currentEvents) {
    var calEventLi = document.createElement("li")
    calEventLi.textContent = item.text
    // add classes for styling 
    $("#list-" + item.hour).append(calEventLi);
  }
}
showCalendar();

// time block color-coded to indicate past, present, or future
var currentTime = new Date();
var currentHour = currentTime.getHours();