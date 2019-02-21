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
  //xu ly one page
  var body = $('html, body');
  $('.header-right ul li:nth-child(1) a').click(function(event){
    //ham event.preventDefault ngan chan the a load trang
    event.preventDefault();
    body.animate({ scrollTop: $('.chapter1').offset().top}, 1000, 'swing');
  });
  $('.header-right ul li:nth-child(2) a').click(function(event){
    //ham event.preventDefault ngan chan the a load trang
    event.preventDefault();
    body.animate({ scrollTop: 3800}, 1000, 'swing');
  });
  // end xu ly one page

  // Get URL
  var url = location.href;
  // Get Destination
  var url_tokens = url.split('#');
  if (url_tokens.length == 2) {
    // Check to go to the destination
    var dest = url_tokens[1];
    switch (dest) {
      case "about":
        body.animate({ scrollTop: $('.chapter1').offset().top}, 1000, 'swing');
      break;
      case "contact":
        body.animate({ scrollTop: 3800}, 1000, 'swing');
      break;
    }
  }
});