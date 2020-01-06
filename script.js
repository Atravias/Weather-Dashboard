var city = "Murray";
// var search = $(".search");
var state = $(".state").text;
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + city + ",utah&units=imperial&appid=" + APIKey;
// var weatherCard = $(".wcard")

var submit = $('.sbmt');

$(submit).on("click", function () {
    var myJson = JSON.stringify(city)

    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);
        });
})