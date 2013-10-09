$(document).ready(function() {


$("form").hide();


$('.button-text').click(function() {
    $("form").toggle();
    $('.button-text').toggle();
       });


$('.submit').click(function() {
       var name = $(".name").val();
       var bio = $(".bio").val();
       var books = $(".favoriteBooks").val();
       var favJS = $(".favJS").val();
    		$(".container").append(name + " \n" + bio + " \n" + books + " \n" + favJS);
    		return false;
       });





});