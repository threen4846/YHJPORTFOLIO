$(function(){
    $('#project_b > div').hide();
    $('#project_b > div').eq(0).show();
    $('#project_h .project_h_list li').eq(0).addClass('on');

    $('#project_h .project_h_list li').hover(
        function(){
            $(this).addClass('on2');
        },
        function(){
            $(this).removeClass('on2');
        }
    )

    $('#project_h .project_h_list li').click(function(){
        var i = $(this).index();

        $('#project_b > div').hide();
        $('#project_b > div').eq(i).show();

        $('#project_h .project_h_list li').removeClass('on');
        $(this).addClass('on');
    });
});