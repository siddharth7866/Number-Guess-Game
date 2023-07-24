'use strict';

let nomber=Number(document.querySelector('.guess').value);
let randomNumber=Math.floor((Math.random()*19)+1);
let message=document.querySelector('.message');
let check=document.querySelector('.check');
let again=document.querySelector('.again');
let bodypic=document.getElementsByTagName('body')[0];
let displayNomber=document.querySelector('.number')
console.log(bodypic);
function checkNumber() {
    nomber=Number(document.querySelector('.guess').value);
    if (!nomber) {
        displayNomber.textContent=nomber;
        message.textContent="Please provide number😨"    
    }else if(nomber>randomNumber){
        displayNomber.textContent=nomber;
        message.textContent='Too High🤦‍♂️';
    }else if (nomber<randomNumber){
        displayNomber.textContent=nomber;
        message.textContent='Too Low🤷‍♂️';
    }else{
        displayNomber.textContent=nomber;
        message.textContent='Correct Answer💖💖';
        bodypic.style.backgroundColor="green";

    }    
}

function refresh() {
    randomNumber=Math.floor((Math.random()*19)+1);
    displayNomber.textContent='?';
    document.querySelector('.guess').value='';
    message.textContent='Start Guesing😎😎';
    bodypic.style.backgroundColor="#222"
    
}
console.log(randomNumber);
again.addEventListener('click',refresh);
check.addEventListener('click',checkNumber);





