import React from "react";
import useWeather from "src/utils/useWeather";
import CurrentTime from "./CurrentTime";
import { Bottom, ThisDayWrapper, Top } from "./style";

const ThisDay: React.FC = () => {
  const { data, isLoading } = useWeather("Kyiv");

  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  // weather icons
  const weatherIcon = data?.weather[0].description;
  let imageSrc = "./images/mainly_cloudy.svg";

  if (weatherIcon === "clear sky") {
    imageSrc = "./images/weatherIcons/clear-sky.svg";
  } else if (weatherIcon === "broken clouds") {
    imageSrc = "./images/weatherIcons/broken-clouds.svg";
  } else if (weatherIcon === "few clouds") {
    imageSrc = "./images/weatherIcons/few-clouds.svg";
  } else if (weatherIcon === "mist") {
    imageSrc = "./images/weatherIcons/mist.svg";
  } else if (weatherIcon === "rain") {
    imageSrc = "./images/weatherIcons/rain.svg";
  } else if (weatherIcon === "scattered clouds") {
    imageSrc = "./images/weatherIcons/scattered-clouds.svg";
  } else if (weatherIcon === "shower rain") {
    imageSrc = "./images/weatherIcons/shower-rain.svg";
  } else if (weatherIcon === "snow") {
    imageSrc = "./images/weatherIcons/snow.svg";
  } else if (weatherIcon === "thunderstorm") {
    imageSrc = "./images/weatherIcons/thunderstorm.svg";
  }

  console.clear();
  console.log(weatherIcon);

  return (
    <ThisDayWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Top>
            <div>
              <h2>{temperature}°</h2>
              <h3>Now</h3>
            </div>
            <img src={imageSrc} alt="" />
          </Top>
          <Bottom>
            <CurrentTime locationUtcOffsetInSeconds={data?.timezone || 0} />
            <div>
              {cityName} - {data?.sys.country}
            </div>
          </Bottom>
        </>
      )}
    </ThisDayWrapper>
  );
};

export default ThisDay;
