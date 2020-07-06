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

const imgWeatherUrl = "https://i.pinimg.com/originals/96/ba/b6/96bab67b1d6ba3857c7f27f5c4909ecf.jpg"
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
app.listen(8080, function() {
  console.log("Website running succesfully");
})
