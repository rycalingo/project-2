$(document).ready(function () {
  $('input[type=submit]').click(function () {
    $('input[type=submit]').toggleClass('red');
  });
//getting information to put in database
  var NameInput = $("#Name").val().trim();
  var EmailInput = $("#Email").val().trim();
  var PhoneInput = $("#Phone").val().trim();
  var NotesInput = $("#Notes").val().trim();
  var bestwayreachselection =$("#PhoneorEmail");
  var bestdays = $("#Day");
  var besttimes =  $("#Time");
//Getting initial list of appointment
  getappointment();

    function formsubmission(event) {
      event.preventDefault();
      //Don't do anything if the name fields hasn't been filled
      if (!NameInput.val().trim()){
        return;
      }
    }

    function addappointment(appointmentdata) {
      $.post("/make_an_appointment", appointmentdata)
      .then(getappointment);
    }

    function getappointment() {
      $.get("/make_an_appointment", function(data){
        var showappointment = [];
        for (var i = 0; i <data.length; i++){
            //add to appointment page of doctors
        }
      })
    }
  });

