(function(){
    
    function ReturnData(data){
        $('.username').val() = data.username;
    }
    
   function SendRequesttoServer(){
        
        $.post('/profile', localStorage.token)
        .done(function(data){
            console.log(data);
        })
    }
    
   
})();