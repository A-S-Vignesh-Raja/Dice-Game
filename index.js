let player =0;
let computer=0;
let isplayer=null;
let iscomputer=null;
    
document.querySelector(".btn").addEventListener("click",function(){
    var randomNumber1=Math.random()*6;
    a=Math.floor(randomNumber1)+1;
    if(a===1){
        document.querySelector(".img1").setAttribute("src","dice1.png");
    }
    else if(a===2){
        document.querySelector(".img1").setAttribute("src","dice2.png");
    }
    else if(a===3){
        document.querySelector(".img1").setAttribute("src","dice3.png");
    }
    else if(a===4){
        document.querySelector(".img1").setAttribute("src","dice4.png");
    }
    else if(a===5){
        document.querySelector(".img1").setAttribute("src","dice5.png");
    }
    var randomNumber2=Math.random()*6;
    b=Math.floor(randomNumber2)+1;
    if(b===1){
        document.querySelector(".img2").setAttribute("src","dice1.png");
    }
    else if(b===2){
        document.querySelector(".img2").setAttribute("src","dice2.png");
    }
    else if(b===3){
        document.querySelector(".img2").setAttribute("src","dice3.png");
    }
    else if(b===4){
        document.querySelector(".img2").setAttribute("src","dice4.png");
    }
    else if(b===5){
        document.querySelector(".img2").setAttribute("src","dice5.png");
    }
    if(a>b){
        document.querySelector("h1").innerHTML="Player Wins 🚩";
        player++;
    }
    else if(b>a){
        document.querySelector("h1").innerHTML="Computer Wins 😎";
        computer++;
    }
    else if(a===b){
        document.querySelector("h1").innerHTML="Draw🥲😂";
    }
    
    document.querySelector(".player").innerHTML="Player = "+player;
    document.querySelector(".Computer").innerHTML="Computer = "+computer;
    
    
});


