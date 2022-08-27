import React from "react";
import useWeather from "src/utils/useWeather";
import { Bottom, ThisDayWrapper, Top } from "./style";

const ThisDay: React.FC = () => {
  const { data, isLoading } = useWeather("London");

  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  return (
    <ThisDayWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Top>
            <div>
              <h2>{temperature}°</h2>
              <h3>Сегодня</h3>
            </div>
            <img src="./images/sun.svg" alt="" />
          </Top>
          <Bottom>
            <div>Время: 21:54</div>
            <div>Город: {cityName}</div>
          </Bottom>
        </>
      )}
    </ThisDayWrapper>
  );
};

export default ThisDay;
