

function generate(){
    document.getElementById("card").style.display = "none"; //make forms unvisible to user
    var x = document.getElementById("animation"); //get element of animation div
    var bg = document.getElementById("bg").value; //get value of user input for background image
    var color = document.getElementById("color").value; // get value of user input for text color
    var y = document.getElementById("first").value; //get value for first name
    var z = document.getElementById("last").value; // get value for last name
    var fullname = document.getElementById("name"); //set a as print names in greeting card
    var image = document.getElementById("lucky");
    x.style.display = "block"; //make greeting card visible to user
    switch(bg){ //switch statement for background image
        case "Firework":
            x.style.backgroundImage = "url('images/fireworks.jpg')";
            x.style.backgroundSize = "320px 480px";
            x.style.opacity = "0.5";
            break;
        case "Korean Tradition":
            x.style.backgroundImage = "url('images/background.jpg')";
            x.style.backgroundSize = "320px 480px";
            x.style.opacity = "0.5";
            image.src ="images/hanbok2.jpg"
            break;
    }
    if(document.getElementById("r1").checked){ //if solar calendar is checked then print this statement
        document.getElementById("greeting").innerHTML = "Happy New Year";
    }
    else{ //if solar calendar is unchecked then print this statement
        document.getElementById("greeting").innerHTML = "Happy Chinese New Year";
    }
    switch(color){ //switch statement for text color
        case "black":
            document.getElementById("greeting").style.color="black";
            fullname.style.color= "black";
            break;
        case "blue":
            document.getElementById("greeting").style.color= "blue";
            fullname.style.color= "blue";
            break;
        case "brown":
            document.getElementById("greeting").style.color="brown";
            fullname.style.color= "brown";
            break;
        case "red":
            document.getElementById("greeting").style.color="red";
            fullname.style.color= "red";
            break;
        case "white":
            document.getElementById("greeting").style.color="white";
            fullname.style.color= "white";
            break; 
        case "green":
            document.getElementById("greeting").style.color="green";
            fullname.style.color= "green";
            break;
    }
        fullname.innerHTML=  y +" " + z; //adding first and last name then print in greeting card.
}

