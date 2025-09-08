
function scoredisp()
{
 document.querySelector(`.score-card`).innerHTML=`Wins:${score.Wins},Losses${score.Losses},Ties=${score.Ties}`;
}
let computerMove=''; let computerMoveimg=``;
   let score = (JSON.parse(localStorage.getItem(`score`)))
|| { Wins: 0, Losses: 0, Ties: 0 }; // Proper initialization as an object

scoredisp();

 //document.querySelector(`.score-card`).innerHTML=`Wins:${score.Wins},Losses${score.Losses},Ties=${score.Ties}`;

 function pickcomputerMove()
 {
      const randomNumber=Math.random();
      
      if(randomNumber>=0&&randomNumber<1/3)
      {
         computerMove='rock';
         computerMoveimg=`<img src="rock.png" class="css-img-rock" >`;
         
      }
      else if(randomNumber>=1/3&&randomNumber<2/3)
      {
         computerMove='paper';
         computerMoveimg=`<img src="paper.png" class="css-img-paper" >`;
         
      }
      else{
         computerMove='scissor';
         computerMoveimg=`<img src="scissor.png" class="css-img-scissor" >`;
      }
      return computerMove;
 }
 function playGame(playerMove)
 {
   let result='';let img=``;
    if(playerMove==='rock')
 {      img=`<img src="rock.png" class="css-img-rock" >`;
         
         if(computerMove==='rock')
         {
            result='Tie';
         }
         else if(computerMove==='paper')
         {
            result='lost';
         }
         else{
            result='Won';
   }
}
 else if(playerMove==='paper')
{   img=`<img src="paper.png" class="css-img-paper" >`;
              
         if(computerMove==='paper')
         {
            result='Tie';
         }
         else if(computerMove==='scissor')
         {
            result='lost';
         }
         else{
            result='Won';
}
}
else if(playerMove==='scissor')
{   img=`<img src="scissor.png" class="css-img-scissor">`;
 
         if(computerMove==='scissor')
         {
            result='Tie';
         }
         else if(computerMove==='rock')
         {
            result='lost';
         }
         else{
            result='Won';
   }
}
if(result==='Won')
{
 score.Wins+=1;
}
else if(result==='lost')
{
 score.Losses+=1;
}
else{
 score.Ties+=1;
}
scoredisp();
localStorage.setItem('score',JSON.stringify(score));

document.querySelector(`.final-result`).innerHTML=`${result}. `;
document.querySelector(`.score`).innerHTML=`You <img src="${playerMove}.png" class="css-img-${playerMove}">. <img src="${computerMove}.png" class="css-img-${computerMove}" > computer`;




// localStorage.setItem(`score`.JSON.stringify(score));
// alert(`you picked ${playerMove}. computer picked ${computerMove}. You ${result}`); 
}