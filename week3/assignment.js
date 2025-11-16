
document.querySelector(".ham-btn").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.add("open");
});
document.querySelector(".exit-btn").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.remove("open");
});

document.addEventListener("click", function(event){
  let sidebar = document.querySelector(".sidebar");
  let btn = document.querySelector(".ham-btn");

  if(!sidebar.contains(event.target) && !btn.contains(event.target)){
    sidebar.classList.remove("open");
  }
});


$(document).ready(function(){

  $(".hero-btn").click(function(){
      $("html, body").animate({
          scrollTop: $(".features").offset().top
      }, 600);
  });

});

