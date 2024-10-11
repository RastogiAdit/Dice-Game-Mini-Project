var randomNum1 = Math.floor((Math.random())*6) + 1;
var randomNum2 = Math.floor((Math.random())*6) + 1;

var dice1 = "images/dice"+randomNum1+".png";
var dice2 = "images/dice"+randomNum2+".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if(randomNum1 > randomNum2)
{
    document.querySelector("#winnerZoro").innerHTML="🚩Zoro";
    document.querySelector("#winnerSanji").innerHTML="";
    document.querySelector("#win").innerHTML=" Wins!";
}
else if(randomNum1 < randomNum2)
{
    document.querySelector("#winnerSanji").innerHTML="Sanji";
    document.querySelector("#winnerZoro").innerHTML="";
    document.querySelector("#win").innerHTML=" Wins!🚩";
}
else
{
    document.querySelector("#winnerSanji").innerHTML="";
    document.querySelector("#winnerZoro").innerHTML="";
    document.querySelector("#win").innerHTML="🚩Draw!🚩";
}