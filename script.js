var city = $('.city');
var APIKey = "e72942c796089957ced10632dd7d5f7f";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + city + ",utah&units=imperial&appid=" + APIKey;
var one = $(".one");
var two = $(".two");
var three = $(".three");
var four = $(".four");
var five = $(".five");

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

var submit = $('.sbmt');

$(submit).on("click", function () {
    var city = $(".city").val().trim();
    var state = $('.state').val().trim();
    var APIKey = "e72942c796089957ced10632dd7d5f7f";
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&units=imperial&appid=" + APIKey;
    $.ajax({

        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {

            $('.city').html("<h2>" + capital_letter(response.name) + "</h2>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);
        });

})

$(submit).on("click", function go() {

    var city = $(".city").val().trim();
    var state = $('.state').val().trim();

    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?APPID=e72942c796089957ced10632dd7d5f7f&q=' + city + ',' + state;
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (reply) {
            var tempFOne = (reply.list[4].main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempFOne);
            var tempFTwo = (reply.list[12].main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempFTwo);
            var tempFThree = (reply.list[20].main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempFThree);
            var tempFFour = (reply.list[28].main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempFFour);
            var tempFFive = (reply.list[36].main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempFFive);
            console.log(reply)

            $('.city1').html("<h4>Tomorrow</h4>");
            $(".wind1").text("Wind Speed: " + reply.list[4].wind.speed);
            $(".humidity1").text("Humidity: " + reply.list[4].main.humidity);
            $(".temp1").text("Temperature (F) " + tempFOne.toFixed(2));

            $('.city2').html("<h4> The next day</h4>");
            $(".wind2").text("Wind Speed: " + reply.list[12].wind.speed);
            $(".humidity2").text("Humidity: " + reply.list[12].main.humidity);
            $(".temp2").text("Temperature (F) " + tempFTwo.toFixed(2));

            $('.city3').html("<h4> The next day</h4>");
            $(".wind3").text("Wind Speed: " + reply.list[20].wind.speed);
            $(".humidity3").text("Humidity: " + reply.list[20].main.humidity);
            $(".temp3").text("Temperature (F) " + tempFThree.toFixed(2));

            $('.city4').html("<h4> The next day</h4>");
            $(".wind4").text("Wind Speed: " + reply.list[28].wind.speed);
            $(".humidity4").text("Humidity: " + reply.list[28].main.humidity);
            $(".temp4").text("Temperature (F) " + tempFFour.toFixed(2));

            $('.city5').html("<h4> The next day</h4>");
            $(".wind5").text("Wind Speed: " + reply.list[36].wind.speed);
            $(".humidity5").text("Humidity: " + reply.list[36].main.humidity);
            $(".temp5").text("Temperature (F) " + tempFFive.toFixed(2));

        });

    localStorage.setItem("city-name", city + ',' + state)
    var cityName = localStorage.getItem("city-name");

    var button = document.createElement('button')
    button.innerHTML = cityName;
    button.className = "send";
    button.value = city + ',' + state;
    var body = document.getElementsByClassName("result")[0];
    body.appendChild(button);


    button.addEventListener("click", function () {
        var city = $(".send").val().trim();
        var state = $('.state').val().trim();
        var APIKey = "e72942c796089957ced10632dd7d5f7f";
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?" +
            "q=" + city + "&units=imperial&appid=" + APIKey;


        $.ajax({

            url: queryUrl,
            method: "GET"
        })

            .then(function (response) {



                $('.city').html("<h2>" + capital_letter(response.name) + "</h2>");
                $(".wind").text("Wind Speed: " + response.wind.speed);
                $(".humidity").text("Humidity: " + response.main.humidity);
                $(".temp").text("Temperature (F) " + response.main.temp);
            });

        var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?APPID=e72942c796089957ced10632dd7d5f7f&q=' + button.value;
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (reply) {
                var tempFOne = (reply.list[4].main.temp - 273.15) * 1.80 + 32;
                $(".tempF").text("Temperature (Kelvin) " + tempFOne);
                var tempFTwo = (reply.list[12].main.temp - 273.15) * 1.80 + 32;
                $(".tempF").text("Temperature (Kelvin) " + tempFTwo);
                var tempFThree = (reply.list[20].main.temp - 273.15) * 1.80 + 32;
                $(".tempF").text("Temperature (Kelvin) " + tempFThree);
                var tempFFour = (reply.list[28].main.temp - 273.15) * 1.80 + 32;
                $(".tempF").text("Temperature (Kelvin) " + tempFFour);
                var tempFFive = (reply.list[36].main.temp - 273.15) * 1.80 + 32;
                $(".tempF").text("Temperature (Kelvin) " + tempFFive);
                console.log(reply)

                $('.city1').html("<h4>Tomorrow</h4>");
                $(".wind1").text("Wind Speed: " + reply.list[4].wind.speed);
                $(".humidity1").text("Humidity: " + reply.list[4].main.humidity);
                $(".temp1").text("Temperature (F) " + tempFOne.toFixed(2));

                $('.city2').html("<h4> The next day</h4>");
                $(".wind2").text("Wind Speed: " + reply.list[12].wind.speed);
                $(".humidity2").text("Humidity: " + reply.list[12].main.humidity);
                $(".temp2").text("Temperature (F) " + tempFTwo.toFixed(2));

                $('.city3').html("<h4> The next day</h4>");
                $(".wind3").text("Wind Speed: " + reply.list[20].wind.speed);
                $(".humidity3").text("Humidity: " + reply.list[20].main.humidity);
                $(".temp3").text("Temperature (F) " + tempFThree.toFixed(2));

                $('.city4').html("<h4> The next day</h4>");
                $(".wind4").text("Wind Speed: " + reply.list[28].wind.speed);
                $(".humidity4").text("Humidity: " + reply.list[28].main.humidity);
                $(".temp4").text("Temperature (F) " + tempFFour.toFixed(2));

                $('.city5').html("<h4> The next day</h4>");
                $(".wind5").text("Wind Speed: " + reply.list[36].wind.speed);
                $(".humidity5").text("Humidity: " + reply.list[36].main.humidity);
                $(".temp5").text("Temperature (F) " + tempFFive.toFixed(2));

            });
    })

})

