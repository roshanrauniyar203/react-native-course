$(document).ready(function () {
  $("#hideBtn").click(function () {
    $("#mainBox").hide(800);
  });

  $("#showBtn").click(function () {
    $("#mainBox").show(800);
  });

  $("#fadeBtn").click(function () {
    $("#mainBox").fadeToggle(1000);
  });

  $("#slideBtn").click(function () {
    $("#mainBox").slideToggle(1000);
  });

  $("#animateBtn").click(function () {
    $("#mainBox")
      .animate({ marginLeft: "50px", opacity: 0.5 }, 1000)
      .animate({ marginLeft: "0px", opacity: 1 }, 1000);
  });

  $("#stopBtn").click(function () {
    $("#mainBox").stop();
  });

  $("#toggleBtn").click(function () {
    $("#mainBox").toggle(700);
  });

  $("#chainBtn").click(function () {
    $("h1").slideUp(600).slideDown(600).fadeOut(600).fadeIn(600);
  });
});
