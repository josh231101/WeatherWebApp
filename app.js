const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const urlimage = require(__dirname + "/urlimage.js")

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"))
app.set("view engine", "ejs");

let imgWeatherUrl = "https://cdn.naturettl.com/wp-content/uploads/2014/07/22014424/featured4.jpg"
//API CONST NEEDED
const apiKey = "736e90ffa8b745b5b82c3fee64e9a86e";
const unit = "metric";


app.get("/", function(req, res) {
  res.render("index", {
    imgWeatherUrl: imgWeatherUrl,
    city: "",
    temperature: ""
  })
});


app.post("/", function(req, res) {
  const city = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    if (response.statusCode != 404) {
      response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;

        imgWeatherUrl = urlimage.getUrlImage(icon)

        res.render("index.ejs", {
          imgWeatherUrl: imgWeatherUrl,
          temperature: temp + " °C",
          city: city
        })

      });
    } else {
      res.render("index", {
        imgWeatherUrl: imgWeatherUrl,
        city: "",
        temperature: ""
      })
    }
  });
});
app.listen(8080, function() {
  console.log("Website running on port 8080");
})
