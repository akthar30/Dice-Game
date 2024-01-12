//function for image 1
var randomnum1 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = "images/dice"+randomnum1+".png";

document.querySelector(".img1").setAttribute("src",randomImage1);

//function for image 2
var randomnum2= Math.floor((Math.random() * 6) + 1);
var randomImage2 = "images/dice"+randomnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2)

//Declaring winner
if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 Winner";
}else if(randomnum1 < randomnum2){
    document.querySelector("h1").innerHTML = "Player 2 Winner";
}else{
    document.querySelector("h1").textContent = "Match Draw!"
}