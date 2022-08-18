$(document).ready(function() {
    $('.reviews__slider').slick({
        arrows:true,
        slidesToShow:3,
        infinite:true,
        responsive:[{
            breakpoint:769,
            settings: {
                slidesToShow: 1
            }
        }]
    })
});