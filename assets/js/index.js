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

var timeSlot = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

$('#nineAM .textarea').val(localStorage.getItem('nineAM'));
$('#tenAM .textarea').val(localStorage.getItem('tenAM'));
$('#elevenAM .textarea').val(localStorage.getItem('elevenAM'));
$('#twelvePM .textarea').val(localStorage.getItem('twelvePM'));
$('#onePM .textarea').val(localStorage.getItem('onePM'));
$('#twoPM .textarea').val(localStorage.getItem('twoPM'));
$('#threePM .textarea').val(localStorage.getItem('threePM'));
$('#fourPM .textarea').val(localStorage.getItem('fourPM'));
$('#fivePM .textarea').val(localStorage.getItem('fivePM'));


//Code to display time under jumbotron
function dayDisplay() {
    var currentDay = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(currentDay);
}
setInterval(dayDisplay, 1000);

// Compares current hour with hour on schedule to determine past, present, future
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

// Shows then hides the saved confirmation
function showHide () {
  $('#confirmSave').css('visibility', 'visible');
  setTimeout(function () {
    $('#confirmSave').css('visibility', 'hidden');
  }, 3000);
}

// On button clicks, saves to local storage and confirms appointment saved
  $('.btn').click(showHide);
  $('.btn').click(saveLocalStorage);


// Saves the data entry in textarea to local storage
function saveLocalStorage() {
  var apptDeets = $(this).siblings('textarea').val();
  var apptTime =  $(this).parent().attr('id');
  localStorage.setItem(apptTime, apptDeets);
  console.log(apptDeets);
  console.log(apptTime);
}
 


