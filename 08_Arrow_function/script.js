// Arrowfunction

// syntex

const sayHello = () => {
    console.log("Hey")
}

sayHello()

const add = (a,b) => {
    return(a+b)
}

console.log(add(5,6))

// or

const addv2 = (a,b) => a + b

console.log(addv2(2,3))


// argument function which we saw is only available in functions ,not in arrow


// Hoisting ==>we first we call the function and then define the function,but this does not work in case of Arrow

sayHey()

function sayHey(){
    console.log("Hi hoisting")
}

