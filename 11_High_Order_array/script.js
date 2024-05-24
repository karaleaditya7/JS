const students = ['aditya','rohan','karthik'];

function print(i){
    console.log(i)
}

students.forEach(print)

// or
 
students.forEach((val) => console.log(val))



// map

const numbers = [1,2,3,4,5]
function double(n){
    return n*2
}

let newArry = numbers.map(double)

console.log(newArry)


// find

const numberss = [1,2,3,4,5,6,7]

let ans = numberss.find((num) => num===4 )
console.log(ans)