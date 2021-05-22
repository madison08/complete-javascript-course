// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';




// // prettier ignorer
// // BUG: 

// // DEBUG :


// // NOTE:

// // TODO:

// // FIXEME:


// // console.log("hello litlle world")

// // console.log("ohh is great 🌟 ")

// // CHALLENGE
// // Ecris une fonction qui recoit une chaine de caractere en paramatre
// // et retourne cette meme chaine sans les voyelle

// const voy = ["a","e","i","o","u","A","E","I","O","U"];


// function disemvowel(str) {

//     let newStr = []

//     str = str.replace(/(\r\n|\n|\r)/gm, "")


//     for(let i = 0; i < str.length; i++){

//         console.log(str[i])

//         if(!voy.includes(str[i])){

//             newStr.push(str[i])
//         }
        
//     }

//     newStr =  newStr.join('')

//     return newStr;
// }

// let result = disemvowel("Hp b NbhPXxylWMy LTjfxnZnBxbwzm dTYKzV WwWQz lwlNR");

// console.log(result)

// if(result === "Hp b NbhPXxlWM LTjfxnZnBxbwzm dTKzV WwWQz lwlNR"){
//     console.log("success")
//     console.log(typeof result)
// }else{
//     console.log("error")
//     console.log(typeof result)
// }

// ----work---------


// PROBLEM 1
// Calculer l'amplitude et la tempearture, souvent il y'a des erreur de capteur

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// //1) que sifnifie vraiment l'apmplitude de temperature : 
// // - c'est la difference entre les temperature les plus elever et les plus basse de la baie
// // - comment calculer la temperature maximum et minimum
// // - A quoi resemble une erreur de capteur et que faire ?

// // 2) Divisons le probleme en sous-probleme
// // - Comment ignorer les erreur 
// // - Trouver la valeur maximale dans le tableau
// // - Trouver la valeur minimale dans le tableau
// // - Soustraire la valeur maximale par la valeur minimale (amplitude) puis renvoyer


// const calcTempAmplitude = function(temp){

    
//     let max = temp[0]
//     let min = temp[0]
//     for(let i = 0; i < temp.length ;i++){
//         const curTemp = temp[i];

//         if(typeof curTemp != "number" ) continue;


//         if(curTemp > max){
//             max = curTemp
//         }
//         if(curTemp < min){
//             min = curTemp
//         }
//         // console.log(curTemp)
//     }
//     // console.log(max, min)

//     return max - min;
// }

// console.log(calcTempAmplitude(temperature))


// PROBLEM 2

// la fonction devrait recevoir maintenant deux tableau de temperature

// 1)
// -Devrions nous appeler la meme fonctionnaliter 2 fois ? non juste fusionner les deux Tableaux

// 2) Sous - probeme

//- Comment fusionner deux(2) tableaux

// const temperatureNew = [3,0, 147, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // const tableConcat = temperature.concat(temperatureNew)

// const calcTempAmplitudeNew = function(t1,t2){

//     temp = t1.concat(t2)
    
//     let max = temp[0]
//     let min = temp[0]
//     for(let i = 0; i < temp.length ;i++){
//         const curTemp = temp[i];

//         if(typeof curTemp != "number" ) continue;


//         if(curTemp > max){
//             max = curTemp
//         }
//         if(curTemp < min){
//             min = curTemp
//         }
//         // console.log(curTemp)
//     }
//     // console.log(max, min)

//     return max - min;
// }

// console.log(calcTempAmplitudeNew(temperature,temperatureNew))

// const mesureKelvin = function(){
    
//     const measurement = {
//         type: 'temp',
//         uint: 'celsius',
//         // value: Number(prompt('Degrees celsius'))
//         value: 10
//     }

//     console.log(measurement.value)

//     console.table(measurement)

//     const kelvin = measurement.value + 273;

//     return kelvin;

// }

// console.log(mesureKelvin())










// // const tableConcat = temperature.concat(temperatureNew)

// const calcTempAmplitudeBug = function(t1,t2){

//     temp = t1.concat(t2)
    
//     let max = temp[0]
//     let min = temp[0]
//     for(let i = 0; i < temp.length ;i++){
//         const curTemp = temp[i];

//         if(typeof curTemp != "number" ) continue;


//         if(curTemp > max){
//             max = curTemp
//         }
//         if(curTemp < min){
//             min = curTemp
//         }
//         // console.log(curTemp)
//     }
//     // console.log(max, min)

//     return max - min;
// }




// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1],[9, 0, 5])
// console.log(amplitudeBug)




const printForecast = function(arr){

    let str = '';

    for(let i = 0; i < arr.length; i++){
        
        str = str + `${arr[i]}°C in ${i+1} day ...`
    }

    console.log(str)

}


printForecast([17, 21, 23])

const arrTest = [1,78,54]



























