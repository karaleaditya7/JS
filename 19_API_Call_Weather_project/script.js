const button = document.getElementById("search-button")
const input = document.getElementById ("city-input")

const cityName = document.getElementById("city-Name")
const cityTime = document.getElementById("city-Time")
const cityTemp = document.getElementById("city-Temp")

// button.addEventListener("click", () => {
//     alert("clicked")


async function getData(cityName){
    const promise = await fetch (`http://api.weatherapi.com/v1/current.json?key=4fdae45bc0ec48a08eb185928240705&q=${cityName}&aqi=yes`)

    return promise.json()
}

button.addEventListener("click", async () => {
    // console.log(input.value)
    const value = input.value
    // getData(value)
    const result = await getData(value)
    console.log(result)
    
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = result.location.localtime
    cityTemp.innerText = result.current.temp_c
})