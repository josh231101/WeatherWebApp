const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
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

      res.write("<h1>THE TEMPERATURE IN " + city + " IS: " + temp + "</h1>");
      res.write("<h2>DESCRIPTION: " + description + "</h2>");
      res.write("<img style='display:block;' src="+ imgUrl +">")
      res.send();
    });
  });
});

// app.get("/",function(req,res){
//   const query = "Paris"
//   const apiKey = "736e90ffa8b745b5b82c3fee64e9a86e";
//   const unit = "metric";
//   const url = "https://api.openweathermap.org/data/2.5/weather?q="+query + "&appid="+ apiKey + "&units=" + unit;
//   https.get(url,function(response){
//     console.log("HTTPS STATUS: " + response.statusCode);
//     response.on("data",function(data){
//       //data is coming in HEXADECIMAL so lets change it to JSON
//       const weatherData = JSON.parse(data);
//       const temperature = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
//
//       res.write("<h1>The temperature in Paris is " + temperature + " degrees Celsius </h1>");
//       res.write("<h2> The weather condition is: " + description);
//       res.write("<img style='display : block;' src=" + imageUrl + ">")
//       res.send();
//     });
//   });
//
// });

app.listen(8080,function(){
  console.log("Website running on port 8080");
})
