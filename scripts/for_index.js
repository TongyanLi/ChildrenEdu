jQuery(document).ready(function () {
    $('#loading_pic1').css({"top":"29.6%","opacity":"1"});
    $('#loading_pic2').css({"top":"35.4%","opacity":"1"});
    $('#loading_pic3').css({"top":"41.3%","opacity":"1"});
    $('#loading_pic4').css({"top":"41.3%","opacity":"1"});
    $('#loading_pic5').css({"top":"41.3%","opacity":"1"});
    $('#loading_pic6').css({"top":"54%","opacity":"1"});
    $('#index_loading').css({"top":"-100%","opacity":"0"});

    $('#pic_index_wuhan').popover({
        placement:'left',
        trigger : 'hover',//鼠标以上时触发弹出提示框
        html:true,//开启html 为true的话，data-content里就能放html代码了
        content:"<div style='width: 100%'><img src='./images/map_wuhan.png'/></div>"
    });
    $('#pic_index_beijing').popover({
        placement:'bottom',
        trigger : 'hover',//鼠标以上时触发弹出提示框
        html:true,//开启html 为true的话，data-content里就能放html代码了
        content:"<img src='./images/environment_pic4.png' style='width: 100%'/>"
    });
    $('#pic_index_sz').popover({
        placement:'top',
        trigger : 'hover',//鼠标以上时触发弹出提示框
        html:true,//开启html 为true的话，data-content里就能放html代码了
        content:"<img src='./images/environment_pic6.png' style='width: 100%'/>"
    });

    var isshow = 0;
    $('#index_paopao').mouseenter(function () {
        if(isshow === 0){
            $('#pic_index_paopao1').css("opacity","1");
            setTimeout(function () {
                $('#pic_index_paopao2').css("opacity","1");
            },100);
            setTimeout(function () {
                $('#pic_index_paopao3').css("opacity","1");
            },200);
            isshow = 1;
        }
    });
    $('#index_paopao').mouseleave(function () {
        if(isshow === 1){
            setTimeout(function () {
                $('#pic_index_paopao1').css("opacity","0");
            },2000);
            setTimeout(function () {
                $('#pic_index_paopao2').css("opacity","0");
            },2100);
            setTimeout(function () {
                $('#pic_index_paopao3').css("opacity","0");
            },2200);
            isshow = 0;
        }
    });
});


