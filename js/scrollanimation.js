$(function () {
    var scene00 = true;
    var scene01 = true;
    var scene02 = true;
    var scene03 = true;
    var scene04 = true;
    var scene05 = true;



    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 900 && scene00 == true) {
            scene00 = false;
            $('#header').hide();
        } else if (sct < 850 && scene00 == false) {
            scene00 = true;
            $('#header').show();
        };

        // if (sct > 700 && scene01 == true) {
        //     scene01 = false;
            
        // } else if (sct < 500 && scene01 == false) {
        //     scene01 = true;
            
        // };

        if (sct > 1700 && scene02 == true) {
            scene02 = false;
            $('#percent .percent01 .percentbox>div').stop().delay(0).animate({left: 0}, 1500)
            $('#percent .percent02 .percentbox>div').stop().delay(500).animate({left: 0}, 1500)
            $('#percent .percent03 .percentbox>div').stop().delay(1000).animate({left: 0}, 1500)
            $('#percent .percent04 .percentbox>div').stop().delay(1500).animate({left: 0}, 1500)
            $('#percent .percent05 .percentbox>div').stop().delay(2000).animate({left: 0}, 1500)
        } else if (sct < 1500 && scene02 == false) {
            scene02 = true;
            $('#percent .percent01 .percentbox>div').stop().animate({left: '-300px'})
            $('#percent .percent02 .percentbox>div').stop().animate({left: '-150px'})
            $('#percent .percent03 .percentbox>div').stop().animate({left: '-250px'})
            $('#percent .percent04 .percentbox>div').stop().animate({left: '-100px'})
            $('#percent .percent05 .percentbox>div').stop().animate({left: '-50px'})
        };

        // if (sct > 2700 && scene03 == true) {
        //     scene03 = false;
            
        // } else if (sct < 2500 && scene03 == false) {
        //     scene03 = true;
            
        // };
    });
});