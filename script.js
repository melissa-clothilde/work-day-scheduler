var m = moment();
var dayDiv = $('#current-day');
var timeBlock = $('.entry');
var block9Am = $('#block0');
var blockVal = $('#block').val;
var saveBtn = $('.save-button');
var currentTime = m.format('HH');
var time = $('.left');
var activityText = $('#block1');

//the current day is displayed at the top of the calendar
dayDiv.text(m.format("dddd" + ", " + "MMMM Do"));


//each timeblock is color coded to indicate whether it is in the past, present, or future
timeBlock.each(function (index) {
    $(this).attr('data-time', index + 9);
});

timeBlock.each(function () {
    if (parseInt($(this).attr('data-time')) === parseInt(currentTime)) {
        $(this).addClass("present");
    }

    else if (parseInt($(this).attr('data-time')) > parseInt(currentTime)) {
        $(this).addClass("future");
    }

    else {
        $(this).addClass("past");
    }
});

//when user clicks the save button for that timeblock, the text for that event is saved in local storage
saveBtn.each(function (index) {
    $(this).attr('data-textboxId', '#block' + index);
})

saveBtn.on("click", function () {
    var textboxId = $(this).attr('data-textboxId');
    console.log(textboxId);
    var id = $(block0).attr('id');
    var textInput = $(textboxId);
    textInput.val();
    tasksArray.push({ id: textboxId, item: textInput.val() });
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
});

var tasksArray = [];

//when user refreshes the page, the saved events persist
//ANOTHER attempt...
$(document).ready(function listTasks() {
    var tasksArray = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasksArray);
    if (!tasksArray) {
        tasksArray = [];
    }
  
    for (let index = 0; index < tasksArray.length; index++) {
        var block = tasksArray[index].id;
        $(block).text(tasksArray[index].item);
    }
});

