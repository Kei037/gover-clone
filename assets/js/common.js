$(function(){
  $(".mainmenu").each(function(){
    $(this).mouseenter(function(){
      $(this).find(".submenu-inner").removeClass("on");
    })
    .mouseleave(function(){
      $(this).find(".submenu-inner").addClass("on");
    })
  })

});
