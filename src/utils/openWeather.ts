import OpenWeatherMap from "openweathermap-ts";

const openWeather = new OpenWeatherMap({
  apiKey: "a45685593ef2f60c20c3571b349f8b74",
});

openWeather.setUnits("metric");

export default openWeather;
