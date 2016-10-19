$(function() {

  $(".card").click(function() {
    $(this).find(".title").toggle();
    $(this).find(".description").toggle();
    $(this).toggleClass("frontcard");
  });
});
