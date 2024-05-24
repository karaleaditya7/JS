const students = ['aditya','rohan','karthik']
students[0] = 'aditya karale'
// students = 'rohan'   ==>we cant assign value to constant variable,but we can change the existing values assign to const variable

console.log(students)


// add the vaues in array at the end

students.push('alexa')

console.log(students)

// in java script you can insert any datatype in a array

const myArray = [1,true, 'aditya', "😀"]
// we can push obj in arrays
myArray.push({ name:"patilwada" })

console.log(myArray)
console.log(myArray.indexOf("aditya"))

//pop ==> removes last index value
myArray.pop()
console.log(myArray)

myArray.reverse()
console.log(myArray)