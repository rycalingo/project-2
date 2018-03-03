
$(document).ready(function(){
    var i;
    if ( i <= 4) {
        setTimeout(function(){
            $('#img' + i);
            i++;
        }, 500);
    }
});