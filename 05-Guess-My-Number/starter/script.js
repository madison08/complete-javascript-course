'use strict';


// const el = document.querySelector('.message').textContent

// console.log(el)

// document.querySelector('.message').textContent = "Correct Number !"

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 50;

// document.querySelector('.guess').value = 10
// console.log(document.querySelector('.guess').value)


let randomnValue = Math.trunc(Math.random() * 20) + 1

let Score = 20;

let highScore = 0;




// document.querySelector('.number').textContent = "?"

console.log(randomnValue)



document.querySelector('.check').addEventListener('click', function(){

    const guessNumber = Number(document.querySelector('.guess').value)


    console.log(randomnValue)

    console.log(typeof guessNumber)

    //Quand l'utilisateur n'a rien saisie
    if(!guessNumber){
        document.querySelector('.message').textContent = "Pas un nombre !"


    }else{
        // Quand le nombre deviner est grand
        if(guessNumber > randomnValue){
            
            if(Score > 1){
                document.querySelector('.message').textContent = "Trop grand !!"

                document.querySelector('.score').textContent = --Score
            }else{

                document.querySelector('.message').textContent = "Vous avez perdu la partie"
                document.querySelector('.score').textContent = 0
                document.querySelector('body').style.background = "red"



            }

        }//Quand le nombre deviner est petit
        else if(guessNumber < randomnValue){

            if(Score > 1){
                
                document.querySelector('.message').textContent = "Trop peu !!"

                document.querySelector('.score').textContent = --Score

            }else{
                document.querySelector('.message').textContent = "Vous avez perdu la partie"
                document.querySelector('.score').textContent = 0
                document.querySelector('body').style.background = "red"

            }


        }// Quand le joueur gagne
        else{



            if(highScore < Score){
                document.querySelector('.highscore').textContent = Score;
            }
            

            document.querySelector('.number').textContent = randomnValue

            document.querySelector('.message').textContent = "Felicitation !!"

            document.querySelector('body').style.background = "#60b347"

            document.querySelector('.number').style.width = '30rem'

        }
    }


})



// Coding CHALLENGE

document.querySelector('.again').addEventListener('click', function(){


    randomnValue = Math.trunc(Math.random() * 20) + 1

    console.log(randomnValue)


    document.querySelector('.guess').value = ''
    Score = 20;

    document.querySelector('.score').textContent = Score

    document.querySelector('.number').textContent = '?'

    document.querySelector('body').style.background = ""

    document.querySelector('.message').textContent = 'Start guessing...'

    document.querySelector('.number').style.width = ''



})
