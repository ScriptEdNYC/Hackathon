var count = 1;
$("#x").click(function() {
    var shape = Math.floor((Math.random() * 3) +1);
    var class1 = "";
    
    if(shape == 1){
        class1 = "triangle";
    }
    
    else if(shape == 2){
        class1 = "square";
    }
    
    else if(shape == 3){
        class1 = "circle";
    }
    
    
    var color = Math.floor((Math.random() * 7) +1);
    var color1 = "";
    
    if(color == 1){
        color1 = "Red";
    }
    
    else if(color == 2){
        color1 = "Blue";
    }
    
    else if(color == 3){
        color1 = "Orange";
    }
    
    else if(color == 4){
        color1 = "Green";
    }
    
    else if(color == 5){
        color1 = "Yellow";
    }
    
    else if(color == 6){
        color1 = "Indigo";
    }
    
    else if(color == 7){
        color1 = "Violet";
    }
    
  $("#x").append("<div class='"+class1+"' id='"+count+"'</div>");
    var top = 0;
    var left = 0;
    var edge = Math.floor((Math.random() * 4) +1);
    
    if(edge == 1){
        top = 0;
        left = Math.floor((Math.random() *900) + 1);
        
    }
    else if (edge == 2){
        top = Math.floor((Math.random() *550) +1);
        left = 0;
        
    }
    else if (edge == 3){
         top = Math.floor((Math.random() *550) +1);
         left = 950;
        
    }
    else if (edge == 4){
        top = 550;
        left = Math.floor((Math.random() *1000) + 1);
        
    }
    
    $("#"+count).css({top: top+'px', left: left+'px'});
    
    if(class1 != "triangle"){
        $("#"+count).css("background-color", color1);
    }else{
        $("#"+count).css("border-bottom" ,"100px solid "+color1);
   }
   $("#"+count).delay(200).animate({
       width:'0px', height:'0px', 'border-right':'0px solid transparent', 'border-bottom':'0px solid '+color1, 'border-left':'0px solid transparent', left:'440px', top:'270px'}
   ,{duration:7000, 
     step: function(now, fx) {$(this).css('transform', 'rotate('+now+'deg)')}, complete: function (){$(this).remove();
                                                                                                     $('#blackhole').css({"border-radius":'+=10px', top:'-=5px', left:'-=5px', width:'+=10px', height:'+=10px'});                                                                                                    }});
    count++;
;});