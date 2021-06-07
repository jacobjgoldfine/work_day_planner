var dateEl = $("#currentDay");
var textBoxEl = $(".description");
var saveBtnEl = $(".saveBtn");

var today = moment();

var dayDisplay = today.format("dddd, MMMM Do");
dateEl.text(dayDisplay);

function timeChange() {
  var hour = "10";
  //   var hour = today.format("HH");
  Number(hour);
  for (i = 0; i < textBoxEl.length; i++) {
    var timeId = textBoxEl[i].id;
    Number(timeId);
    if (timeId < hour) {
      timeId.addClass("past");
    } else if (timeId == hour) {
      timeId.addClass("present");
    } else {
      timeId.addClass("future");
    }
    console.log(timeId);
  }
}

timeChange();
