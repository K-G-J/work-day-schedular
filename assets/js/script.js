var currentDay = document.getElementById("currentDay")
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a')
var timeBlockContainer = document.getElementsByClassName("container")
var calEvent = []

// time block color-coded to indicate past, present, or future
var currentTime = new Date();
var currentHour = currentTime.getHours();

var getEventInfo = function() {
    $.each(hourBlocks.hourInfo,function() {
        //error happening here 
        var eventTime = $(this).time
        var eventText = $("input[name='eventInput']").val()
       })
    return eventTime, eventText
}

var saveButton = document.createElement("button")
saveButton.textContent = "Save"
saveButton.className = "saveBtn"
$(".jumbotron").append(saveButton)
saveButton.addEventListener("click", function(){
        // get values
        getEventInfo();
        // save in events array
        calEvent.push({
            time: eventTime,
            input: eventText
        });
        saveCalEvents(calEvent);
});

var loadCalEvents = function() {
    calEvent = JSON.parse(localStorage.getItem("calEvent"));
    if (!calEvent) {
        calEvent = [];
    }
    $.each(calEvent, function() {
        $('.container').append('<hourBlocks class="wrapper"><h3>'+block.time+'<p>'+block.input+'</p></hourBlocks>')
        $(this).addClass("cal-list-item")
    });
  };
  
  var saveCalEvents = function(calEvent) {
    localStorage.setItem("calEvent", JSON.stringify(calEvent));
  };

var hourBlocks = {
    hourInfo: [
      {
        time: 9,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 10,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 11,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 12,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 1,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 2,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 3,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 4,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },
      {
        time: 5,
        input: this.innerHTML = "<input type='text' name='eventInput' class='event-forum' placeholder='' autocomplete='off' /><span class='oi oi-calendar'></span>"
      },     
    ]
  };
$.each(hourBlocks.hourInfo,function(i,block){
 $('.container').append('<hourBlocks class="wrapper"><h3>'+block.time+'<p>'+block.input+'</p></h3></hourBlocks>')
 $(this).addClass("cal-list-item")
})

// load calendar events
loadCalEvents();

