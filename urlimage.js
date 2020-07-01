exports.getUrlImage = function(icon){
  var imgWeatherUrl;
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
  return imgWeatherUrl
}
