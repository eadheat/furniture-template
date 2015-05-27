Global = {
  init: function(){
    var page_height = $( document ).height();
    $("#left-menu").css("height", page_height);
  }
};

$(Global.init);