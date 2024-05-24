const age = 28

if(age>=17){
    console.log('yes,you are adult')

}

else{
    console.log('you are not an adult')
}


// ternary operator
// "?" <== ternary operator (if itis true), ":" <== else
const agee = 20

agee >= 18 ? console.log('yes') : console.log('No')
// or
let result = agee >= 18 ? 'yes' : 'No'

console.log(result)


// Switch case

const option = 2

switch(option){
    case 1: console.log('namaste')
    case 2: console.log('hello')
    case 3: console.log('hola')
}

const takeAny = 5

switch(takeAny){
    case 1: console.log('namaste')
    break
    case 2: console.log('hello')
    break
    case 3: console.log('hola')
    break
    default: console.log('Invalidoption')
}

let a = 30
let b = 40
let opt = '-'

switch(opt){
    case '+': console.log(a+b)
    break
    case '-': console.log(b-a)
    break
    case '*': console.log(a*b)
    break
    default : console.log('IDK')
}





