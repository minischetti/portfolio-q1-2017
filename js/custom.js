$(".user").click(function(){
  $("#home, h1, .user-avatar, span").addClass('active');
  $('.achievement, .skill, .star').addClass('animate');
  $('body').removeClass('noScroll');


  sessionStorage.setItem("selectedProfile", "yes");
});

//Stop iOS devices from scrolling the page when the menu is open
$(function stopScroll(){
var fixed = document.getElementById('home');
fixed.addEventListener('touchmove', function(e) {
        e.preventDefault();
}, false);
});

$(function checkProfile(){
  if (sessionStorage.getItem("selectedProfile") === "yes") {
    $('#home').css('display', 'none');
    $('.achievement, .skill, .star').addClass('animate');
  }
  else {
    $('body').addClass('noScroll');
  }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 80) { // this refers to window
        $('nav').addClass('scroll')
        $('.avatar').addClass('hidden')
    }
    else {
      $('nav').removeClass('scroll')
      $('nav').removeClass('hidden')
    }
});
