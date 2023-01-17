$(function () {
  $(".content__project__in__h_list li").eq(0).addClass("on");

  $(".content__project__in__h_list li").hover(
    function () {
      $(this).addClass("on2");
    },
    function () {
      $(this).removeClass("on2");
    }
  );

  $(".content__project__in__h_list li").click(function () {
    var i = $(this).index();

    $(".content__project__in__h_list li").removeClass("on");
    $(this).addClass("on");

    move(i);
  });

  function move(n) {
    var pos = -1000 * n + "px";
    $(".content__project__in__b__big").stop().animate({ left: pos }, 500);
  }
});
