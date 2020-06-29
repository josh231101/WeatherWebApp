const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.set("view engine", "ejs");

let imgWeatherUrl = "https://cdn.naturettl.com/wp-content/uploads/2014/07/22014424/featured4.jpg"
app.get("/",function(req, res){
  res.render("index",{
    imgWeatherUrl : imgWeatherUrl,
    city : "",
    temperature : ""
  })
});


app.post("/",function(req,res){
  const city = req.body.city;
  const apiKey = "736e90ffa8b745b5b82c3fee64e9a86e";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city
  + "&appid="+ apiKey + "&units=" + unit;

  https.get(url,function(response){
    if(response.statusCode != 404){


    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "http://openweathermap.org/img/wn/"+ icon +"@4x.png";

      switch (icon) {
        case "01d":
        case "01n":
        case "03d":
        case "03n":
        case "02d":
        case "02n":
          imgWeatherUrl = "https://www.softwareheritage.org/wp-content/uploads/2017/12/clearsky.png"
          break
        case "09d":
        case "09n":
        case "10d":
        case "10n":
        imgWeatherUrl = "https://live.staticflickr.com/3671/32130416814_285c501512_b.jpg"
            break
        case "11d":
        case "11n":
        imgWeatherUrl = "https://www.wallpaperflare.com/static/141/423/735/landscape-lightning-house-reflection-wallpaper.jpg"
          break
        case "13d":
        case "13n":
        imgWeatherUrl = "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/11/Knuten-sunrise-winter-e1511472557708.jpg?resize=750%2C501&ssl=1"
          break
        case "50d":
        case "50n":
        imgWeatherUrl = "https://www.ephotozine.com/articles/beautiful-misty-landscape-awarded-potw-accolade--34012/images/Mist-over-Callander.jpg"
          break
        default:
          imgWeatherUrl = "https://www.wallpaperup.com/uploads/wallpapers/2013/07/16/119101/ec0b001abf48f460a9d1dfb8b2514dc4-700.jpg"
      }

      res.render("index.ejs",{
      imgWeatherUrl : imgWeatherUrl,
        temperature : temp + " °C",
        city : city
      })

    });
  }else{
    res.render("index",{
      imgWeatherUrl : imgWeatherUrl,
      city : "",
      temperature : ""
    })
  }
  });
});
app.listen(8080,function(){
  console.log("Website running on port 8080");
})
