$('#currentDay').html(moment().format('LLLL'));

$(document).ready(function() { 
    function timeBlock() {
        var hour = moment().hours();
        console.log(hour);
    
        $(".block").each(function () {
            var currentHr = parseInt($(this).attr("id"));
            console.log(currentHr);
    
            if (currentHr < hour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (currentHr == hour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            console.log(this);
        
        })
    };
})