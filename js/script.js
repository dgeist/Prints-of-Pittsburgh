$(document).ready(function () {
    $(window).resize(function () {
        responsiveNav();
    });
    responsiveNav();
    testimonials();
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

function testimonials() {
    $('.testimonial-button:not(.selected)').click(function () {
        $('.testimonial-button').removeClass('selected');
        $(this).addClass('selected');

        let index = $(this).attr('id').replace('button', '');

        $('.testimonial-container').removeClass('selected');
        $('#testimonial' + index).addClass('selected');
    });
}