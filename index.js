var randomNumber1= Math.random();
randomNumber1= randomNumber1*6 ;
randomNumber1= Math.floor(randomNumber1)+1;
//console.log(randomNumber1) ;

var randomNumber2= Math.random();
randomNumber2= randomNumber2*6 ;
randomNumber2= Math.floor(randomNumber2)+1;
//console.log(randomNumber1) ;

//document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png" );
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png" );
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png" );


var change= "abc" ;

if (randomNumber1> randomNumber2)
{
    change= "🚩 Player1 wins!" ;
}

else if (randomNumber2> randomNumber1)
{
    change= " Player2 wins! 🚩" ;
}

else{
    change= "Draw!" ;
}


document.querySelector("h1").innerHTML=change;