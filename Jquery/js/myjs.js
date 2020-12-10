$(document).ready(function () {
    $("#noShow").on("click",function () {
        $("#imgPic").hide();
    });
    $("#show1").on("click",function () {
        $("#imgPic").show();
    });
    $("#add1").on("click",function () {
        $("#nav2").append("<li>童装</li>");
    });
    $("#del1").on("click",function () {
        $("#del1").remove();
    })
});