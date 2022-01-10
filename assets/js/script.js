// jumbotron display 
var currentDay = document.getElementById("currentDay")
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a')
var checkTime = setInterval(() => {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a')
    auditTime();
  }, (1000));

  $(document).ready(function() {
    $(".event-list").click(function(event){
      $(event.target).siblings("input[name=event-input]").toggle( 'slow', function(){
       });
    });
 });

// setting and getting calendar events 
$(".saveBtn").click(function(event) {
  var eventHour = $(this).siblings(".hour").html()
  var eventText = $(this).siblings("input[name=event-input]").val().trim()
  $("input[name=event-input]").val("");
  var calEventObj = {
    text: eventText,
    hour: eventHour
  }
  saveCalEvent(calEventObj);
    var calEventLi = document.createElement("li")
    calEventLi.textContent = calEventObj.text
    $("#list-" + calEventObj.hour).append(calEventLi);
    window.location.reload()
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
// initial display 
var showCalendar = function() {
  var currentEvents = loadCalEvents();
  for (var item of currentEvents) {
    var calEventLi = document.createElement("li")
    calEventLi.textContent = item.text
    $("#list-" + item.hour).append(calEventLi);
  }
}
// time block color-coded to indicate past, present, or future
var currentTime = new Date();
var currentHour = currentTime.getHours();

var auditTime = function() {
  for (var block of $(".time-block")) {
    blockHour = parseInt(block.getAttribute("id"))
    if (blockHour === currentHour) {
      $(block).addClass("present")
    } else if (blockHour < currentHour) {
      $(block).addClass("past")
    }
    else {
      $(block).addClass("future")
    }
  }
}
// on page load 
showCalendar();
auditTime();