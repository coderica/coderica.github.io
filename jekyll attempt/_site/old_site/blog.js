$("document").ready(function($){
    var nav = $('#main-menu-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 415) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});