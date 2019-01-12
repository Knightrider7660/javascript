//owlCarousel
$('.slider').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay:true,
	smartSpeed:700,
    autoplayTimeout:4000,
    dots:true
});

$('.testimonial_slider').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    smartSpeed:700,
    autoplayTimeout:4000,
    dots:false
});
//owlCarousel

//wow js
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
);
wow.init();
//wow js

// Sticky Nav
$(function(){

    createSticky($("#main_navbar"));

});

function createSticky(sticky) {

    if (typeof sticky !== "undefined") {

        var	pos = sticky.offset().top,
            win = $(window);

        win.on("scroll", function() {
            win.scrollTop() >= pos ? sticky.addClass("fixed_nav") : sticky.removeClass("fixed_nav");
        });
    }
}

// Sticky Nav