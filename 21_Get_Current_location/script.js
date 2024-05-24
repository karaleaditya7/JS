const button = document.getElementById("getLocationButton")

async function getData(lat, long){
    const promise = await fetch (`http://api.weatherapi.com/v1/current.json?key=4fdae45bc0ec48a08eb185928240705&q=${lat},${long}&aqi=yes`)

    return promise.json()
}


async function getLocation(position){
    const result = await getData(position.coords.lattitude, position.coords.longitude)
    console.log(result)
}

function failedToget(){
    console.log('there is some issue')
}

// location fetch karna is asynchronouse task, because u wont get immediate location,so u have to use async and await
button.addEventListener("click", () => {
    const result = navigator.geolocation.getCurrentPosition(getLocation,failedToget)
})