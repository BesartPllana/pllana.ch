function validateRequest() {
  $("#contactform").on("submit", function(e) {
    e.preventDefault();
    var valid;
    valid = validateInputs();
    if (valid) {
      //spinner button information (submit process)
      $('#submit').html('<i class="fa fa-spinner fa-pulse"></i> Processing').attr("disabled", true);
      jQuery.ajax({
        url: "contactform/process.php",
        data: 'name=' + $("#name").val() +
        '&email=' + $("#email").val() +
        '&message=' + $('#message').val(),
        type: "POST",
        success: function(userinfo) {
          $('#submit').html('<i class="fa fa-check" aria-hidden="true"></i>' + userinfo); // check button information (successfully submit)
          // document.getElementById(document.forms[0].id).reset(); //clear all fields after sending Message
          $("#contactform")[0].reset();
          setTimeout(function(){
            $("#submit").html('Send Message').attr("disabled", false);
            // $('#submit').html('Send Message');
          }, 3000); //hide button output message after 3 seconds and enable button click
        },
        error: function() {
          $("#submit").val("Server Error");
        }
      });
    }
  });
}

function validateInputs() {
  var valid = true;
  if (!$("#name").val()) {
    $("#name").val("required").css('border', '2px solid Tomato');
    setTimeout(function(){$("#name").val("").reset();}, 2000);
    valid = false;
  }
  if (!$("#email").val()) {
    $("#email").val("required").css('border', '2px solid Tomato');
    setTimeout(function(){$("#email").val("").reset();}, 2000);
    valid = false;
  }
  if (!$("#email").val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    $("#email").css('border', '2px solid Tomato');
    setTimeout(function(){$("#email").css('border', '');}, 2000);
    valid = false;
  }
  if (!$("#message").val()) {
    $("#message").html("Please fill in all fields.").css('border', '2px solid Tomato');
    setTimeout(function(){$("#message").html("").reset();}, 2000);
    valid = false;
  }
  return valid;
}
