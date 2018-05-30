jQuery(document).ready(function(){
    $('#fadein_juice').css("opacity","1");
    $('#fadein_bg').css({"opacity":"1","top":"0"});
    $('#fadein_pic1').css("opacity","1");
    $('#fadein_pic2').css("opacity","1");
    $('#fadein_pic3').css("opacity","1");
    $('#fadein_pic4').css("opacity","1");
    $('#fadein_pic5').css("opacity","1");
    $('#fadein_pic6').css("opacity","1");

    $('#pic_environment_pic1').mouseover(function () {
        $("#pic_environment_pic1").css({"width":"42.9%","height":"495px","z-index":"1050"});
    });
    $('#pic_environment_pic1').mouseout(function () {
        $("#pic_environment_pic1").css({"width":"28.6%","height":"330px","z-index":"1"});
    });

    $('#pic_environment_pic2').mouseover(function () {
        $("#pic_environment_pic2").css({"width":"42.9%","height":"495px","z-index":"1050"});
    });
    $('#pic_environment_pic2').mouseout(function () {
        $("#pic_environment_pic2").css({"width":"28.6%","height":"330px","z-index":"1"});
    });

    $('#pic_environment_pic3').mouseover(function () {
        $("#pic_environment_pic3").css({"width":"42.9%","height":"495px","z-index":"1050"});
    });
    $('#pic_environment_pic3').mouseout(function () {
        $("#pic_environment_pic3").css({"width":"28.6%","height":"330px","z-index":"1"});
    });

    $('#pic_environment_pic4').mouseover(function () {
        $("#pic_environment_pic4").css({"width":"42.9%","height":"247.5px","z-index":"1050"});
    });
    $('#pic_environment_pic4').mouseout(function () {
        $("#pic_environment_pic4").css({"width":"28.6%","height":"165px","z-index":"1"});
    });

    $('#pic_environment_pic5').mouseover(function () {
        $("#pic_environment_pic5").css({"width":"42.9%","height":"495px","left":"57.1%","z-index":"1050"});
    });
    $('#pic_environment_pic5').mouseout(function () {
        $("#pic_environment_pic5").css({"width":"28.6%","height":"332px","left":"71.4%","z-index":"1"});
    });
});



