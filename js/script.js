$(document).ready(function () {
    $(window).resize(function () {
        responsiveNav();
    });
    responsiveNav();
    testimonialCarousel();
    bindNavClickEvents();

    let scrollTo = getQueryStringValue('scrollTo');
    if (scrollTo !== "" & scrollTo !== undefined) {
        scrollToElement($('#' + scrollTo));
    }
});

function sendContactEmail(event) {
    //event.preventDefault();
    let templateParams = {
        "name": $('#contactName').val(),
        "email": $('#contactEmail').val(),
        "subject": $('#contactSubject').val(),
        "body": $('#contactMessage').val()
    };
    emailjs.send("gmail", "template_r4fUQdsa", templateParams);
}

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
        scrollToElement($(id));
    });
}

function scrollToElement($scrollElem) {
    let scrollPos = $scrollElem.offset().top;
    let navHeight = $('.header-container').height();
    scrollPos = scrollPos - navHeight;
    $('html, body').animate({
        scrollTop: scrollPos
    }, 500);
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}  
