$(".user").click(function(){
  $("#home").toggleClass('active');
  $("h1").toggleClass('active');
  $(".user-avatar").toggleClass('active');
  $("span").toggleClass('active');

  sessionStorage.setItem("selectedProfile", "yes");
});

if (sessionStorage.getItem("selectedProfile") === "yes") {
  $('#home').css('display', 'none');
}
