document.querySelector(".ham-btn").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("open");
});

document.querySelector(".exit-btn").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("open");
});

document.addEventListener("click", function (event) {
  let sidebar = document.querySelector(".sidebar");
  let button = document.querySelector(".ham-btn");

  if (!sidebar.contains(event.target) && !button.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});

$(document).ready(function () {
  $(".dropdown-btn").click(function (e) {
    e.preventDefault();

    $(this).next(".dropdown-content").slideToggle(300);

    $(this).toggleClass("active");
  });
});
