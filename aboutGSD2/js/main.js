/*!
 Copyright of www.aboutgermanshepharddogs.com, 2016
 Created by Debayan Sen, http://www.debayansen.com
!*/

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
    }, 4000);
    $('.closeBtn').off().on('click', function(){
        $('.message').fadeOut(1000);
    });

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});
