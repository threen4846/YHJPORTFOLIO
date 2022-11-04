$(function () {
    $('#header .nav_list li').eq(0).addClass('on');
    $('#q_mn .nav li').eq(0).addClass('on2');
    //nav 호버
    $('#header .nav_list li').hover(
        function () {
            $(this).addClass('on');
        },
        function () {
            $(this).removeClass('on');
        }
    )

    //nav li 클릭 시 스크롤이동
    const quickmenu = $('#q_mn .nav li');
    const menu = $('#header .nav_list li');
    const contents = $('#wrap > section');

    menu.click(function (e) {
        e.preventDefault();
        let i = $(this).index();
        let section = $(contents).eq(i);

        let tg = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tg });
    });

    //스크롤의 움직임에 따른 nav li변화
    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        contents.each(function () {
            let tg = $(this);
            let i = tg.index();
            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
                quickmenu.removeClass('on2');
                quickmenu.eq(i).addClass('on2');
            }
        })
    });

    //스크롤의 움직임에 따른 q_mn의 움직임
    $(window).scroll(function () {
        const windowTop = $(window).scrollTop() + 200;
        $('#q_mn').stop().animate({ top: windowTop + 'px' });
    });

    //q_mn 호버

    $('#q_mn .nav li').hover(
        function () {
            $(this).addClass('on2')
        },
        function () {
            $(this).removeClass('on2')
        }
    );

    quickmenu.click(function (e) {
        e.preventDefault();
        let i = $(this).index();
        let section = $(contents).eq(i);

        let tg = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tg });
    });
});