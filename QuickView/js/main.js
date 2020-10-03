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

    $('.overlay').on('click', function (e) {
        e.preventDefault();
        var id = $('.modals');
        //Получаем ширину и высоту окна
        var winH = $(window).height();
        var winW = $(window).width();
        //Устанавливаем всплывающее окно по центру
        //id.css('top', winH/2-id.height()/2);
       // id.css('left', winW/2-id.width()/2);
            $('.overlay-bg').addClass('show');
            $('.modals').addClass('show');
            $('body').addClass('modal-open');
    });

    $('.modals').on('click', function (e) {
        e.preventDefault();
        if($(e.target).closest('.modal-block').length == 0) {
            $('.overlay-bg').removeClass('show');
            $('.modals').removeClass('show');
            $('body').removeClass('modal-open');
        }
    });
    $('.close-btn').on("click", function (e) {
        e.preventDefault();
        $('.overlay-bg').removeClass('show');
        $('.modals').removeClass('show');
        $('body').removeClass('modal-open');
    })

});