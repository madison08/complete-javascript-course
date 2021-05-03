// let myFristJob = "Programmer"

// let mec;

// console.log(mec)



// let javaScriptIsFun = true;

// // console.log(javaScriptIsFun)

// console.log(typeof javaScriptIsFun)
// console.log(typeof 55)
// console.log(typeof 'javaScriptIsFun')

// javaScriptIsFun = 'Yes'

// console.log(typeof javaScriptIsFun)

// let year;

// console.log(year)

// console.log(typeof year)

// year = 1991;

// console.log(typeof year)

// console.log(typeof null)

// let age = null;

// console.log(age)
// console.log(typeof age)

/*
let age = 30;

age = 35;

const birthday = 1998;

// birthday = 2020;

// const job = "Web developper";

// console.log(job)

// console.log(age)

var job = 'programmer';

job = "developper"


lastName = 'madison'

console.log(lastName)

*/


// const currentYear = 2037;


// const ageMadison = currentYear - 1998;
// const ageSara = currentYear - 2018;
// console.log(ageMadison * 2,'Sara age = ' + ageSara, 2 ** 3)


// assigment operator

// const firstName = "madison";
// const lastName = "Attobra";

// console.log(lastName + ' ' + firstName)

// let x = 10 + 5;

// x += 10;

// x *= 4;

// x++;

// x--;
// x--;    

// console.log(x);

// // Comparaison operator

// console.log(ageMadison > ageSara);
// console.log(ageMadison < ageSara);
// // console.log(ageSara >= 18);

// const isFullAge = ageSara >= 18;
// console.log(isFullAge);

// const now = 2037;
// const ageMadison = now - 1998;
// const ageSarar = now - 2018;

// console.log(now - 1998 > now - 2018);

// // console.log(25-10-5)

// let x,y;

// x = y = 25 - 10 - 5;

// console.log('x', x , 'y', y)

// const averageAge = ageMadison + ageSarar / 2;

// console.log('madison', ageMadison ,'sara', ageSarar)

// console.log(averageAge)



// premier defis


// IMC = mass / taille au carree 
// mass = taille * taille
// (mass en kg , taille en metre)

// const marksWeight = 78;
// const marksTall = 1.69;

// const johnWeight = 92;
// const johnTall =  1.95;

// const markHigherBMI  = (marksWeight / marksTall ** 2 > johnWeight / johnTall ** 2);

// console.log(marksWeight / marksTall ** 2)
// console.log(johnWeight / johnTall ** 2)

// console.log(markHigherBMI)

// const firstName = 'jonas'
// const job = 'teacher'
// const birthday = 1991;
// const year = 2037;

// const jonas = " I'm  " + firstName + ', a ' + (year - birthday) + 'year old' + job + '!'

// const jonas = `I'm ${firstName}`

// console.log(jonas)

// const age = 10;

// if(age >= 18){
//     console.log("vous avez l'autorisation de conduire ")
// }else{
//     console.log(`soyez patient il vous reste : ${18 - age} ans`)
// }

// const birthYear = 1991;

// let century;

// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }

// console.log(century)

//========= Bmi teste with statement ===========

// const marksWeight = 78;
// const marksTall = 1.69;

// const johnWeight = 120;
// const johnTall =  1.95;

// const markBmi =  marksWeight / marksTall ** 2
// const jonhBmi = johnWeight / johnTall ** 2

// if(markBmi > jonhBmi){
//     console.log(`le BMI de mark (${markBmi}) est plus eleve que celui de john (${jonhBmi})`)
// }else{
//     console.log(`le BMI de john (${jonhBmi}) est plus elever que celui de mark (${markBmi})`)
// }



// Conversion de type

// const inputYear = '1991'

// console.log(Number(inputYear))

// console.log(inputYear)

// console.log(Number(inputYear) + 18)

// console.log(Number('madison'))

// console.log(typeof NaN)

// console.log(2021)
// console.log(String(2021))

// coercition de type == le faite que javascript convertisse automatiquement de manniere implicite


// console.log('I am ' + 23)

