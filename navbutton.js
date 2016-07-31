// JavaScript File
window.globalVar = "This is global!";
$( document ).ready(function() {
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
            }
        });
    });
});