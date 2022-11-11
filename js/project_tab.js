$(function(){
    $('#project_h .project_h_list li').eq(0).addClass('on');

    $('#project_h .project_h_list li').hover(
        function(){
            $(this).addClass('on2');
        },
        function(){
            $(this).removeClass('on2');
        }
    )

    $('#project_h li').click(function(){
        var i = $(this).index()

        $('#project_h li').removeClass('on')
        $(this).addClass('on')

        move(i)
    })

    function move(n){
        var pos = (-1500) * n + 'px' 
        $('#project_b .pb').stop().animate({left: pos}, 500)
    }
});