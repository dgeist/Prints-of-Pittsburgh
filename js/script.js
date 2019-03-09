﻿$(document).ready(function () {
    $(window).resize(function () {
        responsiveNav();
    });
    responsiveNav();
    testimonialCarousel();
    bindNavClickEvents();
});

function toggleNav() {
    $('.nav-links').slideToggle(400);
    $('.nav-icon').toggleClass('open');
}

function responsiveNav() {
    if (window.innerWidth <= 1000) {
        $('.nav-links').css('display', 'none');
        $('.topnav').addClass('mobile');
    } else {
        $('.nav-links').css('display', 'block');
        $('.topnav').removeClass('mobile');
        $('.nav-icon').removeClass('open');
    }
}

function testimonialCarousel() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: true
    });
}

function bindNavClickEvents() {
    $('.nav-scroll-on-click').click(function () {
        let id = $(this).attr('scroll-target');
        var scrollElem = $(id);
        var scrollPos = scrollElem.offset().top;
        var navHeight = $('.header-container').height();
        scrollPos = scrollPos - navHeight;
        console.log(scrollPos);
        $('html, body').animate({
            scrollTop: scrollPos
        }, 500);
    });
}
