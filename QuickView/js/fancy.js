$(document).ready(function () {
// Init fancybox
    $().fancybox({
        selector:('.items-product a'),
        buttons : [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs   : {
            autoStart : true
        },
        protect: true
    });

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

})