$(function() {
    $('.CTD').click(function(){
        $('#current').removeAttr("id");
        $(this).attr("id","current");
        $(".title span").text("综合技术部");
        $("[for='_intr']").text("个人简介（可选）");
        $("[name='_intr']").attr("required",false);
        $(document).attr("title","综合技术部");
        $("[name='type']").val(1);
        //alert($("[name='type']").attr('name'));
        //alert($("._input[name='type']").val());
    });
    $('.DTD').click(function(){
        $('#current').removeAttr("id");
        $(this).attr("id","current");
        $(".title span").text("数技部");
        $("[for='_intr']").text("个人简介（掌握技能、比赛及项目经历）");
        $("[name='_intr']").attr("required",true);
        $(document).attr("title","数技部");
        $("[name='type']").val(2);
        // alert($("._input[name='type']").val());
    });
    $('.RTD').click(function(){
        $('#current').removeAttr("id");
        $(this).attr("id","current");
        $(".title span").text("研发部");
        $("[for='_intr']").text("个人简介（掌握技能、比赛及项目经历）");
        $("[name='_intr']").attr("required",true);
        $(document).attr("title","研发部");
        $("[name='type']").val(3);
        //alert($("._input[name='type']").val());
    });
});