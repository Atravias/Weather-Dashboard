var city = $('.city');
var APIKey = "e72942c796089957ced10632dd7d5f7f";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + city + ",utah&units=imperial&appid=" + APIKey;
// var weatherCard = $(".wcard")

var submit = $('.sbmt');

$(submit).on("click", function () {
    var city = $(".city").val().trim()

    var APIKey = "e72942c796089957ced10632dd7d5f7f";
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",utah&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            console.log(response)

            $('.city').html("<h2>" + response.name + "</h2>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);
        });
})