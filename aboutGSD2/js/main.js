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

    // $('.message').delay(1000, function(){
    //     $('.message').fadeIn('slow').show();
    // });
    //
    //
    // $('.closeBtn').off().on('click', function(){
    //     $('.message').fadeOut( 1000, function() {
    //
    //     });
    //
    // });
});
