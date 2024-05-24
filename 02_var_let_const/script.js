console.log("Hello world")

// variable

// var

var age = 28
console.log(age)


// can also do
age ="aditya"

console.log(age)

// camel casing should prefer
// firstName
// var ==> Global

if (true) {
    var age = 40
}

// in above condition ,we have defined var for above fun only but as var is global, we can get var value fromoutside of fun also

console.log(age)

// =========================================

// let

// let is having local scope unlike var

let agee = 30

console.log(agee)


if (true){
    let vay = 20
    console.log(vay)
}


// console.log(vay) 
// ==> as let is having local scope,so we cant get its value outside the function 

// ============================================

// const
// const is having local scope 

// once we define const then we can chnage its value 
// e.g.
const umar = 50

// umar =60 ==> aapan jar ekda const ghetla e.g. umar,we cant define it again ,very good actually to avoid bugs 
console.log(umar)