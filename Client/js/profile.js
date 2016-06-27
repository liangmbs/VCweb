(function(){
    /*
    function ReturnData(data){
        $('#username').val(data.username);
    }
    */
    
   function SendRequesttoServer(){
<<<<<<< HEAD
        $.post('/profile', localStorage.token)
=======
        
        $.post('/profile', localStorage)
>>>>>>> 8fc1c15dfd99f923b12ff0bab9dd81cabb8b0fc8
        .done(function(data){
            console.log(data);        
            ReturnData(data);
        })
    }
    
    SendRequesttoServer();
   
})();