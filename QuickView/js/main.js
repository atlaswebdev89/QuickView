$(document).ready(function(){
    $('.slick1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.items-product2').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});