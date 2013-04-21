var allcolor = new Array();

allcolor[0] = "red"
allcolor[1] = "green"
allcolor[2] = "blue"

function updatepal() {
    
    $("#pal1").css("background-color", allcolor[0]);
    $("#pal2").css("background-color", allcolor[1]);
    $("#pal3").css("background-color", allcolor[2]);
};

function createGrid() { //creates grids 
    for (var i = 1; i <= 200; i++) { //runs a for loop and displays squares
        $('#x').append('<div class="square"></div>'); //adds a square     
    };
};

function getcolor(color) {
   
   if (color != allcolor[0]) {
       allcolor[2] = allcolor[1]; //shifts the the colors over in pal
       allcolor[1] = allcolor[0];
       allcolor[0] = color;
       
       updatepal(); //shows the new colors
   }; 
};

createGrid();//runs the createGrid fucntion
$(".square").css("background-color","yellow"); 

$(".square").hover(function() { //so that you can change the color 
     var foo = $("input").val(); 
     getcolor(foo);
    $(this).css("background-color",foo);
});

$("#clear").click(function(){ //for the clear button
    $(".square").css("background-color", "yellow");
 });

$(".palsquare").click(function() { //when pal is clicked 
    var thecolor = $(this).css("background-color"); // finds the color 
    $("input").val(thecolor); // sets the color
});

updatepal();