// console.log('23' - '10' - 3)   // 10
// console.log('23' + '10' + 3)  // 23103
// dans ce cas les chaine sont convertir en nombre

// SEULEMENT DANS LE CAS DE PLUS(+) AVEC LES CHAINE QU'IL SONT TOUS CONVERTIR EN CHAINE

// console.log('23' > '18')



// let n = '1' + 1; // '11'
// n = n - 1; // '11' - 1 (convertire '11' en 11)
// console.log(n)

// VRAI - FAUX

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('madison'))
// console.log(Boolean({}))

// const money = 100;

// if(money){
//     console.log("Don't spend it all ;")
// }else{
//     console.log("You should get a job")
// }

// let height;

// if(height !== undefined){
//     console.log("YAY ! Height is defined")
// }else{
//     console.log("Height is not defined")
// }



// const age = 18;

// if(age === 18) console.log('you just became an adult (Strict)')
// if(age == 18) console.log('you just became an adult (Loose)')

// const number = Number(prompt("What is favourite number"));

// console.log(number)
// console.log(typeof number)

// if(number === 23 ){
//     console.log('cool')
// }else if(number === 7){
//     console.log("perfect")
// }else{
//     console.log("sorry")
// }

// if(number !== 23){
//     console.log("is different of 23")
// }


// const hasDriversLicence = true;
// const hasGoodVision = true;

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence)

// const shouldDrive = hasDriversLicence && hasGoodVision;


// if(shouldDrive){
//     console.log("sarah is able to drive")
// }else{
//     console.log("someone else should drive...")
// }

// const isTired = false;

// console.log(hasDriversLicence && hasGoodVision && isTired);


// const shouldDrive = hasDriversLicence && hasGoodVision &&;


// if(hasDriversLicence && hasGoodVision && !isTired){
//     console.log("sarah is able to drive")
// }else{
//     console.log("someone else should drive...")
// }


// TEST DATA : 

// const dolphinsScore =  96 + 108 + 89;
// const koalasScore =  88 + 91 + 110;

// const dolphinsScore = 10 //96 + 108 + 89;
// const koalasScore = 10 //88 + 91 + 110;

// const moyDolphins = dolphinsScore / 3;
// const moyKoalas = koalasScore / 3;


// if(moyDolphins > moyKoalas){
//     console.log("Winner is : Dolphins");
// }else if(moyDolphins < moyKoalas){
//     console.log("Winner is : Koalas")
// }else{
//     console.log("Desoler nous avons pas de vainqueur !")
// }

// BONUS ONE


// if(moyDolphins > moyKoalas && moyDolphins >= 100){
//     console.log("Winner is : Dolphins");
// }else if(moyDolphins < moyKoalas && moyKoalas >= 100){
//     console.log("Winner is : Koalas")
// }else if(moyDolphins < moyKoalas && moyKoalas <= 100){
//     console.log("0 Winner")
// }else if(moyDolphins > moyKoalas && moyDolphins <= 100){
//     console.log("0 Winner")
// }else if(moyDolphins == moyKoalas && moyKoalas >= 100 && moyDolphins >= 100){
//     console.log("Match null !")
// }else{
//     console.log("nous avons pas de vainqueur !!")
// }

// switch

// const day = "monday";

// switch(day){
//     case "monday":
//         console.log("it is a work day")
//         break;
//     case "tuesday":
//         console.log("today is today")
// }


// const age = 10;

// // const teste = age >= 18 ? "you can play footbal 🎈 " : "I like to drink water 🌊 " 

// console.log(`${ age >= 18 ? "you can play footbal 🎈 " : "I like to drink water 🌊 " }`)


// CODING-CHALLENGE
// DATA: bill-> 275,40,430

// facture et pourboire
// pourboire est de 15% si la facture est entre 50 et 300 --> si c'est different alors c'est de 20%;

let tip = 430;

console.log(`${ tip >= 50 && tip <= 300 ? "Le pourcentage est " + tip * 15 / 100 + " le total est : " + ((tip * 15 / 100) + tip)  : "Le poucenatge est " + tip * 20 / 100 + ", Le total est : "+ ((tip * 20 / 100) + tip) }`)








