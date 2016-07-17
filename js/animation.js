$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() > 500) {
            $('.move1').removeClass('offThePage').addClass('bounceInLeft');
            $('.move2').removeClass('offThePage').addClass('bounceInRight');
        }
    });
});