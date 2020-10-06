$(document).ready(function(){
    $('.slick1').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.slick1'),
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



//MultiGallery MagnificPopup
$('.image-links').each(function () {
    $(this).magnificPopup({
        delegate: 'a',
        type:'image',
        preloader: true,
        tLoading: 'Загрузка изображения #%curr%...',
        removalDelay: 300,
        zoom: {
            enabled: true,
            duration: 300, // продолжительность анимации. Не меняйте данный параметр также и в CSS
            easing: 'ease',
        },
        gallery:{
            enabled:true,
            navigateByImgClick: false,
            preload: [0, 1],
        },
        image: {
            // options for image content type
            titleSrc: function(item) {
                return '<div class="ar"><ul ><li>fake Foobar</li><li>fake Foobar</li><li>fake Foobar</li><li>fake Foobar</li></ul></div>';
                //return item.el.parent('article').find('h2').text() + item.el.parent('article').find('figcaption').text();
            },

        }
    });
})

/*MagnificPopup for Ajax*/
    $('#open-popup').on("click", function (elem){
        elem.preventDefault();

        // Или вот так $.magnificPopup.open({})

        $(this).magnificPopup({
            preloader: true,
            tLoading: 'Загрузка изображения #%curr%...',

            items: [
                {
                    src: 'images/7.jpg',
                    title: 'Peter & Paul fortress in SPB'
                },
                {
                    src: 'https://vimeo.com/123123',
                    type: 'iframe' // this overrides default type
                },
                {
                    src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                    type: 'inline'
                },
                {
                    src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                    type: 'inline'
                },
                {
                    src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                    type: 'inline'
                },
                {
                    src: 'images/10.jpg', // CSS selector of an element on page that should be used as a popup

                }
            ],
            gallery: {
                enabled: true
            },
            type: 'image', // this is a default type
            image: {
                tError: '<a href="%url%">The image</a> could not be loaded.', // Error message
                title: 'Peter & Paul fortress in SPB'
            }
        }).magnificPopup('open');;
    })











    function initSlickSlider (elem) {
        $('.'+elem).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            autoplay: false,
            centerMode:false,
            fade: false,
            adaptiveHeight: false,
            dots: true,
            appendDots: $('.wrap-slick2-dots'),
            dotsClass:'slick2-dots',
            appendArrows: $('.main-carusel'),
            prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        });
    }



    $('.overlay').on('click', function (e) {
        e.preventDefault();
        //Включить прелоадер
        $('.preloader').show();

        let nameslider  = "slick2";
        let imgBlock = $('.main-carusel');
        let descBlock = $('.desc-block');
        if(!imgBlock.hasClass(nameslider)) {
            imgBlock.addClass(nameslider);
                imgBlock.append('<img src='+ '/images/1.jpg ' +'>');
                imgBlock.append('<img src='+ '/images/2.jpg ' +'>');
                imgBlock.append('<img src='+ '/images/4.jpg ' +'>');

            //Блок Кнопок навигации слайдера
            imgBlock.after('<div class="wrap-slick2-dots t-center"></div>');
            //Инициализация слайдера slick после получения всех images объекта
            initSlickSlider(nameslider);
        }

        if(!descBlock.hasClass('load-desc')) {
                descBlock.addClass('load-desc');
                descBlock.append(
                '<h3>Название товара</h3>'
            ).append(
                    '<p>Бренд</p>',
                    '<p>Описание товара: что по чем и характеристики что по чем и характеристики</p>',
                    '<ul>' +
                    '<li>Первый пункт</li>' +
                    '<li>второй пункт</li>' +
                    '<li>Третий пункт</li>' +
                    '<li>Четверный пункт</li>' +
                    '</ul>',
                    '<div><p></p></p></div>'
            )
        }

        //Выключить прелоадер
        setTimeout(function(){
            $('.preloader').removeClass('show-preload');
        },1600);

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

    //Закрыть модальное окно по клику по фону
    $('.modals').on('click', function (e) {
        e.preventDefault();
        if($(e.target).closest('.modal-block').length == 0) {
            $('.overlay-bg').removeClass('show');
            $('.modals').removeClass('show');
            $('body').removeClass('modal-open');
            $('.preloader').addClass('show-preload').hide();
        }
    });
    //Закрыть модальное окно по клику по крестику
    $('.close-btn').on("click", function (e) {
        e.preventDefault();
        $('.overlay-bg').removeClass('show');
        $('.modals').removeClass('show');
        $('body').removeClass('modal-open');
        $('.preloader').addClass('show-preload').hide();
    })
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
                e.stopPropagation();
            $('.overlay-bg').removeClass('show');
            $('.modals').removeClass('show');
            $('body').removeClass('modal-open');
            $('.preloader').addClass('show-preload').hide();
        }
    });

});