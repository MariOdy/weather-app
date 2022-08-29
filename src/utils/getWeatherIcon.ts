export type WeatherIcon =
  // clear sky
  | "01d"
  | "01n"
  | "Clear"
  // few clouds
  | "02d"
  | "02n"
  | "Clouds"
  // scattered clouds
  | "03d"
  | "03n"
  // broken clouds
  | "04d"
  | "04n"
  // shower rain
  | "09d"
  | "09n"
  // rain
  | "10d"
  | "10n"
  | "Rain"
  // thunderstorm
  | "11d"
  | "11n"
  | "Thunderstorm"
  // snow
  | "13d"
  | "13n"
  | "Snow"
  // mist
  | "50d"
  | "50n"
  | "Mist"
  // other
  | string;

const getWeatherIcon = (icon: WeatherIcon) => {
  switch (icon) {
    // clear sky
    case "01d":
    case "01n":
    case "Clear":
      return "clear-sky.svg";
    // few clouds
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "Clouds":
      return "few-clouds.svg";
    // broken clouds
    case "04d":
    case "04n":
      return "broken-clouds.svg";
    // shower rain
    case "09d":
    case "09n":
      return "shower-rain.svg";
    // rain
    case "10d":
    case "10n":
    case "Rain":
      return "rain.svg";
    // thunderstorm
    case "11d":
    case "11n":
    case "Thunderstorm":
      return "thunderstorm.svg";
    // snow
    case "13d":
    case "13n":
    case "Snow":
      return "snow.svg";
    // mist
    case "50d":
    case "50n":
    case "Mist":
      return "mist.svg";
    // Default
    default:
      return "clear-sky.svg";
  }
};

export default getWeatherIcon;
