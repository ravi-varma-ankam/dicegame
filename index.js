/*Write Js so that after refreshing webpage player with highest die roll is declared winner.
Check the video in the drive folder to see how your website should function.*/

player1=prompt('Enter the name of Player 1');
player2=prompt('Enter the name of Player 2');

var score1=0;
var score2=0;

document.querySelectorAll('p')[0].innerHTML = player1;
document.querySelectorAll('p')[1].innerHTML = player2;


window.onload = function(){
    //firstdice
    const randomFirstNumber = Math.floor(Math.random() * 6) + 1;
    const randomFirstDiceImage = 'Dice_images/dice' + randomFirstNumber + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', randomFirstDiceImage);


    //second dice

    const randomSecondNumber = Math.floor(Math.random() * 6) + 1;
    const randomSecondDiceImage = 'Dice_images/dice' + randomSecondNumber + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', randomSecondDiceImage);


    if (randomFirstNumber > randomSecondNumber) {
        document.querySelector('h1')[1].innerHTML = "The Winner is " + player1;
        score1 = score1+1;
        // updatescore();
    }
    else if (randomFirstNumber < randomSecondNumber) {
        document.querySelector('h1')[1].innerHTML = "The Winner is " + player2;
        score2 = score2+1;
        // updatescore();
    }
    else {
        document.querySelector('h1').innerHTML = "Match Draw";
    }

    updatescore();
}


function updatescore(){
document.querySelectorAll('p')[2].innerHTML = "Score of " + player1 + " is : " + Number(score1);
document.querySelectorAll('p')[3].innerHTML = "Score of " + player2 + " is : " + Number(score2);
}

function playAgain(){
    const randomFirstNumber = Math.floor(Math.random() * 6) + 1;
    const randomFirstDiceImage = 'Dice_images/dice' + randomFirstNumber + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', randomFirstDiceImage);


    //second dice
    const randomSecondNumber = Math.floor(Math.random() * 6) + 1;
    const randomSecondDiceImage = 'Dice_images/dice' + randomSecondNumber + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', randomSecondDiceImage);


    if (randomFirstNumber > randomSecondNumber) {
        document.querySelector('h1').innerHTML = "The Winner is " + player1;
        score1 = score1+1;

    }
    else if (randomFirstNumber < randomSecondNumber) {
        document.querySelector('h1').innerHTML = "The Winner is " + player2;
        score2 = score2+1;

    }
    else {
        document.querySelector('h1').innerHTML = "Match Draw";
    }
    updatescore();
}


