$(function () {
    $('#main_b p').hide();
    $('#header').hide();
    $('#header').css({ height: 0 });
    $('#q_mn').hide();
    $('#q_mn').css({ height: 0 });

    $('#main_b p')
        .show()
        .css({ opacity: 0 })
        .animate({ right: '-5%', opacity: 1 }, 1500);

    $('#header').show().animate({ height: '100px' }, 1500);

    $('#q_mn')
        .show()
        .css({ opacity: 0 })
        .animate({ height: '300px', opacity: 1 }, 1500);
});