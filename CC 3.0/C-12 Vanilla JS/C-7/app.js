console.log("your server is running")

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded")

    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=23.810331&lon=90.412521&appid=4c0174b10931e93aa8e3aa499a666d4e")
        .then((response) => {
            return response.json();
        })
        .then(res => {
            console.log('data: ', res.list);
            const main = res.list[0].main
            console.warn('data: ', main)
            document.getElementById('temp').innerText = main.temp + 'F'
            document.getElementById('feels-like').innerText = main.feels_like+ 'F'
            document.getElementById('weather-description').innerText = res.list[0].weather[0].description
        })
        .catch(error => console.error(error))
})