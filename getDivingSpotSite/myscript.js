$(function(){
  var _textarea = $("<textarea id='textarea'></textarea>");
  _textarea.css({
    'position': 'absolute',
    'top': '10px',
    'left': '10px'
  });
  $("body").append(_textarea);

  var _text = "";

  $("#gmap_list li").each(function(){
    var _title = $(this).find(".gmap_title a").text();
    var _tag_temp = [];
    $(this).find(".point_icon img").each(function(){
      _tag_temp.push($(this).attr("src").split("/")[1].split("_")[0]);
    });
    var _tags = _tag_temp.join("|");
    var _level = $(this).find(".gmap_level").text();
    var _info_temp = $(this).find(".gmap_info").html().split("<br>");
    var _distance = _info_temp[0].split("</strong>")[1];
    var _level2 = _info_temp[1].split("</strong>")[1];
    var _depth = _info_temp[2].split("</strong>")[1];
    var _flow = _info_temp[3].split("</strong>")[1];
    var _desc_temp =  $(this).find(".gmap_description").text().split("■");
    var _description = _desc_temp[1].split("：")[1];
    var _fish = _desc_temp[2].split("：")[1];
    var _coord = $(this).find(".gmap_coord").text().split(",");
    var _latitude = _coord[0];
    var _longitude = _coord[1];

    var _array = [_title, _tags, _level, _distance, _level2, _depth, _flow, _description, _fish, _latitude, _longitude];
    _text += _array.join(",") + "\r\n";
  });
  $(_textarea).val(_text);
})
