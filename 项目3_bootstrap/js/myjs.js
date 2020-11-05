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