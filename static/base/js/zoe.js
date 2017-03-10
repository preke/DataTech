//初始化各模块的高度
(function($){
    $(window).on("load",function() {
        $("._list4").prev().css("margin-bottom", "180px");
        $(".mainbox").css("height", parseInt($("#rightbox1").height()) + 10);
        $("#_list1").css("height", parseInt($(".mainbox").height() - 2));
        $("#not_done").click(function () {
            $(".mainbox").css("height", parseInt($("#rightbox1").height()) + 10);
            $("#_list1").css("height", parseInt($(".mainbox").height() - 2));
            $("#not_done").css({
                "background-color": "#01a253",
                "color": "#FFF"
            });
            $("#not_done a").css({
                "background-color": "#01a253",
                "color": "#FFF"
            });
            $("#done").css({
                "background-color": "#FFF",
                "color": "#01a253"
            });
            $("#done a").css({
                "background-color": "#FFF",
                "color": "#01a253"
            });
            $("#rightbox1").css("display", "block");
            $("#rightbox2").css("display", "none");
        });
        $("#done").click(function () {
            $(".mainbox").css("height", parseInt($("#rightbox2").height()) + 10);
            $("#_list1").css("height", parseInt($(".mainbox").height() - 2));
            $("#done").css({
                "background-color": "#01a253",
                "color": "#FFF"
            });
            $("#done a").css({
                "background-color": "#01a253",
                "color": "#FFF"
            });
            $("#not_done").css({
                "background-color": "#FFF",
                "color": "#01a253"
            });
            $("#not_done a").css({
                "background-color": "#FFF",
                "color": "#01a253"
            });
            $("#rightbox2").css("display", "block");
            $("#rightbox1").css("display", "none");
        });
// 个人信息item被点击后
        $(".item_inf").click(function () {

            $("#my_project").css("display", "none");
            $("#_list2").css("display", "none");
            $("#my_collection").css("display", "none");
            $("#my_inf").css("display", "block");
            $("#current").removeAttr("id");
            $(this).attr('id', "current");

        });
// 我的项目item被点击后
        $(".item_pro").click(function () {
            $("#my_inf").css("display", "none");
            $("#my_collection").css("display", "none");
            $("#_list2").css("display", "block");
            $("#my_project").css("display", "block");
            $("#current").removeAttr("id");
            $(this).attr('id', "current");
        });
// 个人收藏item被点击后
        $(".item_collection").click(function () {
            $("#my_inf").css("display", "none");
            $("#_list2").css("display", "none");
            $("#my_project").css("display", "none");
            $("#my_collection").css("display", "block");
            $("#current").removeAttr("id");
            $(this).attr('id', "current");
        });
        
    });
})(jQuery);