$(document).ready(function(){
  console.log('Load Page');
  //Load page
  //load get_site_setting
  $.get(ApiGetSiteSetting, function(responseData) {
    
    //phan hien thi categories
    var categories = responseData.data.categories;
    var categoriesHtml = '<li><a href="https://codeforfun.club/" class="active_color">Trang chủ</a></li>';
    for (var i = 0; i < categories.length; i++) {
      categoriesHtml += `<li><a href="category/` + categories[i].slug + `" >` + categories[i].name + `</a></li>`;
    }
    $('#site-category').html(categoriesHtml);
    $('#site-category-article').html(categoriesHtml);
    //ket thuc phan hien thi categories

    //load setting
    var settingPrf = responseData.data.settings;
    var profilHtml = '';
    for(var i = 0; i < settingPrf.length; i++){
      if(settingPrf[i].key == 'site.description'){
        profilHtml += `<p class="dia_diem">Hanoi, VietNam</p><p class="status">`+ settingPrf[i].value+`<a href="/about.html"> xem thêm</a></p>`;
      }
    }
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
  var tokens = location.href.split('?');
  // TODO Co the loi
  var post_slug = tokens[1];
  console.log("Slug: " + post_slug);
  var GetPostDetailUrl = ApiGetPostDetail + post_slug;
  $.get(GetPostDetailUrl, function(responseData){
    var articleContent = responseData.data;
    var articleHtml = `<div class="content_between">
        <div class="content_between_left">
          <div class="image_content_between">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="">
          </div>
          <div class="profile_content_between_left">
            <span>@michaelhoan</span>
            <p>Published `+articleContent.updated_at+`</p>
          </div>
        </div>
        <h2 class="title_article">`+articleContent.title+`</h2>
        <div class="image_article_content">
          <img src="`+ ImgHost + articleContent.image+`" alt="">
        </div>
        <div class="article_content_body">
          `+articleContent.body+`
        </div>
      </div>`;
    $('#test_api').html(articleHtml);
  });
  //end load chi tiet bai viet
  //load get_all_posts
  $.get(ApiGetAllPosts, function(responseData){
    var posts = responseData.data.data;
    var postHtml = '';
    var result = 0;
    for(var i = 0; i < posts.length; i++){
      postHtml += `<div class="post">
                      <div class="img_post">
                        <a href="article.html?` + posts[i].slug + `">
                          <div class="background_post" style="background-image:url('`+ImgHost + posts[i].image+`')"></div>
                          <div class="content_post">
                            <p>`+posts[i].excerpt+`</p>
                            <span>Real More</span>
                          </div>
                        </a>
                      </div>
                      <div class="footer_post">
                        <div class="title_post">
                          <h2>`+posts[i].title+`</h2>
                        </div>
                        <div class="view_post">
                          <ul>
                            <li><i class="far fa-eye icon_eye"></i><span>`+posts[i].view+`</span></li>
                            <li><i class="fas fa-comment-alt"></i><span>0</span></li>
                            <li><i class="fas fa-heart"></i><span>`+posts[i].like+`</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>`;
      result++;
      if(result == 3){
        break;
      }
    }
    $('#allPostHtml').html(postHtml);
  });
  //end load get_all_posts
});