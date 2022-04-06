const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')

const tempval = document.getElementById('tempval')
const temp_status = document.getElementById('temp_status')


// https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=83cabb98064141d59aa7ff4a61674b64


const getInfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value
    if(cityVal===""){
        cityName.innerText = `Plz write name before search`
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=83cabb98064141d59aa7ff4a61674b64`
            const responce = await fetch(url)
            const data = await responce.json()
            // console.log(data);
            const arrData = [data]

            tempval.innerText = arrData[0].main.temp

const tempMood = arrData[0].weather[0].main
// condition to check sunny or cloudy
if (tempMood == "Clear") {
    temp_status.innerHTML = 
        "<i class='fas fa-sun'></i>"
} else if (tempMood == "Clouds") {
    temp_status.innerHTML = 
        "<i class='fas fa-cloud'></i>"
} else if (tempMood == "Rain") {
    temp_status.innerHTML = 
        "<i class='fas fa-cloud-rain'></i>"
} else{
    temp_status.innerHTML = 
        "<i class='fas fa-sun'></i>"
}










        } catch (error) {
            cityName.innerText = `Plz enter the city name properly`
        }
    }
}

submitBtn.addEventListener('click', getInfo)
