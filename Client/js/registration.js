$('#registation_form').submit(function(event){

  data = {};
  data.email = $('#reg_email').val();
  data.username = $('#reg_username').val();
  data.password = $('#reg_password').val();
  data.fullName = $('#reg_fullname').val();
 

  $.post('/registration', data)
    .done(function(data) {
      alert("Returned!");
    })

  return false;
})
