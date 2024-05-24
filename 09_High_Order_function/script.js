// high order function  ==> function takes function as a argument


function add(a,b,cb) {
    let result = a + b 
    cb(result)
}


add(2,4, val => console.log(val))