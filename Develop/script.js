var timeDisplayEl = $('#currentDay');


//code to display time under jumbotron
function timeDisplay() {
    var currentTime = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(currentTime);
}

setInterval(timeDisplay, 1000);