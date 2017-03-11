$(function() {
    
    $('.CTD').click(function(){
        $('#current').removeAttr("id");
        $(this).attr("id","current");
        $(".title span").text("综合技术部");
        $("[for='_intr']").text("个人简介（可选）");
        $("#_intr").attr("required",false);
        $(document).attr("title","综合技术部");
        $("[name='type']").val(1);
    });
    $('.DTD').click(function(){
        $('#current').removeAttr("id");
        $(this).attr("id","current");
        $(".title span").text("数技部");
        $("[for='_intr']").text("个人简介（掌握技能、比赛及项目经历）");
        $("#_intr").attr("required",true);
        $(document).attr("title","数技部");
        $("[name='type']").val(2);
    });
    $('.RTD').click(function(){
        $('#current').removeAttr("id");
        $(this).attr("id","current");
        $(".title span").text("研发部");
        $("[for='_intr']").text("个人简介（掌握技能、比赛及项目经历）");
        $("#_intr").attr("required",true);
        $(document).attr("title","研发部");
        $("[name='type']").val(3);
    });
    $('#goodcover').click(function(){
        $('#Popup_RTD').hide();
        $('#Popup_CTD_DTD').hide();
        $(this).hide();
    });
    $('#Popup_CTD_DTD span').click(function(){
        $('#Popup_CTD_DTD').hide();
        $('#goodcover').hide();
    });
    $('#Popup_RTD span').click(function(){
        $('#Popup_RTD').hide();
        $('#goodcover').hide();
    });

    $('#Popup_RTD').center();
    $('#Popup_CTD_DTD').center();
    jQuery.fn.center = function(loaded) {
        var obj = $(this);
        body_width = parseInt($(window).width());
        body_height = parseInt($(window).height());
        block_width = parseInt(obj.width());
        block_height = parseInt(obj.height());

        left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
        if (body_width < block_width) {
            left_position = 0 + $(window).scrollLeft();
        };
        top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
        if (body_height < block_height) {
            top_position = 0 + $(window).scrollTop();
        };

        if (!loaded) {
            obj.css({
                'position': 'absolute'
            });
            obj.css({
                'top': ($(window).height() - $('#code').height()) * 0.5,
                'left': left_position
            });
            $(window).bind('resize', function() {
                obj.center(!loaded);
            });
            $(window).bind('scroll', function() {
                obj.center(!loaded);
            });
        } else {
            obj.stop();
            obj.css({
                'position': 'absolute'
            });
            obj.animate({
                'top': top_position
            }, 200, 'linear');
        }
    }
    
});
function showPopup_RTD(){
    $('#goodcover').show();
    $('#Popup_RTD').fadeIn();
    
}
function showPopup_CTD_DTD(){
    $('#goodcover').show();
    $('#Popup_CTD_DTD').fadeIn();
}


                // alert('now in ad');
                // var type= $("input[name='type']").val()
                // var _name= $("input[name='_name']").val()
                // var _sex= $("input[name='_sex']").val()
                // var _email= $("input[name='_email']").val()
                // var _qq= $("input[name='_qq']").val()
                // var _git= $("input[name='_git']").val()
                //var uname = $("#username").val();
                // var url = window.location.href
                // $.post(url,{
                //     'type':type,
                //     '_name':_name,
                //     '_sex':_sex,
                //     '_email':_email,
                //     '_qq':_qq,
                //     '_git':_git
                // }, function(ret){
                //     if (ret == "1") {
                //         alert('1');
                //     } else if (ret == "2" || ret == "3") {
                //         alert('2');
                //     } else {
                //         alert('0');
                //     }
                //     //$('#hint').html(ret);
                // })
// }