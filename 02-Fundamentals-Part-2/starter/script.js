'use strict'

// let hasDriverLicence = false;

// const passTest = true;

// if(passTest){
//     hasDriverLicence = true;
// }

// if(hasDriverLicence) console.log("I can Drive")

// const interface = true;

// const private = 555;

// const if = 22;

// FUNCTION 

// function logger(){
//     console.log("My name is madison")
// }

// logger()


// function fruitProcesor(apple, orange){
//     // console.log(apple, orange);
//     const juice = `juice with ${apple} apples and ${orange}`;
//     return juice;
// }

// fruitProcesor(5, 0)

// const appleJuice = fruitProcesor(5, 0)

// console.log(appleJuice)
// console.log(fruitProcesor(5, 0))

// function calcAge1(birthYear){

//     return 2037 - birthYear;
// }

// const age = calcAge1(1998)
// console.log(age)


// const calcAge2 = function (birthYear){

//     return 2037 - birthYear;
// }

// const age2  = calcAge2(1991)

// console.log(age2)


// Function expression

// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

//Arrow function 

// const calcAge3 = birthYear => 2037 - birthYear

// const age3 = calcAge3(1990);

// console.log(age3)


// const yearUnitRetirement = (birthYear, firstName) => {

//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retirement in  ${retirement} years`
// }

// console.log(yearUnitRetirement(1998, "madison"));
// console.log(yearUnitRetirement(1995, "Elishama"))



// Function calling Function


// function cutFruitPieces(fruit){
//     return fruit * 4
// }

// function fruitProcesor(apple, orange){

//     const applePieces = cutFruitPieces(apple)
//     const orangePieces = cutFruitPieces(orange)

//     console.log(apple, orange);
//     const juice = `juice with ${applePieces} apples and ${orangePieces}`;
//     return juice;
// }

// console.log(fruitProcesor(2,3))


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


// const yearUnitRetirement = function (birthYear, firstName){

//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement >= 0){

//         return retirement;

//     }

//     return 44;
//     // return `${firstName} retirement in  ${retirement} years`
// }


// console.log(yearUnitRetirement(1991, "madison"))
// console.log(yearUnitRetirement(1970, "mike"))



// const averageKoalas = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const averageDolphins = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgKoalasScore = averageKoalas(44,23,71);
// const avgDolhinsScore = averageDolphins(85,54,41);

// const checkWinner = (avgDolhins, avgKoalas) => {


//     if(avgDolhins  >= avgKoalas *2){
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas}) `);
//     }else if(avgKoalas >= avgDolhins *2){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     }else {
//         console.log("Pas de gagnant !")
//     }
// };

// // const avgDolhins = average();

// // console.log(average(44,23,4))

// checkWinner(avgDolhinsScore,avgKoalasScore);



// const friends = ['Micahel','Steven','Peter']
// console.log(friends)

// console.log(friends[0])

// console.log(friends.length)

// console.log(friends[friends.length - 1])

// friends[2] = "new friends"

// console.log(friends)

// // friends = ['hghgg', 'other friend']

// const fristName = "Madison";

// const madison = [fristName, 'Attobra', 2021 - 1998, 'Developper', friends]

// // console.log(madison)

// // Exercise 

// function calcAge(birthYear){

//     return 2037 - birthYear;
// }


// const years = ['1990','1967','2010','2018'];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [age1,age2,age3]

// console.log(ages)



// const friends = ['Micahel','Steven',23,'Peter']


// // Add elements

// const newVal = friends.push("jay")
// friends.push(42)

// // friends.unshift("first friends")


// console.log(newVal)
// console.log(friends)


// // friends.pop()
// // friends.pop()

// friends.shift()

// console.log(friends)

// console.log(friends.indexOf(23))

// // console.log(friends.includes('Steven'))

// if(friends.includes("Peter")){
//     console.log("You have a friends call Peter")
// }


// Object

// const madisonArray = [
//     'Madson',
//     'Attobra'
// ]

// const madison = {
//     firstName: 'Madison',
//     lastName: 'Attobra',
//     age: 22,
//     friends: [
//         'Steven',
//         'Peter'
//     ]
// }


// console.log(madison.friends)



// const madison = {
//     firstName: 'Madison',
//     lastName: 'Attobra',
//     age: 22,
//     job: 'Developper intern',
//     friends: [
//         'Grando cecile 💘',
//         'Desire',
//         'Maxime',
//         'Patrick',
//         'Andre',
//         'Eloge',
//         'Jpson',
//         'Unknown'
//     ]
// }


// console.log(madison.lastName)

// console.log(madison["firstName"])

// const nameKey = 'Name';

// console.log(madison["first"+`${nameKey}`])


// const quiz = prompt("what do you want to know on madison")




// if(!madison[quiz]){
//     console.log("Renseigne une bonne proprieter");
// }else{

//     console.log(madison[quiz]);

// }

// madison.loaction = "Abidjan"

// madison["twitter"] = "Is not exist ooh"

// console.log(madison)


// // Challenge
// // "Jonas has 3 friends, and his best friends is called Michael "
// // madison , 3, Michael

// console.log(`${madison.lastName}  a ${madison.friends.length}  friends , his best friends his ${madison.friends[0]} `)




// const madison = {
//     firstName: 'Madison',
//     lastName: 'Attobra',
//     birthday: 1998,
//     job: 'Developper intern',
//     friends: [
//         'Grando cecile 💘',
//         'Desire',
//         'Maxime',
//         'Patrick',
//         'Andre',
//         'Eloge',
//         'Jpson',
//         'Unknown'
//     ],
//     hasDriersLicence: false,
//     // calcAge: function(birthday){

//     //     return 2037 - birthday;
//     // }

//     // calcAge: function(){

//     //     // console.log(this)

//     //     return 2037 - this.birthday;
//     // }

//     calcAge: function(){

//         // console.log(this)

//         this.age = 2037 - this.birthday;

//         return this.age
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} old , ${this.job} and he ${this.hasDriersLicence ? 'has a driver\'s licence' : 'he has no a driver\'s licence'}`
//     }

    
// }


