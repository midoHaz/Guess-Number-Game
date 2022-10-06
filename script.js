'use strict';
// document.querySelector('.message').textContent='🎉correct number !';
// document.querySelector('.number').textContent=23;
// document.querySelector('.score').textContent=15;
// document.querySelector('.guess').value=15;
// console.log(document.querySelector('.guess').value);
let secret = Math.trunc(Math.random() * 20) + 1;
let highscore=0;

const displayMessage=function(message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
   displayMessage('⛔ No number!');
  } else if (guess === secret) {
    displayMessage('🎉correct number !');
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent=secret;
    document.querySelector('.number').style.width='30rem';

  if(document.querySelector('.score').textContent>highscore){
    highscore=document.querySelector('.score').textContent;
    document.querySelector('.highscore').textContent=highscore;
  }

  } else if (guess !== secret) {
    if(document.querySelector('.score').textContent>1){
        document.querySelector('.score').textContent--;
        displayMessage(guess>secret ?'📈 too heigh':'📉 too low!');
    }else{
      displayMessage('You lost the game Ya Losser 😈😈😈!');
        document.querySelector('.score').textContent=0;
    }
    
  }
});
document.querySelector('.again').addEventListener('click',function(){
   displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent='20';
    secret = Math.trunc(Math.random() * 20) + 1;
})
