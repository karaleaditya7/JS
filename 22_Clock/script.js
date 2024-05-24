const button = document.getElementById("stp-btn")

function showTime (){
    const currentTime1 = new Date()
    // console.log(currentTime)
    const time = `${currentTime1.getHours()}:${currentTime1.getMinutes()}:${currentTime1.getSeconds()}`
    // console.log(time)
    document.getElementById("time").innerText = time
}



// showTime()
// setTimeout(()  => console.log("hi"),5000)

let stopInterval = setInterval(showTime,1000)

button.addEventListener("click", () => {
    clearInterval(stopInterval)
})
