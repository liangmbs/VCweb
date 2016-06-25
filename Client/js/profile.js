(function(){
    
    function ReturnData(data){
        $('#username').val(data.username);
    }
    
   function SendRequesttoServer(){
        
        $.post('/profile', localStorage)
        .done(function(data){
            console.log(data);        
            ReturnData(data);
        })
    }
    
    SendRequesttoServer();
   
})();