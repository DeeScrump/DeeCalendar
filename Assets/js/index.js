var dayDisplayEl = $('#currentDay');
var currentHour = moment().format('HH');

var hourNineEl = moment($('#nineAM .hour').text(), ['hA']).format('HH');
var hourTenEl = moment($('#tenAM .hour').text(), ['hA']).format('HH');
var hourElevenEl = moment($('#elevenAM .hour').text(), ['hA']).format('HH');
var hourTwelveEl = moment($('#twelvePM .hour').text(), ['hA']).format('HH');
var hourOneEl = moment($('#onePM .hour').text(), ['hA']).format('HH');
var hourTwoEl = moment($('#twoPM .hour').text(), ['hA']).format('HH');
var hourThreeEl = moment($('#threePM .hour').text(), ['hA']).format('HH');
var hourFourEl = moment($('#fourPM .hour').text(), ['hA']).format('HH');
var hourFiveEl = moment($('#fivePM .hour').text(), ['hA']).format('HH');
var timeTable = [hourNineEl, hourTenEl, hourElevenEl, hourTwelveEl, hourOneEl, hourTwoEl, hourThreeEl, hourFourEl, hourFiveEl];


//code to display time under jumbotron
function dayDisplay() {
    var currentDay = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(currentDay);
}
setInterval(dayDisplay, 1000);

// Comares current hour with hour on schedule to determine past, present, future
$('.time-block').each(function(i) {
  if (timeTable[i] < currentHour) {
    $(this).addClass('past');
  } else if (timeTable[i] === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});

$('#confirmSave').show();

// Show then hide the saved confirmation
function showHide () {
  $('#confirmSave').css('visibility', 'visible');
  setTimeout(function () {
    $('#confirmSave').css('visibility', 'hidden');
  }, 10000);
}


$('.btn').click(showHide);



// function saveAppt() {
//   $('btn').on('click', function () {

//   })
// }

