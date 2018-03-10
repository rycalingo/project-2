
$(document).ready(function(){
    var i = 0;
    if ( i <= 4 ) {

        setInterval(function(){
            var img_n = '#img' + i;
            $(img_n).addClass("FADE");
            i++;
        }, 1000);
    }
});