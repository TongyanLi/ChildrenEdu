jQuery(document).ready(function(){
    $('#fadein_plane').css("opacity","1");
    $('#rotate_teacher1').css({"transform":"rotateX(0deg)","opacity":"1"});
    $('#rotate_teacher2').css({"transform":"rotateX(0deg)","opacity":"1"});
    $('#rotate_teacher3').css({"transform":"rotateX(0deg)","opacity":"1"});
    $('#rotate_teacher4').css({"transform":"rotateX(0deg)","opacity":"1"});

    $('#pic_teacher2').mouseover(function(){
        //$("#pic_teacher2").css({"transform":"rotateY(90deg)","opacity":"0"});
        $("#pic_teacher_nana").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    $('#pic_teacher3').mouseover(function(){
        //$("#pic_teacher2").css({"transform":"rotateY(90deg)","opacity":"0"});
        $("#pic_teacher_dingding").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
    $('#pic_teacher4').mouseover(function(){
        //$("#pic_teacher2").css({"transform":"rotateY(90deg)","opacity":"0"});
        $("#pic_teacher_yaya").css({"transform":"rotateY(0deg)","opacity":"1"});
    });
});

