 // (*** Phan xu ly header ***)
 // xac dinh cac bien tao ra cac ballon
var particleContainer = document.getElementById('ballon_effect');
var Nparticles = 100;
var particles = [];

// hàm random các số trong css
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//hàm tạo cấu trúc từng ballon sẽ được thêm vào thẻ span
function createParticle(i) {
  this.id = i;
  this.width = rand(1, 20) + 'px';
  this.height = this.width;
  this.x = rand(10, 90) + '%';
  this.delay = rand(1, 60) + 's';
  this.duration = rand(10, 60) + 's';
  this.html = '<span style=" width: ' + this.width + '; height: ' + this.height + '; left: ' + this.x + '; animation-delay: ' + this.duration + '; animation-duration: ' + this.duration + '; "></span>';
}

// lặp 100 bóng bay
while (particles.length <= Nparticles) {
  var Particle = new createParticle(particles.length);
  particles.push(Particle);
  particleContainer.innerHTML += Particle.html;
}
  // end lặp

// (*** End phan xu ly header ***)

$(document).ready(function(){
  // (*** Xu Ly Backtotop ***)
  window.addEventListener('scroll', function(){
    if($(window).scrollTop() > 180){
      $('#back-to-top').addClass('active');
    }else{
      $('#back-to-top').removeClass('active');
    }
  });
  $('#back-to-top, #ask_contact').on('click', function(){
      $('html,body').animate({scrollTop: 0}, "slow");
      return false;
    });
  // (*** End Xu Ly Backtotop ***)

  // (*** Xu ly menu ***)
  $('.profile-nav ul li').click(function(){
    $('.profile-nav ul li').removeClass('active_color');
    $(this).addClass('active_color');
  });
  // (*** End Xu ly menu ***)

  // (*** Phần xử lý form contact ***)
  $('#ask_contact').click(function(){
      $('.form_contact').toggleClass('active_form_contact');
  });
  $('.form_contact i').click(function(){
      $('.form_contact').removeClass('active_form_contact');
  });
  // (*** End Phần xử lý form contact ***)
});
