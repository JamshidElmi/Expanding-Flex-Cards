/*
  @project Expanding Flex Cards
  @author: Jamshid Elmi
  @created: 2022-03-25 19:13:18
  @modified: 2022-03-25 19:13:18
  @tutorial: https://youtu.be/pvjNbaV0Keo
*/
$(".card").click(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
});