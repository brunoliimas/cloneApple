$(document).ready(function () {
   $(".hamburger").click(function () {
      $(this).toggleClass("hamburger-active")
      $(".nav-list-mobile").toggleClass("active")
   })
})