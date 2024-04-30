$(document).ready(function(){
// Preloader
$(window).on('load', function() {
    $('#status').fadeOut();

    // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow', function() {

    // will fade out the whole div that covers the website
    $('body').delay(350).css('overflow','visible');
});
});
})