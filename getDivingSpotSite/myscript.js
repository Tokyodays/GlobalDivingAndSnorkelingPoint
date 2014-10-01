$(function(){
  $("#gmap_list li").each(function(){
    var _title = $(this).find(".gmap_title a").text();
    var _tag = $(this).find(".point_icon img").attr("src");
    var _level = $(this).find(".gmap_level").text();
    var _information = $(this).find(".gmap_info").html();
    var _description =  $(this).find(".gmap_info").text();
    var _coord = $(this).find(".gmap_coord").text();
    console.log(_title, _tag, _level, _information, _description, _coord);
  })
})
