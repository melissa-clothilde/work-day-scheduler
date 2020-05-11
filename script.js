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
dayDiv.text(m.format("dddd" + ", " + "MMM Mo"));


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
    var textInput = $(textboxId);
    textInput.val();
    tasksArray.push(textInput.val());
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
});

var tasksArray = [];

//when user refreshes the page, the saved events persist
//ANOTHER attempt...
$(document).ready(function listTasks() {
    var taskArray = localStorage.getItem(JSON.parse('tasks'));
    if (!task) {
        taskArray = [];
    }
    //loop through the values in local storage and display them on the page
    tasksArray.each(function (index) {
        var block = localStorage.getItem(index);
        if (block + index === $('#block' + index)) {
            $('#block' + index).val(block);
        }
    })

});

//   //loop through the values in local storage and display them on the page
//   tasksArray.each(function (index) {
//     var block = localStorage.getItem(index);
//     $('#block' + index).val(block);
// });
// };

