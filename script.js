let weather = {
    "apikey": "bc9a39f7cd85cd5ff4905ecef7891152",
    fetchWeather: function(city){
        fetch(
            // "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)

            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)

        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
        
    },

    displayWeather: function (data) { 
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: "  + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: "  + speed + " m/s";

        document.querySelector(".weather").classList.remove("loading") 
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/? " + name + "')"
    },

    // getting the search bar to work; getting the content of the search-bar and searching for it.
    search: function () {                                                       
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
  
        // To let enter key work//
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key =="Enter") {
        weather.search();
    }
})

        // To change the dummy text//
weather.fetchWeather("Denver");