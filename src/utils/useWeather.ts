import { useQuery } from "@tanstack/react-query";
import openWeather from "./openWeather";

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
