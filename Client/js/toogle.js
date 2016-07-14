var minheight = 350;
var maxheight = 800;
var time = 1000;
var timer = null;
var toggled = false;

window.onload = function() {
    var controler = document.getElementById('slide');
    var slider = document.getElementById('Container');
    slider.style.height = minheight + 'px'; 
    controler.onclick = function() {  
        clearInterval(timer);
        var instanceheight = parseInt(slider.style.height); 
        var init = (new Date()).getTime(); 
        var height = (toggled = !toggled) ? maxheight: minheight; 

        var disp = height - parseInt(slider.style.height);
        timer = setInterval(function() {
            var instance = (new Date()).getTime() - init; 
            if(instance <= time ) { 
                var pos = instanceheight + Math.floor(disp * instance / time);
                slider.style.height =  pos + 'px';
            }else {
                slider.style.height = height + 'px'; 
                clearInterval(timer);
            }
        },1);
    };
};