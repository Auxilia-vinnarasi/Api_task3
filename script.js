//get the element in the html doc with the class using DOM
const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp");

//retrieve data from api & displaying specific attributes
button.addEventListener("click", function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=30dbaf65a50158c876bd09ddd7a02f9a`)
        .then(response => response.json()) //the response reads through json
        .then(data => {
            var nameValue = data["name"];
            var tempValue = data["main"]["temp"];
            var descValue = data["weather"][0]["description"];

            name.innerHTML = nameValue;
            temp.innerHTML = Math.round(tempValue - 273) + `&#176C`; //converting temp from kelvin to celcius.and appending degree celcius symbol.
            desc.innerHTML = descValue;
        })



    .catch(err => alert("wrong city name!")); //error will be thrown if the city name is not valid
})
