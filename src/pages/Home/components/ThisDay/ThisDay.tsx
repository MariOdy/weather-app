import React from "react";
import useWeather from "src/utils/useWeather";
import CurrentTime from "./CurrentTime";
import { Bottom, ThisDayWrapper, Top } from "./style";

const ThisDay: React.FC = () => {
  const { data, isLoading } = useWeather("Kyiv");

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
              <h3>Today</h3>
            </div>
            <img src="./images/sun.svg" alt="" />
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
