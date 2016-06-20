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
   .done(function(return_info) {
     if(return_info.succeed){
       //TODO
         localStorage.setItem("token", return_info.token);
         console.log(return_info);
     }else {
       //TODO
        console.log(return_info);

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
