$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $(".scrol").show();
    } else $(".scrol").hide();
  });
  $(".scrol").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});
