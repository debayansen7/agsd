$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('.owl-carousel1').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10,
        mouseDrag:false,
        touchDrag:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })

    setTimeout(function(){
        $('.message').fadeIn();
    }, 2500);
    $('.closeBtn').off().on('click', function(){
        $('.message').fadeOut(1000);
    });




});
