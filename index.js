document.querySelector("h1").addEventListener("click",produce);
function produce(){

var randomNumber1=Math.floor(Math.random()*6);
randomNumber1++;
var randomDice=("dice"+randomNumber1+".png" )
var image1=document.querySelector(".img1");
image1.setAttribute("src",randomDice);



var randomNumber2=Math.floor(Math.random()*6);
randomNumber2++;
var randomDice=("dice"+randomNumber2+".png" )
var image1=document.querySelector(".img2");
image1.setAttribute("src",randomDice);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Players 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}