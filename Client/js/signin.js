(function(){

$('#signin-error-box').hide();

function checkEmailNotEmpty(email){
    if(email === ""){
      $('#signin-error-box').html('email cannot be empty');
      $('#signin-error-box').show();
      return false;
      }
     return true;
}

function validateForm(data){
  var valid = true;
  valid = valid && checkEmailNotEmpty(data.email);
  return valid;
}



function getDataFromForm(){
    data = {};
    data.email = $('#signin_email').val();
    data.password = $('#signin_password').val();
    return data;
}

function doSignin(data){
  $.post('/signin',data)
   .done(function(data) {
     if(data.succeed){
       //TODO
     }else {
       //TODO
     }
   });
}

$('#signin_form').submit(function(event){

  data = getDataFromForm();

  var valid = validateForm(data);

  if (valid){
    doSignin(data);
  }
  return false;
})

})();
