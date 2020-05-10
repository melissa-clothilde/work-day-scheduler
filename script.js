var m = moment();
var dayDiv = $('#current-day');
var timeBlock = $('.entry');
var block9Am = $('#block0');
var blockVal = $('#block').val;
var saveBtn = $('.save-button');
var currentTime = m.format('HH');
var time = $('.left');
var activityText = $('#block1');


timeBlock.each(function (index) {
    $(this).attr('data-time', index + 9);
    console.log($(this).attr('data-time'));
});


timeBlock.each(function () {
    if (parseInt($(this).attr('data-time')) === parseInt(currentTime)) {
        $(this).css('background-color', 'red');
    }

    else if (parseInt($(this).attr('data-time')) > parseInt(currentTime)) {
        $(this).css('background-color', 'green');
    }

    else {
        $(this).css('background-color', 'grey');
    }
});

dayDiv.text(m.format("dddd" + ", " + "MMM Mo"));


saveBtn.each(function(index) {
    $(this).attr('data-textboxId', '#block' + index);
})

saveBtn.on("click", function() {
    var textboxId = $(this).attr('data-textboxId');
    console.log(textboxId);
    var textInput = $(textboxId);
    textInput.val();
    taskArray.push(textInput.val());
    localStorage.setItem('taks', JSON.stringify(taskArray));
   
});

var taskArray = [];
