$(document).ready(function(){
  $('.button_search').click(function(){
        $('.header-right ul li input').toggleClass('active_input');
    });
    // 
  $('#nav-icon2').click(function(){
    $(this).addClass('open');
    $('.nav_menu_mobile').addClass('active_menu');
    $('._container').addClass('fixed_container');
  });
  $('#icon_nav_menu_mobile').click(function(){
    $('.nav_menu_mobile').removeClass('active_menu');
    $('#nav-icon2').removeClass('open');
    $('._container').removeClass('fixed_container');
  });

  // (*** Xu Ly Backtotop article ***)
  window.addEventListener('scroll', function(){
    if($(window).scrollTop() > 180){
      $('#back-to-top').addClass('active');
    }else{
      $('#back-to-top').removeClass('active');
    }
  });
  $('#back-to-top').on('click', function(){
      $('html,body').animate({scrollTop: 0}, "slow");
      return false;
    });
  // (*** End Xu Ly Backtotop article ***)
  
  // (*** Phần xử lý form contact ***)
  $('#ask_contact').click(function(){
      $('.form_contact').toggleClass('active_form_contact');
  });
  $('.form_contact i').click(function(){
      $('.form_contact').removeClass('active_form_contact');
  });
  // (*** End Phần xử lý form contact ***)
});