$(document).ready(function () {
    $('.slick').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.slick'),
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

    /* JqueryLightGallery */
    $('.lightgallery').each(function (e){
        $(this).lightGallery({
            thumbnail:true,
            animateThumb: true,
            showThumbByDefault: true,
            subHtmlSelectorRelative: true,
        });
    })

    /*Dymanic load*/
    $('.dymamic').on("click", function (e) {
        e.preventDefault();
        // Получить данные с сервера Ajax
        let arr = [
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg',
            'images/5.jpg',
        ];
        //Сформировать массив и передать в плагин JqueryGallery
        let data = [
            {
                "src": arr[0],
                'thumb': arr[0],
                'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            },
            {
                'src': arr[3],
                'thumb': arr[3],
                'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            },
            {
                'src': arr[2],
                'thumb': arr[2],
                'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
            }];

        $(this).lightGallery({
            dynamic: true,
            dynamicEl: data
        })
    })

})
