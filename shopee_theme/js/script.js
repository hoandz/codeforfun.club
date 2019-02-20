$(function () {


  // xu ly header

  // end xu ly header
    $('.slide_left').slick({
     dots: true,
     dotsClass: 'slick-dots',
     arrows: true,
     adaptiveHeight: true,
     adaptiveWidth: true,
     centerPadding: true,
     autoplay: true,
     autoplaySpeed: 5000,
    });
    $('.content_flash_sale').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      adaptiveHeight: true
    });
    $('.content_shopee_mail').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      adaptiveHeight: true
    });
    $('.content_top_search').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true
    });
    $('.silde_thong_tin_san_pham_left').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1,
          adaptiveHeight: true
        });
    // in post
    var postHtml = `<div class="post_sp_lquan">
          <a href="../shopee_theme/article.html">
            <div class="main_post_sp_lquan">
            <div class="img_post_sp_lq">
              <img src="https://cf.shopee.vn/file/245fb1d58eb735ec43fae7f1d368e146_tn" alt="">
              <div class="horizontal_sale">
                <div class="horizontal_sale_box">
                  <div class="shopee-badge">
                    <div class="shopee-badge-top">
                      22%
                    </div>
                    <div class="shopee-badge-bottom">
                      giảm
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="title_post_sp_lq">bộ chăn gối văn phòng 3 trong 1 tmark</div>
            <div class="gia_post_sp_lq">
              <div class="gia_post_sp_lq_left">
                <ul>
                  <li><u>đ</u>129.000</li>
                  <li>-</li>
                  <li><u>đ</u>250.000</li>
                </ul>
              </div>
              <div class="gia_post_sp_lq_right">
                <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-vn/assets/9d21899f3344277e34d40bfc08f60bc7.png" alt="">
              </div>
            </div>
            <div class="rate_post_sp_lq">
              <div class="rate_post_sp_lq_left"><span><i class="far fa-heart"></i></span>762</div>
              <div class="rate_post_sp_lq_right"><span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>(563)</div>
            </div>
          </div>
          </a>
        </div>`;
    for(var i = 0; i < 30; i++){
      $('.content_cac_sp_khac_cua_shop').append(postHtml);
    }
    $('.content_cac_sp_khac_cua_shop').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      adaptiveHeight: true
    });
    // end in post

    // ======= ******* =======
    // post index
    var postIndexHtml = `<div class="post">
          <a href="../shopee.com/article.html">
            <div class="main_post">
              <div class="img_sp_main_post">
                <img src="https://cf.shopee.vn/file/88e8ced847ca970eb830df6df4b846d0_tn" alt="">
              </div>
              <div class="title_sp_main_post">
                điện thoại xách tay Nhật Sharp Aquos mini SHL24 ram 2GB/16GB màn 4.5 inch
              </div>
              <div class="gia_sp_main_post">
                <span>đ</span>799.000
              </div>
              <div class="xem_them_bai_viet">
                Tìm sản phẩm tương tự
              </div>
            </div>
            <div class="horizontal_sale">
              <div class="horizontal_sale_left">
                <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-vn/assets/ad31cbb2ae81348389a89295f410fd72.png" alt="">
              </div>
              <div class="horizontal_sale_right">
                <div class="horizontal_sale_right_box">
                  <div class="shopee-badge">
                    <div class="shopee-badge-top">
                      50%
                    </div>
                    <div class="shopee-badge-bottom">
                      giảm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>`;
        for(var i = 0; i < 30; i++){
          $('.content_suggest_today').append(postIndexHtml);
        }
    // end post index
    // ======= ******* =======
    // xu ly menu_comment
    $('.product-rating-overview-right ul li').click(function(){
      $('.product-rating-overview-right ul li').removeClass('them_border_color_menu_cmt');
      $(this).addClass('them_border_color_menu_cmt');
    });
    // end xu ly menu_comment

    // xu ly hover_img_article
    $(".anh1").hover(function(){
      $('.main_item_thong_tin_anh_san_pham').removeClass('active_border_img');
      $(".anh1").addClass('active_border_img');
      $('.img_thong_tin_san_pham_left img').removeClass('actve_img_sp');
      $('#anh1').addClass('actve_img_sp');
    });
    $(".anh2").hover(function(){
      $('.main_item_thong_tin_anh_san_pham').removeClass('active_border_img');
      $(".anh2").addClass('active_border_img');
      $('.img_thong_tin_san_pham_left img').removeClass('actve_img_sp');
      $('#anh2').addClass('actve_img_sp');
    });
    $(".anh3").hover(function(){
      $('.main_item_thong_tin_anh_san_pham').removeClass('active_border_img');
      $(".anh3").addClass('active_border_img');
      $('.img_thong_tin_san_pham_left img').removeClass('actve_img_sp');
      $('#anh3').addClass('actve_img_sp');
    });
    $(".anh4").hover(function(){
      $('.main_item_thong_tin_anh_san_pham').removeClass('active_border_img');
      $('.anh4').addClass('active_border_img');
      $('.img_thong_tin_san_pham_left img').removeClass('actve_img_sp');
      $('#anh4').addClass('actve_img_sp');
    });
    $(".anh5").hover(function(){
      $('.main_item_thong_tin_anh_san_pham').removeClass('active_border_img');
      $('.anh5').addClass('active_border_img');
      $('.img_thong_tin_san_pham_left img').removeClass('actve_img_sp');
      $('#anh5').addClass('actve_img_sp');
    });
    $(".anh6").hover(function(){
      $('.main_item_thong_tin_anh_san_pham').removeClass('active_border_img');
      $('.anh6').addClass('active_border_img');
      $('.img_thong_tin_san_pham_left img').removeClass('actve_img_sp');
      $('#anh6').addClass('actve_img_sp');
    });
    // end xu ly hover_img_article
});