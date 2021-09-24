var dayDisplayEl = $('#currentDay');
var hourNineEl = $('#nineAM');
var currentHour = moment().format('hA');

var saveBtn = $('#saveIconTen');


//code to display time under jumbotron
function dayDisplay() {
    var currentDay = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(currentDay);
}
setInterval(dayDisplay, 1000);

// function hourDisplay() {
console.log(currentHour);
// }
// setInterval(hourDisplay);


// if (dayDisplayEl == '5PM') {

// }