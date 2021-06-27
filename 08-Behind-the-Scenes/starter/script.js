'use strict';


// console.log(hello(2,3))

// // console.log(cal(2,2))


// function hello(a,b){

//     const x = 10

//     console.log(this)

//     return a+b;
// }


// const cal = function(a,b){

//     return a+b;
// }



// console.log(this)


// const calcAge = function(birthday){

//     console.log(2021 - birthday)

//     console.log(this)

// }

// calcAge(1998)

// const calcAge1 = (birthday) => {

//     console.log(2021 - birthday)

//     console.log(this)

// }

// calcAge1(1999)


const madison = {
    year: 1998,
    familly: ['mec', 'boss'],
    calcAge: function(){
        console.log(this)
    }
}

madison.calcAge()


// const madCop = Object.assign({}, madison)

// madCop.year = 2020

// console.log(madCop)

// console.log


const b = {...madison};

b.familly.push('new')

b.year = 2222;

console.log(b)
