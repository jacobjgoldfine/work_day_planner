var dateEl = $("#currentDay");
var textBoxEl = $(".description");
var saveBtnEl = $(".saveBtn");

var today = moment();

var dayDisplay = today.format("dddd, MMMM Do");
dateEl.text(dayDisplay);

function timeChange() {
  // var hour = "13";
  var hour = today.format("HH");
  for (i = 0; i < textBoxEl.length; i++) {
    var timeId = textBoxEl[i].id;
    if (Number(timeId) < Number(hour)) {
      textBoxEl[i].classList.add("past");
    } else if (Number(timeId) === Number(hour)) {
      textBoxEl[i].classList.add("present");
    } else {
      textBoxEl[i].classList.add("future");
    }
  }
}

saveBtnEl.on("click", function () {
  var toDoText = $(this).siblings(".description").val();
  var toDoTime = $(this).siblings(".description").attr("id");

  localStorage.setItem(toDoTime, toDoText);
  toDoLoad();
});

function toDoLoad() {
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#13").val(localStorage.getItem("13"));
  $("#14").val(localStorage.getItem("14"));
  $("#15").val(localStorage.getItem("15"));
  $("#16").val(localStorage.getItem("16"));
  $("#17").val(localStorage.getItem("17"));
}

timeChange();

toDoLoad();
