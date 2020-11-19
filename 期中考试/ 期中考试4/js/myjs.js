var menu = document.getElementById("menu");
var menuContent = document.getElementById("menuContent");
function fun1() {
    //鼠标移入的时候显示二级菜单
    menuContent.style.display = "block";
    menu.setAttribute("class","navTitle current");
}
function fun2() {
    //鼠标移出去隐藏下拉菜单
    menuContent.style.display = "none";
    menu.setAttribute("class","navTitle");
}

// 轮播图切换
var sliderContent = document.getElementById("slider-content");
var sliderContentLi = sliderContent.getElementsByTagName("li");

var sliderNav = document.getElementById("slider-nav");
var sliderNavLi = sliderNav.getElementsByTagName("li");

var x = 0;

window.onload = function () {
    //鼠标悬停切换焦点图
    for (var i = 0; i < sliderNavLi.length; i++) {
        sliderNavLi[i].index = i;
        // 触发鼠标悬停事件
        sliderNavLi[i].onmouseover = function(){
            // 运用排他性，将翻页当前指向的设为红色，其他为空
            for (var i = 0; i < sliderNavLi.length; i++) {
                sliderNavLi[i].className = "";
            }
            this.className = "on";

            // 遍历广告图
            for (var i = 0; i < sliderContentLi.length; i++) {
                sliderContentLi[i].style.display = "none";
            }
            sliderContentLi[this.index].style.display = "block";
        }
    }

    // 自动切换焦点图
    // setInterval():每隔五秒，调用一次change()函数
    // 循环，当处在最后一个圆环时，跳到第一个
    if (x == sliderNavLi.length) {
        x = 0;
    }
    sliderNavLi[x].index = x;

    for (var i = 0; i < sliderNavLi.length; i++) {
        sliderNavLi[i].className = "";
    }
    sliderNavLi[x].className = "on";

    for (var i = 0; i < sliderContentLi.length; i++) {
        sliderContentLi[i].style.display = "none";
    }
    sliderContentLi[sliderNavLi[x].index].style.display = "block";

    x++;

    window.setInterval(function(){
        change();
    },3000);
}
function change(){}


