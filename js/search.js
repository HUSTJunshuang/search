$(function(){
    $("#OptionBar div").click(function() {
        $("div").removeClass('selectedOpt');    // 删除其他兄弟元素的样式
        $(this).addClass('selectedOpt');        // 添加当前元素的样式
    });
});

function init() {
    document.getElementById('initial').click();
}

function getTime() {
    var Week, Weekday;
    var date = new Date();
    Week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    Weekday = date.getDay();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes + ":" + seconds + "\t" + Week[Weekday];
}