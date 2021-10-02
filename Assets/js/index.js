// var dayDisplayEl = $('#currentDay');
// var hourNineEl = $('#nineAM');
// var currentHour = moment().format('hA');
// var apptNineEl = $('#apptInfoNine');
// var apptTenEl = $('#apptInfoTen');

// var saveBtn = $('#saveIconTen');


// //code to display time under jumbotron
// function dayDisplay() {
//     var currentDay = moment().format('dddd, MMMM Do');
//     dayDisplayEl.text(currentDay);
// }
// setInterval(dayDisplay, 1000);

// // function hourDisplay() {
// console.log(currentHour);
// // }
// // setInterval(hourDisplay);


// // if (dayDisplayEl == '5PM') {

// // }

// // function handleFormSubmit(event) {
// //     // Prevent the default behavior
// //     event.preventDefault();
  
// //     console.log('First Name:', firstNameEl.val());
// //     console.log('Last Name:', lastNameEl.val());
// //     localStorage.setItem(apptNineEl)
  
// //     // Select all checked options
// //     var checkedEl = $('input:checked');
// //     var selected = [];
  
// //     // Loop through checked options to store in array
// //     $.each(checkedEl, function () {
// //       selected.push($(this).val());
// //     });
// //     console.log('Toppings: ', selected.join(', '));
  
// //     // Clear input fields
// //     $('input[type="text"]').val('');
// //     $('input[type="email"]').val('');
// //     $('input[type="checkbox"]').prop('checked', false);
// //   }
  
// //   // Submit event on the form
// //   formEl.on('submit', handleFormSubmit);

//   var disableInputs = function() {
//     sessionStorage.disableInputs = 'true';
//     document.$('firstname').disabled = true;
//     document.$('lastname').disabled = true;

//   };
//   if (sessionStorage.disableInputs === 'true') disableInputs();
//   document.$('saveBtn').onclick = disableInputs;