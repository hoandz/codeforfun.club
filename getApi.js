$(document).ready(function(){
  console.log('Load Page');
  //Load page
  //load get_site_setting
  $.get("https://admin.codeforfun.club/api/get_site_setting", function(responseData) {
    
    //phan hien thi categories
    var categories = responseData.data.categories;
    var categoriesHtml = '<li><a href="" class="active_color">Trang chủ</a></li>';
    for (var i = 0; i < categories.length; i++) {
      categoriesHtml += `<li><a href="category/` + categories[i].slug + `" >` + categories[i].name + `</a></li>`;
    }
    $('#site-category').html(categoriesHtml);
    $('#site-category-article').html(categoriesHtml);
    //ket thuc phan hien thi categories

    //load setting
    var settingPrf = responseData.data.settings;
    console.log(settingPrf);
    var profilHtml = '';
    var avatarHtml = '';
    for(var i = 0; i < settingPrf.length; i++){
      if(settingPrf[i].key == 'site.description'){
        profilHtml += `<p class="dia_diem">Hanoi, VietNam</p><p class="status">`+ settingPrf[i].value+`<a href="/about.html"> xem thêm</a></p>`;
      }else if(settingPrf[i].key == 'site.logo'){
        avatarHtml += `<a href="https://codeforfun.club/">
        <img src="`+settingPrf[i].type+`" alt="" />
      </a>`;
      }
    }
    $('#profile_setting').html(profilHtml);
    $('#avatar_setting').html(avatarHtml);
    //end load setting
  });
  //and load get_site_setting

  //load get_all_posts
  $.get("https://admin.codeforfun.club/api/get_all_posts", function(responseData){
    var posts = responseData.data.data;
    var postHtml = '';
    for(var i = 0; i < posts.length; i++){
      postHtml += `<div class="post">
                      <div class="img_post">
                        <div class="background_post" style="background-image:url(`+posts[i].image+`)"></div>
                        <div class="content_post">
                          <p>`+posts[i].excerpt+`</p>
                          <span>Real More</span>
                        </div>
                      </div>
                      <div class="footer_post">
                        <div class="title_post">
                          <h2>`+posts[i].title+`</h2>
                        </div>
                        <div class="view_post">
                          <ul>
                            <li><i class="far fa-eye icon_eye"></i><span>22,000</span></li>
                            <li><i class="fas fa-comment-alt"></i><span>200</span></li>
                            <li><i class="fas fa-heart"></i><span>200</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>`;
    }
    $('#allPostHtml').html(postHtml);
  });
  //end load get_all_posts
  //end load page

  //load chi tiet bai viet

  //end load chi tiet bai viet
});