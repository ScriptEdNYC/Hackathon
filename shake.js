$("#shakebutton").click(function() {
    $("#square").toggleClass("shakeAnimation");
    $("#triangle").toggleClass("crazyShakeAnimation");
    $(".circle").toggleClass("crazyShakeAnimation");
    $("#horse").toggleClass("crazyShakeAnimation");
});

$("#shakebutton").click(function() {
    document.getElementById("Harmlem").play();
    
        window.setTimeout(function(){
            $("#x").addClass("background2");
        }, 15500);
});

$("#Harmlem").bind('ended', function() {
    //done playing
    $("#square").removeClass("shakeAnimation");
    $("#triangle").removeClass("crazyShakeAnimation");
    $(".circle").removeClass("crazyShakeAnimation");
    $("#horse").removeClass("crazyShakeAnimation");
    $('#x').removeClass("background2");
});