/**
 * Created by Administrator on 14-5-13.
 */
$(function(){
    var $current_nav = $("#current_nav"); //current元素（当前所在导航项)
    var current_nav_width = $current_nav.innerWidth();
    var current_nav_left = $current_nav.position().left;

    $( window ).resize(function() {
        current_nav_left = $current_nav.position().left;
        $nav_animate_block.css({ width:current_nav_width, left:current_nav_left });
    });

    var $nav_animate_block = $("#nav_animate_block"); //动画滑块
    $nav_animate_block.css({ width:current_nav_width, left:current_nav_left }); //初始状态下，动画滑块位置在current元素

    // 鼠标进入a元素时触发动画事件
    $("#nav_menu a").hover(function(){

        var index = $(this).index();
        var $a_cur = $("#nav_menu").find("a").eq(index);//鼠标移动到的a元素

        //利用触发的a元素索引获取其left位置和它的宽度
        var width = $a_cur.innerWidth();
        var left = $a_cur.position().left;

        //设置动画滑块位置
        $nav_animate_block.stop().animate({
            width: width,
            left: left
        }, 300)
    }, function(){
        //鼠标离开a元素时，动画滑块返回current元素位置
        $nav_animate_block.stop().animate({
            width: current_nav_width,
            left: current_nav_left
        })
    })
});