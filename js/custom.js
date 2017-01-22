$(".user").click(function(){
  $("#home, h1, .user-avatar, span").addClass('active');
  $('.achievement, .skill, .star').addClass('animate');

  sessionStorage.setItem("selectedProfile", "yes");
});

if (sessionStorage.getItem("selectedProfile") === "yes") {
  $('#home').css('display', 'none');
  $('.achievement, .skill, .star').addClass('animate');
}
/*
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) { // this refers to window
        $('nav').addClass('scroll')
    }
    else {
      $('nav').removeClass('scroll')
    }
});
*/
