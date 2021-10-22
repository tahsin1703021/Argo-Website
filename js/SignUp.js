
// Send OTP and Confirm mail/mobile
document.querySelector("#otpButton").addEventListener("click", function (event) {
    x = document.getElementById("confirmOTP");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    event.preventDefault();
  }, false);


  //Confirm Password Validations
  $('#password, #confirmPassword').on('keyup', function () {
    if (($('#password').val() == $('#confirmPassword').val()) && $('#password').val() && $('#confirmPassword').val()) {
      $('#crossMark').css('display', 'none');
      $('#checkMark').css('display', 'block');
    } else if($('#password').val() != $('#confirmPassword').val()) {
      $('#checkMark').css('display', 'none');
      $('#crossMark').css('display', 'block');
    } else {
      $('#checkMark').css('display', 'none');
      $('#crossMark').css('display', 'none');
    }
  });