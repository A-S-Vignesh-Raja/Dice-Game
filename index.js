let player =0;
let computer=0;
let isplayer=null;
let iscomputer=null;
    
document.querySelector(".btn").addEventListener("click",function(){
    var randomNumber1=Math.random();
    randomNumber1=Math.floor(randomNumber1*6)+1;
    /*document.querySelector("img").setAttribute("src","dice" + randomNUmber1 + ".png");*/
    if(randomNumber1==1){
        document.querySelector(".img1").setAttribute("src","dice1.png");
    }
    else if(randomNumber1==2){
        document.querySelector(".img1").setAttribute("src","dice2.png");
    }
    else if(randomNumber1==3){
        document.querySelector(".img1").setAttribute("src","dice3.png");
    }
    else if(randomNumber1==4){
        document.querySelector(".img1").setAttribute("src","dice4.png");
    }
    else if(randomNumber1==5){
        document.querySelector(".img1").setAttribute("src","dice5.png");
    }
    else if(randomNumber1==6){
        document.querySelector(".img1").setAttribute("src","dice6.png");
    }
    var randomNumber2=Math.random();
    randomNumber2=Math.floor(randomNumber2*6)+1;
   /* document.querySelector(".img2").setAttribute("src","dice" + randomNUmber2 + ".png");*/
    if(randomNumber2==1){
        document.querySelector(".img2").setAttribute("src","dice1.png");
    }
    else if(randomNumber2==2){
        document.querySelector(".img2").setAttribute("src","dice2.png");
    }
    else if(randomNumber2==3){
        document.querySelector(".img2").setAttribute("src","dice3.png");
    }
    else if(randomNumber2==4){
        document.querySelector(".img2").setAttribute("src","dice4.png");
    }
    else if(randomNumber2==5){
        document.querySelector(".img2").setAttribute("src","dice5.png");
    }
    else if(randomNumber2==6){
        document.querySelector(".img2").setAttribute("src","dice6.png");
    }
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player Wins 🚩";
        player++;
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Computer Wins 😎";
        computer++;
    }
    else if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="Draw🥲😂";
    }
    
    document.querySelector(".player").innerHTML="Player = "+player;
    document.querySelector(".Computer").innerHTML="Computer = "+computer;

    
    
    
});


