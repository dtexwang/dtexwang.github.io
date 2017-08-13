function toggle_visibility(id) {
  $("#" + id).toggle();
}

var shownext = 1;

function toggle_all() {
  if (shownext == 1) {
    $(".photogrid").show();
    $("#res-geobio-video").show();
    shownext = 0;
    }
  else {
    $(".photogrid").hide();
    $("#res-geobio-video").hide();
    shownext = 1;
    }
}