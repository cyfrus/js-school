$(document).ready(function() {
  var fields = [];
  var progress = 0;
  var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var PHONE_REGEX = /(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})/;
  var fname_error = false;
  var lname_error = false;
  var phone_error = false;
  var email_error = false;
  var password_error = false;
  var industry_error = false;

  $(".fname, .lname").on("input", function() {
    if ($(this).val().length > 0) {
      increaseProgress(this);
      
      if (fname_error && this.id === "fname") {
        $(".fname_error").remove();
        fname_error = false;
      }
      if (lname_error && this.id === "lname") {
        $(".lname_error").remove();
        lname_error = false;
      }
    } else {
      decreaseProgress(this);
     
      if (!fname_error && this.id === "fname") {
        $(this).after('<div class="fname_error">The value is required</div>');
        fname_error = true;
      }
      if (!lname_error && this.id === "lname") {
        $(this).after('<div class="fname_error">The value is required</div>');
      }
    }
  });

  $(".email").on("input", function() {
    if (validateEmail($(".email").val())) {
      increaseProgress(this);
      if (email_error) {
        $(".email_error").remove();
        email_error = false;
      }
    } else {
      decreaseProgress(this);
      if (!email_error) {
        $(this).after(
          '<div class="email_error">This value should be valid email.</div>'
        );
        email_error = true;
      }
    }
  });

  $(".password").on({
    focus: validatePassword,
    input: validatePassword
  });

  $(".phone").on({
    input: validatePhone,
    focus: validatePhone
  });

  $(".industry").on({
    change: validateIndustry,
    focus: validateIndustry
  });

  $("form").submit(formValidation);
  function formValidation() {
    if (progress === 100) {
      return true;
    } else {
      return false;
    }
  }
  function checkFields() {}

  function validateIndustry() {
    if ($(".industry").val() === "Industry" && !industry_error) {
      $(this).after(
        '<div class="industry_error"> Please select industry </div>'
      );
      industry_error = true;
    } else if ($(".industry").val() !== "Industry" && industry_error) {
      $(".industry_error").remove();
      industry_error = false;
    }
  }

  function validatePassword() {
    if ($(this).val().length < 6) {
      if (!password_error) {
        $(this).after(
          '<div class="password_error">Password is too short it should have 6 characters or more.</div>'
        );
        password_error = true;
        decreaseProgress(this);
      }
    } else {
      if (password_error) {
        $(".password_error").remove();
        password_error = false;
      }
      increaseProgress(this);
    }
  }

  function validatePhone() {
    if (validatePhoneInput($(this).val())) {
      if (phone_error) {
        $(".phone_error").remove();
        phone_error = false;
      }
      increaseProgress(this);
    } else {
      if (!phone_error) {
        decreaseProgress(this);
        $(".phone").after(
          '<div class="phone_error">This value is required.</div>'
        );
        phone_error = true;
      }
    }
  }
  function validatePhoneInput(phone) {
    return PHONE_REGEX.test(phone);
  }

  function validateEmail(email) {
    return EMAIL_REGEX.test(email.toLowerCase());
  }

  function increaseProgress(field) {
    var exists = fields.find(function(element) {
      return element === field;
    });
    
    if (exists === undefined) {
      fields.push(field);
      progress = 20 * fields.length;
      $(field).css({
        backgroundImage:
          $(field).css("background-image") + ", " + "url('./images/checkz.png')",
        backgroundPosition:
          $(field).css("background-position") + ", " + "95% 50%",
        backgroundSize: "auto, contain"
      });
    }

    $(".progress-bar").css({
      width: progress + "%",
      height: "5px"
    });
    $(".progress_percentage").text(progress + "%  complete");
  }

  function decreaseProgress(field) {
    var index = fields.indexOf(field);
    if (index > -1) {
      fields.splice(index, 1);
      progress = 20 * fields.length;
      $(field).css({
        backgroundImage:
          $(field).css({
            backgroundImage: "url('./images/personIcon.png')"
          })
      });
    }
    $(".progress-bar").css({
      width: progress + "%",
      height: "5px"
    });
    $(".progress_percentage").text(progress + "%  complete");
  }
});
