$(document).ready(function () {
    $('.slick2').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.slick2'),
        prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        adaptiveHeight: true,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    });


    let carusel = $('.slick2');
    let owl = $('.owl-carousel');

// Init fancybox
    $().fancybox({
        selector:('.items-product a'),
        animationEffect: "zoom",
        // Duration in ms for open/close animation
        animationDuration: 600,
        transitionEffect: "circular",
        transitionDuration: 700,
        buttons : [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs   : {
            autoStart: true
        },
        protect: true,
        loop: true,
        beforeShow: function (){
            console.log('OPEN');
            carusel.slick('slickPause');
            owl.trigger('stop.owl.autoplay');
        },
        afterClose: function (){
            console.log("CLOSE");
            carusel.slick('slickPlay');
            owl.trigger('play.owl.autoplay');
        }
    });




/* Multi gallery FancyBox */
    /*
$('.items-product').each(function () {
   let item = $(this).find('a');
    $().fancybox({
        selector:$item,
        buttons : [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs   : {
            autoStart: true
        },
        protect: true,
        loop: true,
    });
})
*/
$('.clickyn').on("click", function(e) {
    e.preventDefault();
    $.fancybox.open([
        {
            src  : 'images/1.jpg',
            opts : {
                caption : 'First caption',
                thumb   : 'images/1.jpg'
            }
        },
        {
            src  : 'images/2.jpg',
            opts : {
                caption : 'Second caption',
                thumb   : 'images/2.jpg'
            }
        }
    ], {
        loop : false
    });
})

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


})