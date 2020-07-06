exports.getUrlImage = function(icon) {
  var imgWeatherUrl;
  switch (icon) {
    case "01d":
      imgWeatherUrl = "https://www.softwareheritage.org/wp-content/uploads/2017/12/clearsky.png"
      break
    case "01n":
      imgWeatherUrl = "https://images.unsplash.com/photo-1544314554-b05e691ab63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      break
    case "02n":
      imgWeatherUrl = "https://www.arcgis.com/sharing/rest/content/items/8619b5290b32401687f1f2bf79dbca95/resources/1552523364920.jpeg?w=1600"
      break
    case "02d":
      imgWeatherUrl = "https://www.softwareheritage.org/wp-content/uploads/2017/12/clearsky.png"
      break
    case "03d":
      imgWeatherUrl = "https://www.bonsmara.com.na/images/gallery/_DSC5485.jpg"
      break
    case "03n":
      imgWeatherUrl = "https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_glow_cloud_explainer.png"
      break
    case "04d":
      imgWeatherUrl = "https://ntelemicro.com/v1/wp-content/uploads/2017/03/nublado.jpg"
      break
    case "04n":
      imgWeatherUrl = "https://www.wallpaperup.com/uploads/wallpapers/2018/09/20/1293300/e7479f7da558d23899da8a437fb6b60d-700.jpg"
      break
    case "09n":
    case "10n":
      imgWeatherUrl = "https://i.pinimg.com/originals/23/d4/e9/23d4e939b20beeeb5f3a426e64020018.jpg"
      break
    case "09d":
    case "10d":
      imgWeatherUrl = "https://live.staticflickr.com/3671/32130416814_285c501512_b.jpg"
      break
    case "11d":
    case "11n":
      imgWeatherUrl = "https://www.wallpaperflare.com/static/141/423/735/landscape-lightning-house-reflection-wallpaper.jpg"
      break
    case "13n":
      imgWeatherUrl = "https://s3.envato.com/files/4b63da30-60eb-4031-8d35-3ef632d6d8dc/inline_image_preview.jpg"
      break
    case "13d":
      imgWeatherUrl = "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/11/Knuten-sunrise-winter-e1511472557708.jpg?resize=750%2C501&ssl=1"
      break
    case "50n":
      imgWeatherUrl = "https://staticdelivery.nexusmods.com/images/101/1518707-1493462307.jpg"
      break
    case "50d":
      imgWeatherUrl = "https://www.ephotozine.com/articles/beautiful-misty-landscape-awarded-potw-accolade--34012/images/Mist-over-Callander.jpg"
      break
    default:
      imgWeatherUrl = "https://www.wallpaperup.com/uploads/wallpapers/2013/07/16/119101/ec0b001abf48f460a9d1dfb8b2514dc4-700.jpg"
  }
  return imgWeatherUrl
}
