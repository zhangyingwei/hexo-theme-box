$(window).scroll(function () {
    if ($(window).scrollTop() < 200) {
      $(".houter").fadeIn(500);
    }
    else {
      $(".houter").fadeOut(500);
    }
  });