var dayDisplayEl = $('#currentDay');
var currentHour = moment().format('hA');

var hourNineEl = $('#nineAM');
var hourTenEl = $('#tenAM');
var hourElevenEl = $('#elevenAM');
var hourTwelveEl = $('#twelvePM');
var hourOneEl = $('#onePM');
var hourTwoEl = $('#twoPM');
var hourThreeEl = $('#threePM');
var hourFourEl = $('#fourPM');
var hourFiveEl = $('#fivePM');


//code to display time under jumbotron
function dayDisplay() {
    var currentDay = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(currentDay);
}
setInterval(dayDisplay, 1000);

// function pastHourDisplay() {
//   if (currentHour > )
console.log(currentHour);
console.log($('#nineAM .hour');
