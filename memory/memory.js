var friends = [
    {
      "name": "Elbia Coral Del Llano", 
      "id": "16917397", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc7/369353_16917397_679946264_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Michelle Jimenez", 
      "id": "81700648", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/157573_81700648_1771727711_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Leiani Soto Del Llano", 
      "id": "507229678", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc6/203324_507229678_42042010_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Noel Suberví", 
      "id": "513645254", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc6/274252_513645254_1459563675_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Janet Perez", 
      "id": "513847189", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/186271_513847189_1253002938_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Zuny Rodriguez", 
      "id": "545688765", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc7/371837_545688765_467329439_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Patricia Jimenez", 
      "id": "596987395", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc6/260881_596987395_497893658_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Erika Muniz", 
      "id": "607844572", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/369937_607844572_664650260_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Ana Dolores Báez Terrero", 
      "id": "614103409", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/370160_614103409_1785319625_q.jpg", 
          "is_silhouette": false
        }
      }
    }, 
    {
      "name": "Jose Ramon Moscoso Subervi", 
      "id": "641580624", 
      "picture": {
        "data": {
          "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/49183_641580624_1861981307_q.jpg", 
          "is_silhouette": false
        }
      }
    }
  ];

// Construct the body

// Create a foor loop that iterates 20 times
for (var j=0; j<20; j++) {
    // The HTML you want to iterate and add each time
    var someHTML = '<div><img src=""></div>';
    
    // Add that HTML to the "body"
    $("#container").append(someHTML);
}

startGame();

function startGame() {
    var selected = null;
    var counter = 0;
    var friendPictures = [];
    for (var i=0; i<10; i++) {
        // Get the picture
        var friend = {
            "name": friends[i]["name"],
            "picture": friends[i]["picture"]["data"]["url"]
        }
        // Push the picture to the array friendPictures
        // someArray.push(value)
        friendPictures.push(friend);
        // Push again
        friendPictures.push(friend);
    }
    // Loop through each image element in that is 'img'
    $("img").each(function() {
        // Get a random number that between 0 and the length of the array
        // Math.floor(Math.random()*someNumber);
        // someArray.length
        var index = Math.floor(Math.random()*friendPictures.length);
        
        // Use that number to get a picture url from the array
        var picture = friendPictures[index].picture;
        var name = friendPictures[index].name;
        
        // Set the src of the image to that url
        $(this).attr("src", picture);
        $(this).attr("name", name);
        
        if(Math.floor(Math.random()*2) % 2 == 0){
            $(this).parent().addClass('round');
        }
        
        
    
        // Remove the url from the array
        friendPictures.splice(index,1);
        
        // Binding
        $(this).parent().click(function() {
            $(this).children("img").fadeIn("normal", function() {
                if (selected == null) {
                    selected = $(this);
                } else {
                    if (selected.attr("src")==$(this).attr("src")) {
                        alert("You found "+selected.attr("name")+"!");
                        $(this).removeClass("hidden");
                        selected.parent().unbind();
                        $(this).parent().unbind();
                        counter++;
                        if (counter>=10) {
                            $("img").attr("src", "http://burnie.com/dump/cowbell.gif");
                            
                            setTimeout(function() {
                                alert("Starting a new game!");
                                startGame();
                            }, 10*1000);
                        }
                    } else {
                        alert("Try again");
                        selected.fadeOut();
                        $(this).fadeOut();
                    }
                    selected = null;
                }
            });
        });
    });
    
    setTimeout(function() {
        $("img").fadeOut(function() {
            $(this).parent().addClass("hidden");
        });
    }, 10*1000);
}

setInterval(function() {
    var index = Math.floor(Math.random()*$("div.hidden").length);
    var elem = $("div.hidden:nth-child("+index+")");
    elem.addClass("distraction"+Math.floor(Math.random()*3));
    setTimeout(function() {
        elem.removeClass("distraction0");
        elem.removeClass("distraction1");
        elem.removeClass("distraction2");
    }, 1500);
},5*1000);

