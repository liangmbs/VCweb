$('#registation_form').submit(function(event){

  data = {};
  data.email = $('#reg_email').val();
  data.username = $('#reg_username').val();
  data.password = $('#reg_password').val();
  data.fullName = $('#reg_fullname').val();
 
 function checkname()
 {

   var username = data.username;
   if(name)
   {
     $.ajax({
       method: "POST";
       url: 'checkdata.js',
       data: {
           username : username,
           },
           success : function (response) {
            $('#name_status').html (response);
            if(response == "OK"{
              return true;
            }
            else
            {
              return false;
            }
           }
     });
   }
   else
   {
     $('#name_status').html("");
     return false;
   }
 }

function checkemail()
{
  var email = data.email;
  if(email)
  {
    $.ajax({
      type: 'POST',
      url: 'checkdata.js',
      data: {
        user_email = email,
        },
        success: function(response){
          $('#email_status').html(response);
          if(response == "OK")
          {
            return true;
          }
          else
            {
              return false;
            }
        }
    });
  }
  else
  {
    $('email_status').html("");
    return false;
  }
}

function checkall()
{
  var namehtml = document.getElementByID("name_status").innerHTML;
  var emailhtml = document.getElementByID("email_status").innerHTML;
    
  if((namehtml && emailhtml) == "OK")
  {
    return true;
  }else{
    return false;
  }
}


  $.post('/registration', data)
    .done(function(data) {
      alert("Returned!");
    })
    .fail(function(data) {
      alert("error");
    });
  

  return false;
})
