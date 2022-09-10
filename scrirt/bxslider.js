// $(".carusel").slick({
//     infinite:false,
//     prevArrow:$(".prev"),
//     nextArrow:$(".next"),
//     slidesToShow:2,
//     dots:true,
// });

$(".carusel").slick({
    infinite:true,
    slidesToShow:2,
    slidesToScroll:1
});

$(".gellery-carusel").slick({
    infinite:false,
    prevArrow:$(".prev-gallery"),
    nextArrow:$(".next-gallery"),
    slidesToShow:2,
    dots:true,
});

$(".reviews-carusel").slick({
    infinite:false,
    prevArrow:$(".prev-reviews"),
    nextArrow:$(".next-reviews"),
    slidesToShow:2,
    dots:true,
});