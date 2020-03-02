$(function (){

    "use strict";

    $("body, html").niceScroll({
        cursorcolor:"#ffbd39",
        cursorborder:"#ffbd39",
      });
    
    
      new WOW().init();
    
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:250,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('body').css('paddingTop',$('nav').innerHeight()+20);


    // toggle navbar 

    $('.show-bar i').click(function() {
        $('.bar').slideToggle(500);
    });

    // toggle more services

    $('.btn-serv').click(function(e) {
        e.preventDefault();
        $('.more-serv').slideToggle(500);
    });
    


    $("nav a").click(function(e) {
    
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 5
        },1000);
    });

    // scroll to section

    $('nav li a').click(function(){
        $(this).addClass('selction').parent().siblings().find('a').removeClass('selction');
    });



    $(window).scroll(function(){
        $('.block').each(function(){

            // put class selction where i'm

            if ($(window).scrollTop() > $(this).offset().top ) {
                var blockId = $(this).attr('id');
                $('nav li a').removeClass('selction');
                $('nav li a[data-scroll="' + blockId +'"]').addClass('selction');
            }


        });

        // scroll To Top

        var scrollTop = $('.scroll-top');

        if ($(window).scrollTop() >= 1000) {
            if (scrollTop.is(':hidden')) {

                scrollTop.fadeIn(500);
            }

        }else {
            scrollTop.fadeOut(500);
        }
    });


    // click to scroll to top

    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });

});