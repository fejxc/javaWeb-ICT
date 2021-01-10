 
/* @Author: Harlem
* @Date:   2020-12-11 
* @Last Modified by:   Harlem
* @Last Modified time: 2020-12-11
*/


//鼠标悬停缩略图时，原图和细节放大图代替缩略图
$(document).ready(function(){
  $('.control-bar img').on('mouseover',function(){
        var src = $(this).attr("src");//返回或设置DOM元素的属性
        var newSrc1 = src.replace("thum","orig");//原图代替缩略图
        var newSrc2 = src.replace("thum","big");//细节大图代替缩略图
        $(".preview .orig-pic").attr("src", newSrc1);
        $(".detail-pic img").attr("src", newSrc2);
  
 });

$('.preview').on('mouseover',function(e){
  $('.zoom-pup').css('display','block');
  $('.detail-pic').css('display','block');
  var ev = e || event;  //event 兼容ie浏览器
  var mouseX = ev.pageX;//文档左边缘的鼠标位置
  var mouseY = ev.pageY;

  var picLeft = $(".orig-pic").offset().left;//offset() 方法返回或设置匹配元素相对于文档的偏移（位置）
  var picTop = $(".orig-pic").offset().top;
  var picWidth = $(".orig-pic").width();//原图宽度
  var picHeight = $(".orig-pic").height();
  var xLength = mouseX - picLeft;//放大镜距离原图左边缘的宽度
  var yLength = mouseY - picTop;
  var qWidth = picWidth / 4;	//鼠标的位置就在picWidth的1/4
  var lastQWidth = picWidth - picWidth / 4; //右边3/4的宽度
  var qHeight = picHeight / 4;   //鼠标的位置就在picHeight的1/4
  var lastQHeight = picHeight - picHeight / 4;
  if (xLength < qWidth) {  //当鼠标到左边距的位置小于1/4宽度时
      $(".zoom-pup").css("left","0px");
  } else {
      if (xLength > lastQWidth) {//当鼠标到左边距的位置大于3/4时
          $(".zoom-pup").css("left", (lastQWidth - qWidth) + "px");
      } else {
          $(".zoom-pup").css("left", (xLength - qWidth) + "px");
      }
  }
  if (yLength < qHeight) {
      $(".zoom-pup").css("top", "0px");
  } else {
      if (yLength > lastQHeight) {
          $(".zoom-pup").css("top", (lastQHeight - qHeight) + "px");
      } else {
          $(".zoom-pup").css("top", (yLength - qHeight) + "px");
      }
  }
  $(".detail-pic > img").css("left", parseInt($(".zoom-pup").css("left")) * (-800 / picWidth) + "px")
                        .css("top", parseInt($(".zoom-pup").css("top")) * (-800 / picWidth) + "px")
                        .css("position", "absolute");});

  $('.preview').on('mouseleave',function(e){
      $('.zoom-pup').css('display','none');
      $('.detail-pic').css('display','none');
 });


});

//根据库存值，来设置前面的输入文本框的值
$(document).ready(function(){
  //减
 $(".goods-figure-input .minus").on('click',function(){
    var number = $("#number").val();
    if(number > 1){
    number--;
    $("#number").val(number);}
 });
//加
$(".goods-figure-input .plus").on('click',function(){
    var number = $("#number").val();
    var max = $(".max").text();//提取最大库存
    if(number < parseInt(max)){ //将字符串转化为数字
    number++;
    $("#number").val(number);
    }
 });
});

//相关推荐
$(document).ready(function(){
  //点击向前翻
 $(".prev").on('click',function(){
    var x =  $(".ald-switchable-content").css('top');
    console.log("X = " +x.length);
    var y =  parseInt(x.substr(0,x.length-2))-160;
    console.log("Y = " +y);
    if(Math.abs(y) < ($('.ald-switchable-content li').length-3)*160){
        $(".ald-switchable-content").css('top',y);
    }
  
});

 //点击向后翻
  $(".next").on('click',function(){
    var x =  $(".ald-switchable-content").css('top');
    console.log("X = " +x);
    var y =  parseInt(x.substr(0,x.length-2))+160;
    console.log("Y = " +y);
    if(y < 0){
        $(".ald-switchable-content").css('top',y);
    }
});

});

//左边的导航
$(document).ready(function(){

  $('.nav .title').on('click',function(){
 
if($(this).siblings('ul').css("display")=='block'){
//假如当前元素它同胞元素ul的display==block，表示当前是展开的
$(this).siblings('ul').css('display','none');
$(this).children('i').removeClass('fa-minus-square');//i的减号移除
$(this).children('i').addClass('fa-plus-square');//i的加号加上
}else{
  //假如display！=block，表示当前是关闭的。那就需要给他展开，把其他的关闭
$(this).siblings('ul').css('display','block');
$(this).parent().siblings().children('ul').css('display','none');
   //全部删除fa-minus-square，添加fa-plus-square
   $('.nav .title i').removeClass('fa-minus-square').addClass('fa-plus-square');
   //自己删除加号，放减号
   $(this).children('i').removeClass('fa-plus-square').addClass('fa-minus-square');
}
});
});


//评价面板
$(document).ready(function(){
  //填写评价，获取评价内容
  //把评价添加到评价那里去
  $(".discuss-btn").on("click",function(){
   var discuss = $("#discuss-content").val();
   //构建星星的html文本
   var starStr= "";
   for(var i=0;i<5;i++){
      if(i <= starNum){
       starStr = starStr +"<img src='img/star_red.png'/>";
      }else{
        starStr = starStr +"<img src='img/star.png'/>";
      }
   }
   var str = " <li class='comment-item'> <div> "+starStr+" </div><div>"+discuss+"</div> <div>***（匿名）<br><button class='delete-btn' type='button'>删除</button></div></li> ";
   $(".comments-list").append(str);

  //假如鼠标单击删除键，则删除该li，需要嵌套，因为删除键是后面新添加的元素
    $(".delete-btn").on("click",function(){
      $(this).parents('.comment-item').remove();
    });

  });



  //评价里的小星星
  //each()方法为每个匹配元素规定要运行的函数
  var starNum = 0;//星星的下标
$('.star img').each(function(index){

    var star='img/star.png';  //普通灰色星星图片的存储路径
    var starRed='img/star_red.png';   //红色星星图片存储路径
    $(this).on("mouseover click",function(){  //设置鼠标滑动和点击都会触发事件
      $('.star img').attr('src',star);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
      $(this).attr('src',starRed);    //设置鼠标当前所在图片为打星颜色图
      $(this).prevAll().attr('src',starRed);  //设置鼠标当前的前面星星图片为打星颜色图
      starNum = index;//星星的下标
    });
  });

})