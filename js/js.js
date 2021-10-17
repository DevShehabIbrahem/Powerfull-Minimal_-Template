$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $(".test").show();
    } else $(".test").hide();
  });
  $(".test").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});
