$(document).ready(function(){
  window.addEventListener('scroll', function(){
    if($(window).scrollTop() > 85){
      $('#header').addClass('doi_mau_header');
      $('.logo-trang').removeClass('hien_logo');
      $('.logo-den').addClass('hien_logo');
      $('.header-right ul li').addClass('doi_mau_menu');
    }else{
      $('#header').removeClass('doi_mau_header');
      $('.logo-trang').addClass('hien_logo');
      $('.logo-den').removeClass('hien_logo');
      $('.header-right ul li').removeClass('doi_mau_menu');
    }
  });

  // slider 
   $('.slider_container_fluid').slick({
     dots: true,
     dotsClass: 'slick-dots',
     arrows: false,
     adaptiveHeight: true,
     adaptiveWidth: true,
     centerPadding: true,
     autoplay: true,
     autoplaySpeed: 5000,
    });
  // end slider
  //slide logo
  $('.container_icon_logo').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
  });
  //end slide logo
  // post_latest
  $('.cangiua_post_latest_blog').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
  // end post_latest

});