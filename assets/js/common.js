$(function(){
  // $("body").prepend("<div class='box'></div>"); 로또 추첨기
  $(".box").each(function(){
    let transSize = "+"; // 크기변환 전환
    let leftDir = "+";   // x축 방향 전환
    let topDir = "+";    // y축 방향 전환
    let speedNum = 1;
    const maxNum = 10;
    let thisElem = $(this);

    $(window).resize(function(){
      let thisOffset = thisElem.offset();
      // console.log(thisOffset);
      // size 변화 조건식
      if ( thisElem.width() > 200 ) {
        transSize = "-";
      }else if ( thisElem.width() < 50 ) {
        transSize = "+";
      }
      // x축 변화 조건식
      // console.log($(this).innerHeight());
      if ( thisOffset.left > $(window).width() - thisElem.width() ) {
        leftDir = "-";
        speedNum = Math.ceil(Math.random()*10);
        if ( speedNum > maxNum ) { speedNum = maxNum -1 }
        thisElem.css("left", $(window).width() - thisElem.width() )
      }else if ( thisOffset.left < 0 ) {
        leftDir = "+";
      }
      // y축 변화 조건식
      if ( thisOffset.top > $(window).height() - thisElem.height() ) {
        topDir = "-";
        speedNum = Math.ceil(Math.random()*10);
        if ( speedNum > maxNum ) { speedNum = maxNum -1 }
        thisElem.css("top", $(window).height() - thisElem.height() )
      }else if ( thisOffset.top < 0 ) {
        topDir = "+";
      }
      // thisElem 최종 적용
      thisElem.css({"width": transSize+"=1px", "height": transSize+"=1px"});
      thisElem.css({"left": leftDir+"="+speedNum+"px", "top": topDir+"="+speedNum+"px"});
    });
  });
});
