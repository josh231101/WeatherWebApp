const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/styles.css",function(req,res){
  res.sendFile(__dirname + "/styles.css")
});

app.post("/",function(req,res){
  const city = req.body.city;
  const apiKey = "736e90ffa8b745b5b82c3fee64e9a86e";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city
  + "&appid="+ apiKey + "&units=" + unit;

  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "http://openweathermap.org/img/wn/"+ icon +"@4x.png";

      res.write("<h1 style='color:blue;font-family:sans-serif;'>The temperature in  " + city + " is: " + temp + "</h1>");
      res.write("<h2>Description: " + description + "</h2>");
      res.write("<img style='display:block;' src="+ imgUrl +">")
      res.send();
    });
  });
});
app.listen(8080,function(){
  console.log("Website running on port 8080");
})
