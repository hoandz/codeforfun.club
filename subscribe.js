$(document).ready(function(){
  var email = $('#email_sub');
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  $('#onclick_button_sub').click(function(){
    if(!filter.test(email.val())){
      alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
      email.focus;
      return false;
    }else{
      alert("Chúc mừng bạn đã đăng ký thành công");
      email.val("");
    }
  });
});