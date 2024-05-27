

let chance=0;
let computer=document.querySelectorAll("button")[0];
let user=document.querySelectorAll("button")[1];
let playerOneCounter=0;
let playerTwoCounter=0;
function getRolle(){
            document.getElementById('score1').innerHTML="player one "+playerOneCounter;
            document.getElementById('score2').innerHTML="player two"+playerTwoCounter;
    chance++;
   
    let ranndom1=Math.floor(Math.random()*6)+1;
    
    let imge1={
        img:`images/dice${ranndom1}.png`
    }
     let img1= document.querySelectorAll('img')[0];
     img1.setAttribute('src',imge1.img); 
     let ranndom2=Math.floor(Math.random()*6)+1;
    
     let imge2={
         img:"images/"+"dice"+ranndom2+".png"
     }
    
     let img2=document.querySelectorAll('img')[1];
        img2.setAttribute('src',imge2.img)
    
    if (ranndom1>ranndom2) {
        document.querySelector('h1').innerHTML="&#128681 player 1 win!";
        playerOneCounter++;
        document.getElementById('score1').innerHTML="player one win: "+playerOneCounter;
    }
    else if (ranndom1===ranndom2) {
        document.querySelector('h1').innerHTML="Draw!";
        document.getElementById('score1').innerHTML="player one win: "+playerOneCounter;
        document.getElementById('score2').innerText="player two win: "+playerTwoCounter;
        
    }else{
        document.querySelector('h1').innerHTML="&#128681 player 2 win!";
        playerTwoCounter++;
        document.getElementById('score2').innerText="player two win: "+playerTwoCounter;

    }
         if (chance==5) {
            finished()
    }
    // finised
    function finished() {
            img2.setAttribute('src','');
            img1.setAttribute('src','')
            document.getElementById('score1').innerHTML="player one "+playerOneCounter;
            document.getElementById('score2').innerHTML="player two"+playerTwoCounter;
            if (playerOneCounter>playerTwoCounter) {
                document.querySelector('h1').innerHTML=`&#128681 player one win congra play again!`;
                
            }
            else if (playerTwoCounter>playerOneCounter) {
                document.querySelector('h1').innerHTML="&#128681 player two win congra play again!";
                
            }
            else{
                document.querySelector('h1').innerHTML="&#128681 Draw the game";
            }
           
            playerOneCounter=0;
            playerTwoCounter=0;
            chance=0;
            
            
         }
        
    }

    let id; // Declare id outside the event listener function
    let hasClicked = false; // Initialize hasClicked
    
    computer.addEventListener('click', () => {
        // user.setAttribute("disabled","");
        if (!hasClicked) {
            id = setInterval(getRolle, 2000);
            hasClicked = true;
            console.log(hasClicked);
            computer.innerText="stop"
            
        } else {
            clearInterval(id);
            hasClicked = false;
            console.log(hasClicked);
         
            computer.innerText="start";
        }
    });
    
user.addEventListener('click',()=>
{clearInterval(id);
    getRolle()
    
}

);