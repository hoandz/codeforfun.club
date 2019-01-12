$(document).ready(function(){
  $('.button_search').click(function(){
        $('.header-right ul li input').toggleClass('active_input');
    });
    // 
    //xu ly menu mobile
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
    //end xu ly menu mobile

    //xu ly form search mobile
    $('#form_search').click(function(){
      $('.form_search').addClass('active_form_search');
      $('._container').addClass('fixed_container');
      $('.form_search input').addClass('active_input_form');
    });
    $('#icon_remove_form_search').click(function(){
      $('.form_search').removeClass('active_form_search');
      $('._container').removeClass('fixed_container');
      $('.form_search input').removeClass('active_input_form');
    });
    //end xu ly form search mobile
  //xu ly form sub
  $('#subscribe_form').click(function(){
    $('.form_sub').addClass('active_form_sub');
    $('._container').addClass('fixed_container');
  });
  // xu ly subscribe_mobile
  $('#subscribe_mobile').click(function(){
    $('.nav_menu_mobile').removeClass('active_menu').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event){
      $('#nav-icon2').removeClass('open');
      $('.form_sub').addClass('active_form_sub');
      $('._container').addClass('fixed_container');
    });
  });
  //end xu ly subscribe_mobile
  $('#form_sub_icon').click(function(){
    $('.form_sub').removeClass('active_form_sub');
    $('._container').removeClass('fixed_container');
  });
  //end xu ly form search
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
  
});