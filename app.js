$("a > svg").css("fill", "#39ADD1");

$("a").mouseover(
function(){
    $(this).children().css("fill", "black");
});

$("a").mouseout(
function(){
    $(this).children().css("fill", "#39ADD1");
});
