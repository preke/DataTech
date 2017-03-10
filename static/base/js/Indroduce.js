$("#back_list").height($(".main").outerHeight());
$(".aboutUs").hover(function(){
    $('.aboutUs ul').css('display','block');
},function(){
    if ($('#current').attr('class') == "contactUs"){
        $('.aboutUs ul').css('display','none');
    }
});
$(".contactUs").hover(function(){
    if ($('#current').attr('class') == "contactUs"){
        $('.aboutUs ul').css('display','none');
    }
});

$(".aboutUs").click(function(){
    $("#current").removeAttr("id");
    $(this).attr("id","current");
    $(".aboutUs ul").css('display','block');
    $(document).attr("title","关于我们");
});
$(".contactUs").click(function(){
    $('#current').removeAttr("id");
    $(this).attr("id","current");
    $(".aboutUs ul").css('display','none');
    $(document).attr("title","联系我们");
    $(".LAB a").css('color','#a0a0a0');
    $(".Club a").css('color','#a0a0a0');
    $('.Center a').css('color','#a0a0a0');
});
$(".Club").click(function(){
    $(".Club a").css('color','#555');
    $(".Center a").css('color','#a0a0a0');
    $('.LAB a').css('color','#a0a0a0');
    $(document).attr("title","俱乐部简介");
});
$(".Center").click(function(){
    $(".Center a").css('color','#555');
    $(".Club a").css('color','#a0a0a0');
    $('.LAB a').css('color','#a0a0a0');
    $(document).attr("title","中心简介");
});
$(".LAB").click(function(){
    $(".LAB a").css('color','#555');
    $(".Club a").css('color','#a0a0a0');
    $('.Center a').css('color','#a0a0a0');
    $(document).attr("title","实验室简介");
});