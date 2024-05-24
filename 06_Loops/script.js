// Loop
//For loop = If you know how many times to loop

for(let i=1; i <= 10; i++){
    console.log('Aditya' + i)
}


console.log('========================')
// While loop = if youknow that you have to do the task,but you dont know how much loop it will req

// suppose mazi initialposi (ip) is at 0 and maz house 100 km var aahe, i dont know how mnay steps it will take , so i willuse while loop
let ip = 0  
let house = 100

while( ip != house){
    ip++
    console.log('Step taken'+ ip)
}


console.log('=========================')
// Do while == 1st it will run the code and then checks the condition

let initial = 50
let final = 50

do{
    initial++
    console.log('step taken'+initial)
}while(initial <= final)

// ==============

let number = 40
let guess = 0
do{
   guess = parseInt(prompt('guess a num'))
   if (guess == number){
    alert ('winner')
    break
   } 
}while(guess != 0)
