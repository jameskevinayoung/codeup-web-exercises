$(function(){
    var sanAntonioId= 4726206;
    var weatherAppId= localStorage.getItem("googleApiKey");
    var weatherOptions = {};
    weatherOptions.id = sanAntonioId;
    weatherOptions.appId= weatherAppId;

    var weatherData = function(temp_max,temp_min,imgName,weatherName,weatherDesc,humidity,windSpeed,pressure){

        var weatherCard = "<article class='card'>";
        temp_max = parseFloat(temp_max) * 9/5 - 459.67;
        var highlowtemp= "";
        highlowtemp += Math.floor(temp_max);
        highlowtemp += "°/";

        temp_min = parseFloat(temp_min) * 9/5 - 459.67;
        highlowtemp += Math.floor(temp_min);
        highlowtemp += "°/";

        weatherCard += "<div class='temp , weather'>" + highlowtemp+ "</div>";

        var weatherimg = "";
        weatherimg += "<div class='icon, weather'><img src='http://openweathermap.org/img/w/";
        weatherimg += imgName;
        weatherimg += ".png'/>";

        weatherCard +="<img" + weatherimg+ " '/>"

        var currentweather = "";
        currentweather += "<div>";
        currentweather += data.weather[0].main;
        currentweather += " : ";
        currentweather += data.weather[0].description;
        currentweather += "</h4>";

        weatherCard += currentweather;




        var hum = "";
        hum += "<div class='humidity'>Humidity: ";
        hum += data.main.humidity;
        hum += "</h4>";
        // console.log(hum);
        // $("#weatherdisplay").append(hum;

        weatherCard += hum;

        var wind = "";
        wind += "<div class='wind'>Wind: ";
        wind += data.wind.speed;
        wind += "</div>";
        console.log(wind);
        weatherCard +=


        var press = "";
        press += "<div class='pressure'>Pressure: ";
        press += pressure;
        press += "</div>";
        weatherCard += pressure;

        return weatherCard;



    }



    $.get("https://api.openweathermap.org/data/2.5/weather", weatherOptions).done(function(data){
        console.log(data);

        // var weatherDataCard = weatherData(
        //     data.main.temp_max;
        //     data.main.temp_min;
        //     data.weather[0].icon;
        //     data.weather[0].main;
        //     data.weather[0].description;
        //     data.main.humidity;
        //     data.wind.speed;
        //     data.main.pressure
        // )
        // $("#weatherdisplay").append(weatherDataCard);






        // var highlowtemp = "";
        // var tempMax = parseFloat(data.main.temp_max) * 9/5 - 459.67;
        // var tempMin = parseFloat(data.main.temp_min) * 9/5 - 459.67;
        // highlowtemp += Math.floor(tempMax);
        // highlowtemp += "°/";
        // highlowtemp += Math.floor(tempMin);
        // highlowtemp += "°/";
        // console.log(highlowtemp);
        //
        //
        // $("#weatherdisplay").append("<h4>"+highlowtemp+"</h4>");

        // var weatherimg = "";
        //     weatherimg += "<img src='http://openweathermap.org/img/w/";
        //     weatherimg += data.weather[0].icon;
        //     weatherimg += ".png'/>"
        // console.log(weatherimg);
        // $("#weatherdisplay").append(weatherimg);

        // var currentweather = "";
        // currentweather += "<h4>";
        // currentweather += data.weather[0].main;
        // currentweather += " : ";
        // currentweather += data.weather[0].description;
        // currentweather += "</h4>";
        // console.log(currentweather);
        // $("#weatherdisplay").append(currentweather);
        //
        // var humidity = "";
        // humidity += "<h4>Humidity: ";
        // humidity += data.main.humidity;
        // humidity += "</h4>";
        // console.log(humidity);
        // $("#weatherdisplay").append(humidity);
        //
        // var wind = "";
        // humidity += "<h4>Wind: ";
        // humidity += data.wind.speed;
        // humidity += "</h4>";
        // console.log(wind);
        // $("#weatherdisplay").append(wind);
        //
        // var pressure = "";
        // pressure += "<h4>Humidity: ";
        // pressure += data.main.humidity;
        // pressure += "</h4>";
        // console.log(humidity);
        // $("#weatherdisplay").append(humidity);

    });

    $.get("https://api.openweathermap.org/data/2.5/forecast", weatherOptions).done(function(data){
        console.log(data);

        var weatherDataCard1 = weatherData(
        data.list[0].main.temp_max;
        data.list[0].main.temp_min;
        data.list[0].weather[0].icon;
        data.list[0].weather[0].main;
        data.list[0].weather[0].description;
        data.list[0].main.humidity;
        data.list[0].wind.speed;
        data.list[0].main.pressure
    );
        $("#weatherdisplay").append(weatherDataCard1);


        var weatherDataCard2 = weatherData(
            data.list[7].main.temp_max;
            data.list[7].main.temp_min;
            data.list[7].weather[0].icon;
            data.list[7].weather[0].main;
            data.list[7].weather[0].description;
            data.list[7].main.humidity;
            data.list[7].wind.speed;
            data.list[7].main.pressure
    );
        $("#weatherdisplay").append(weatherDataCard2);

        var weatherDataCard3 = weatherData(

        data.list[15].main.temp_max;
        data.list[15].main.temp_min;
        data.list[15].weather[0].icon;
        data.list[15].weather[0].main;
        data.list[15].weather[0].description;
        data.list[15].main.humidity;
        data.list[15].wind.speed;
        data.list[15].main.pressure
    );
        $("#weatherdisplay").append(weatherDataCard3);

})