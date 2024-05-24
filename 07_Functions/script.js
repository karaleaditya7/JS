

function sayHello(){
    console.log('Hi Aditya')
}

sayHello()

// ======================

function add(a,b,c){
    console.log(a+b+c)
}
//  a,b,c are arguments
add(5,10,15)

// ===================

function mul(p,q){
    console.log(p*q)
}

mul(5,4)

// but in real scenario ,we dont want that function should just log the value on console,instead we want that it should return the value which we can use somewhere else

function multiply(p,q){
    // console.log(p*q)
    return p*q

}

let A = multiply(20,10)

console.log('multiplication is', A)


// argument

function addNumbers(){
    console.log(arguments)
}

addNumbers(1,2,3,4,5,6,7)

function berij(){
    let ans = 0
    for (let i=0; i< arguments.length; i++){
        ans = ans + arguments[i]
    }
    return ans
}

let result = berij(10,30,35)

console.log(result)

// spread operator