// console.log(madison.calcAge());

// console.log(madison.age)


// console.log(madison['calcAge'](1991));


//Challenge

// "madison is a 46 old developper. and he has a driver's licence (and he has no a driver's licence)  "

// console.log(madison.getSummary())


// const mark = {
//     name: 'Mark miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){

//         this.valBMI = this.mass / this.height ** 2; 

//         return this.valBMI;

//     }
// }

// const john = {
//     name: 'Jonh smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){

//         this.valBMI = this.mass / this.height ** 2; 

//         return this.valBMI;

//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.valBMI)
// console.log(john.valBMI)


// if(mark.valBMI > john.valBMI){
//     console.log(`${mark.name} BMI (${mark.valBMI}) is higher than ${john.name} BMI (${john.valBMI})`)
// }else if(john.valBMI > mark.valBMI){
//     console.log(`${jonh.name} BMI (${jonh.valBMI}) is higher than ${mark.name} BMI (${mark.valBMI})`)
// }



// for(let i = 1; i <= 10; i++){
//     console.log(`lifting weight repetition ${i}`);
// }




// const madisonArray = [
//     'Madson',
//     'Attobra',
//     2037 - 1998,
//     'developper intern',
//     ['Michael','Peter','Steven'],
//     true
// ]

// const madisonArrayType = [];

// for(let i = 0; i < madisonArray.length;i++){
//     console.log(madisonArray[i], typeof madisonArray[i]);

//     madisonArrayType.push(typeof(madisonArray[i]))
// }

// console.log(madisonArrayType)

// const year = [
//     1991,
//     2007,
//     1969,
//     2020
// ];

// const age = [];

// for(let i = 0; i < year.length; i++){
//     age.push(2037 - year[i]);
// }

// console.log(age)





// for(let i = 0; i < madisonArray.length;i++){

//     if(typeof madisonArray[i] !== 'string'){
//         continue;
//     }

//     console.log(madisonArray[i], typeof madisonArray[i]);
// }


// console.log('------------  Break -------------------------');
// for(let i = 0; i < madisonArray.length;i++){

//     if(typeof madisonArray[i] === 'number'){
//         break;
//     }

//     console.log(madisonArray[i], typeof madisonArray[i]);
// }






// const madisonArray = [
//     'Madson',
//     'Attobra',
//     2037 - 1998,
//     'developper intern',
//     ['Michael','Peter','Steven'],
//     true
// ]


// for(let i = 0;i <= madisonArray.length; i++ ){
//     console.log(madisonArray[i])

//     for(let y = 0; y < madisonArray[4].length; y ++){
//         console.log(madisonArray[4][y])
        
//     }
// }

// for(let i = 0; i <= 5 ;i++){
//     console.log(`Chapeter ${i}`);

//     for(let y = 0; y <= 3; y++){
//         console.log(`part ${y}`);
//     }
// }



// for(let i = madisonArray.length - 1; i >= 0 ; i--){
//     console.log(madisonArray[i])


// }

// for(let rep = 0; rep <= 10; rep++){
//     console.log(`lifting weights repetition ${rep}`)
// }


// let i = 0;


// while(i <= 10){

//     console.log(`lifting weights repetition ${i}`)

//     i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// console.log(dice)


// let x = 0;

// while(dice != 6 ){
    
//     console.log(dice)

//     dice = Math.trunc(Math.random() * 6) + 1
// }


// Final Challenge


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

let tips = [];

let totals = [];

const caltip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0; i < bills.length; i++){

    const tip = caltip(bills[i]);

    tips.push(tip);

    totals.push(tip + bills[i])


}

console.log(bills, tips, totals)



let sum = 0;

const calcAverage = function(arr){

    for(let i = 0; i < arr.length; i++){
        
        sum = sum + arr[i];
        
    }

    return sum;
}


console.log(calcAverage([10, 3, 5]))







