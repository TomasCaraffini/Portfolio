$(document).ready(function() {
   
    $('header').append('<div class="overlay"></div>');
    $('h1').addClass('titular');
    $('#intro p').before('<div class="line"></div>')
    $('#nudo').append('<div class="overlay"></div>')
    const divisor = $('<div class="divisor"></div>').html('<a>Tomas Caraffini</a>').css('color','white')
    $('#fin').after(divisor)

});