import { useQuery } from "@tanstack/react-query";
import OpenWeatherMap from "openweathermap-ts";

const openWeather = new OpenWeatherMap({
  apiKey: "a45685593ef2f60c20c3571b349f8b74",
});

openWeather.setUnits("metric");

const getWeather = (city: string) =>
  openWeather.getCurrentWeatherByCityName({
    cityName: city,
  });

const useWeather = (city: string) => {
  const { data, ...rest } = useQuery(["weather", city], () => getWeather(city));

  return {
    ...rest,
    data,
  };
};
export default useWeather;
