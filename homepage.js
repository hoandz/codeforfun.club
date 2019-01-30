$(document).ready(function(){
  console.log('Load Page');
  //Load page
  //load get_site_setting
  $.get(ApiGetSiteSetting, function(responseData) {
    //phan hien thi categories
    var categories = responseData.data.categories;
    var categoriesHtml = '<li id="Load-trang-chu-item" class="active_color">Trang chủ</li>';
    for (var i = 0; i < categories.length; i++) {
      categoriesHtml += `<li id="Load-` + categories[i].slug + `-item">`+ categories[i].name + `</li>`;
    }
    $('#site-category').html(categoriesHtml);
    $('#site-category-article').html(categoriesHtml);
      // (*** Xu ly menu ***)
      $('.profile-nav ul li').click(function(){
        $('.profile-nav ul li').removeClass('active_color');
        $(this).addClass('active_color');
      });
      // (*** End Xu ly menu ***)
    //load trang chu
    $("#Load-trang-chu-item").on('click',function(event){
      loadTrangChu();
    })
    //end load trang chu
    //load notes
    $("#Load-notes-item").on('click',function(event){
      loadnotes();
    })
    //end load notes
    //load code
    $("#Load-code-item").on('click',function(event){
      loadcode();
    })
    //end load code
    //ket thuc phan hien thi categories
    //load setting
    var settingPrf = responseData.data.settings;
    var profilHtml = '';
    for(var i = 0; i < settingPrf.length; i++){
      if(settingPrf[i].key == 'site.description'){
        profilHtml += `<p class="dia_diem">Hanoi, VietNam</p><p class="status">`+ settingPrf[i].value+`<a href="/about.html"> xem thêm</a></p>`;
      }
    }
    //categories_ref
    var categoriesHtml = '';
    for(var i = 0; i < settingPrf.length; i++){
      if(settingPrf[i].key == 'site.refs'){
        var Json_categories_ref = JSON.parse(settingPrf[i].value);
        for(var j = 0; j < Json_categories_ref.length; j++){
          categoriesHtml += `<li><a href="`+Json_categories_ref[j].url+`">`+Json_categories_ref[j].name+`</a></li>`;
        }
      }
    }
    $('#categories_ref_setting').html(categoriesHtml);
    //end categories_ref
    var avatarHtml = '';
    for(var i = 0; i < settingPrf.length; i++){
      if(settingPrf[i].key == 'site.logo'){
        avatarHtml += `<a href="https://codeforfun.club/">
        <img src="`+ ImgHost + settingPrf[i].value+`" alt="" />
      </a>`;
      }
    }
    //đếm subscribe
    var numberSub = responseData.data.total_subscriber;
    $('#numberSubHtml').html(`<strong>`+numberSub+`</strong>`);
    //end đếm subscribe
    $('#profile_setting').html(profilHtml);
    $('#avatar_setting').html(avatarHtml);
    $('#avatar-article-header').html(avatarHtml);
    $('#avatar-article-mobile').html(avatarHtml);
    //end load setting
  });
  //and load get_site_setting

  //load get_all_posts
  function printPost(postItems){
      var postHtml = '';
      for(var i = 0; i < postItems.length; i++){
        if(postItems[i].like == null){
          postItems[i].like = 0;
          postHtml += `<div class="post">
                        <div class="img_post">
                          <a href="article.html?` + postItems[i].slug + `">
                            <div class="background_post" style="background-image:url('`+ImgHost + postItems[i].image+`')"></div>
                            <div class="content_post">
                              <p>`+postItems[i].excerpt+`</p>
                              <span>Real More</span>
                            </div>
                          </a>
                        </div>
                        <div class="footer_post">
                          <div class="title_post">
                            <h2>`+postItems[i].title+`</h2>
                          </div>
                          <div class="view_post">
                            <ul>
                              <li><i class="far fa-eye icon_eye"></i><span>`+postItems[i].view+`</span></li>
                              <li><i class="fas fa-comment-alt"></i><span>0</span></li>
                              <li><i class="fas fa-heart"></i><span>`+postItems[i].like+`</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>`;
        }else{
          postHtml += `<div class="post">
                        <div class="img_post">
                          <a href="article.html?` + postItems[i].slug + `">
                            <div class="background_post" style="background-image:url('`+ImgHost + postItems[i].image+`')"></div>
                            <div class="content_post">
                              <p>`+postItems[i].excerpt+`</p>
                              <span>Real More</span>
                            </div>
                          </a>
                        </div>
                        <div class="footer_post">
                          <div class="title_post">
                            <h2>`+postItems[i].title+`</h2>
                          </div>
                          <div class="view_post">
                            <ul>
                              <li><i class="far fa-eye icon_eye"></i><span>`+postItems[i].view+`</span></li>
                              <li><i class="fas fa-comment-alt"></i><span>0</span></li>
                              <li><i class="fas fa-heart"></i><span>`+postItems[i].like+`</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>`;
        }
      }
      $('#allPostHtml').html(postHtml);
  }
  // printPost();
  function loadTrangChu(){
    $.get(ApiGetAllPosts, function(responseData){
      var posts = responseData.data.data;
      printPost(posts);
    });
  }
  loadTrangChu()
  //end load get_all_posts
  //load notes
  function loadnotes(){
    $.get(ApiGetAllPosts, function(responseData){
      var postsnotes = responseData.data.data;
      var result = [];
      for(var i = 0; i < postsnotes.length; i++){
        if(postsnotes[i].category_id == 5){
          result.push(postsnotes[i]);
        }
      }
      printPost(result);
    });
  }
  //end load notes
  //load code
  function loadcode(){
    $.get(ApiGetAllPosts, function(responseData){
      var postsnotes = responseData.data.data;
      var result = [];
      for(var i = 0; i < postsnotes.length; i++){
        if(postsnotes[i].category_id == 6){
          result.push(postsnotes[i]);
        }
      }
      printPost(result);
    });
  }
  //end load code

  //end load page
});