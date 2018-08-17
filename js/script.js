$(document).ready(function () {
    $(window).resize(function () {
        responsiveNav();
    });
    responsiveNav();
});

function toggleNav() {
    $('.nav-links').slideToggle(400);
    $('.nav-icon').toggleClass('open');
}

function responsiveNav() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1000) {
        $('.nav-links').css('display', 'none');
        $('.topnav').addClass('mobile');
    } else {
        $('.nav-links').css('display', 'block');
        $('.topnav').removeClass('mobile');
        $('.nav-icon').removeClass('open');
    }
}