(function(){
  
$('#registration-error-box').hide();


function checkUserNameValid(username) {
  var re = /^[a-zA-Z][a-zA-Z0-9_]+$/
  var match = re.test(username);
  if(!match) {
    $('#registration-error-box').html('Username contains invalid charactor.');
    $('#registration-error-box').show();
    return false;
  }
  return true;
}

function checkUserNameNotEmpty(username) {
  if(username === "") {
    $('#registration-error-box').html('Username cannot be empty');
    $('#registration-error-box').show();
    return false;
  }
  return true;
}

function doRegistration(data) {
  $.post('/registration', data)
    .done(function(data) {
      if(data.succeed) {
        // TODO
      } else {
        $('#registration-error-box').html('Username or email already exist.');
        $('#registration-error-box').show();
      }
    });
}

function getDataFromForm() {
  data = {};
  data.email = $('#reg_email').val();
  data.username = $('#reg_username').val();
  data.password = $('#reg_password').val();
  data.fullName = $('#reg_fullname').val();


  $.post('/registration', data)
    .done(function(data) {
      alert("Returned!");
    })
  return data;
}

function validateForm(data) {
  var valid = true;
  valid = valid && checkUserNameNotEmpty(data.username);
  valid = valid && checkUserNameValid(data.username);
  return valid
}

$('#registation_form').submit(function(event){
  data = getDataFromForm();

  var valid = validateForm(data);

  if (valid) {
    doRegistration(data);
  }

  return false;
})

})();
