//alert("Working");
var imageOneValue = Math.floor(Math.random()*6)+1;
var imageOneSource = "./images/dice"+imageOneValue+".png";
var imageOne = document.querySelector(".dice-1 img");
imageOne.setAttribute("src", imageOneSource);

var imageTwoValue = Math.floor(Math.random()*6)+1;
var imageTowSource = "./images/dice"+imageTwoValue+".png";
var imageTwo = document.querySelector(".dice-2 img");
imageTwo.setAttribute("src", imageTowSource);

if( imageOneValue > imageTwoValue){
    document.querySelector("h3").innerHTML = "Player 1 has won the match!"
}

else if( imageTwoValue > imageOneValue){
    document.querySelector("h3").innerHTML = "Player 2 has won the match!"
}

else{
    document.querySelector("h3").innerHTML = "The match has tied!"
}



    
