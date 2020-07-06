const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const urlimage = require(__dirname + "/urlimage.js")
const date = require(__dirname + "/date.js")

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"))
app.set("view engine", "ejs");
//OTHER BACKGROUNDS FOR THE WEB
//https://i.pinimg.com/originals/96/ba/b6/96bab67b1d6ba3857c7f27f5c4909ecf.jpg
//https://drscdn.500px.org/photo/70194569/m%3D900/v2?sig=96195b13d39d9d0a6830198a2bd07b98f70752bb2054181d1710025256efb35c

const imgWeatherUrl = "https://drscdn.500px.org/photo/76564893/m%3D900/v2?sig=2ca738241f1a72d41dd1284fea71052585612514bc55623fe3b2fd5e40c73ca5"
//API CONST NEEDED
const apiKey = "736e90ffa8b745b5b82c3fee64e9a86e";
const unit = "metric";

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("index", {
    date: day,
    imgWeatherUrl: imgWeatherUrl,
    city: "",
    temperature: ""
  })
});

app.post("/", function(req, res) {
  const day = date.getDate();
  const city = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    if (response.statusCode != 404) {
      response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;

        const weatherImage = urlimage.getUrlImage(icon)

        res.render("index.ejs", {
          date: day,
          imgWeatherUrl: weatherImage,
          temperature: temp + " °C",
          city: city
        })

      });
    } else {
      res.render("index", {
        date: day,
        imgWeatherUrl: imgWeatherUrl,
        city: "",
        temperature: ""
      })
    }
  });
});
let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000
}
app.listen(port, function() {
  console.log("Website running succesfully");
})
