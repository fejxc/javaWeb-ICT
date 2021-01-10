$(document).ready(function(){
	// 1、阻止事件冒泡
	$(".wrapper").on("click",function(){
		alert("冒泡最外层");
		event.stopPropagation();
	});

	$(".bar").on("click",function(){
		alert("冒泡中间层");
		event.stopPropagation();
	});
	$(".bar a").on("click",function(){
		alert("冒泡最内层");
		event.stopPropagation();
	});


	$("#bigger").click(function(){
		// console.log("test");
		$("#appleImg").removeClass();
		$("#appleImg").addClass("img-bigger");
	});
	$("#default").on("click",function(){
		$("#appleImg").removeClass();
		$("appleImg").addClass("img-default");
	});
	$("#smaller").one("click",function(){
		// 链式编程
		$("#appleImg").removeClass().addClass("img-smaller");
	});

	// 3、商品分类下拉菜单
	$(".nav .title").on("click",function(){
		// 判断当前点击它同胞元素ul的是否展开，如果是展开，则关闭，i由减号变加号
		if ($(this).siblings("ul").css("display") == "block") {
			$(this).siblings("ul").css("display","none");
			$(this).children("i").removeClass("fa-minus-square");//i的减号移除
			$(this).find("i").addClass("fa-plus-square");//i的加号加上
		}else{
			$(this).siblings("ul").css("display","block");
			// 当前元素ul展开，其他元素UL关闭
			$(this).parent().siblings().children("ul").css("display","none");
			$(".nav .title i").removeClass("fa-minus-square").addClass("fa-plus-square");
			$(this).children("i").removeClass("fa-plus-square").addClass("fa-minus-square");
		}
	});
})
