/** Sticky Navigation*/
let nav = $('.nav-area');

$(window).scroll(function () {
    let oTop = 600;
    if ($(window).scrollTop() > oTop) {
        nav.addClass('stick');
    } else {
        nav.removeClass('stick');
    }
});

/** Counter addition */
let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate(
            {
                Counter: $(this).text()
            },
            {
                duration: 5000,
                easing: "swing",
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            }
        );
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".sata").offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".number");
    }
});

/** window load functions */
$(window).on('load',function(){
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);

});

/** smooth scroll*/
$('#main-menu li a').on('click', function(event) {
    event.preventDefault();
    var anchor = $(this).attr('href');
    var top = $(anchor).offset().top;
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});

/** bottom to top */
$(document).on('click','.go-top',function(){
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
});
