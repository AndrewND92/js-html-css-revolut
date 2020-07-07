$(document).ready(function() {

$('.p-dropdown').mouseenter(function() {
  $(this).children('.dropdown').toggle();
})
$('.p-dropdown').mouseleave(function(){
  $(this).children('.dropdown').hide();
})

});
