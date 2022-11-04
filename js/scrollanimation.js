$(function () {
    var scene00 = true;
    var scene01 = true;
    var scene02 = true;
    var scene03 = true;
    var scene04 = true;
    var scene05 = true;

    $('#myself .txt').hide();
    $('#myself .pic').hide();
    $('#skill .skill_list li').hide();
    $('#project_box article').hide();

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 1000 && scene00 == true) {
            scene00 = false;
            $('#header').hide();
        } else if (sct < 999 && scene00 == false) {
            scene00 = true;
            $('#header').show();
        };

        if (sct > 700 && scene01 == true) {
            scene01 = false;
            $('#myself .txt').show().stop().css({ opacity: 0 }).animate({ right: '-250px', opacity: 1 }, 1500);
            $('#myself .pic').show().stop().css({ opacity: 0 }).animate({ left: '-250px', opacity: 1 }, 1500);
        } else if (sct < 500 && scene01 == false) {
            scene01 = true;
            $('#myself .txt').stop().animate({ right: '250px', opacity: 0 }, 1500);
            $('#myself .pic').stop().animate({ left: '250px', opacity: 0 }, 1500);
        };

        if (sct > 1700 && scene02 == true) {
            scene02 = false;
            $('#skill .color_box01').stop().delay(0).animate({ top: '0px' }, 2000)
            $('#skill .color_box02').stop().delay(500).animate({ top: '0px' }, 1500)
            $('#skill .color_box03').stop().delay(1000).animate({ top: '0px' }, 1000)
            $('#skill .color_box04').stop().delay(1500).animate({ top: '0px' }, 700)
            $('#skill .skill_list li:nth-child(1)').show().stop().css({ opacity: 0 }).animate({ right: '-70px', opacity: 1 }, 700)
            $('#skill .skill_list li:nth-child(2)').show().stop().css({ opacity: 0 }).animate({ right: '-70px', opacity: 1 }, 1000)
            $('#skill .skill_list li:nth-child(3)').show().stop().css({ opacity: 0 }).animate({ right: '-70px', opacity: 1 }, 1500)
            $('#skill .skill_list li:nth-child(4)').show().stop().css({ opacity: 0 }).animate({ right: '-70px', opacity: 1 }, 2000)
            $('#skill .skill_list li:nth-child(5)').show().stop().css({ opacity: 0 }).animate({ right: '-70px', opacity: 1 }, 2500)
        } else if (sct < 1500 && scene02 == false) {
            scene02 = true;
            $('#skill .color_box01').stop().animate({ top: '-300px' })
            $('#skill .color_box02').stop().animate({ top: '-250px' })
            $('#skill .color_box03').stop().animate({ top: '-150px' })
            $('#skill .color_box04').stop().animate({ top: '-100px' })
            $('#skill .skill_list li').show().stop().animate({ right: '70px', opacity: 0 })
        };

        if (sct > 2700 && scene03 == true) {
            scene03 = false;
            $('#project_box .project01').stop().delay(0).show().css({ opacity: 0 }).animate({ opacity: 1, top: '-100px' }, 1000)
            $('#project_box .project02').stop().delay(500).show().css({ opacity: 0 }).animate({ opacity: 1, top: '-100px' }, 1000)
            $('#project_box .project03').stop().delay(1000).show().css({ opacity: 0 }).animate({ opacity: 1, top: '-100px' }, 1000)
        } else if (sct < 2500 && scene03 == false) {
            scene03 = true;
            $('#project_box article').stop().animate({ opacity: 0, top: '100px' })
        };
    });
});