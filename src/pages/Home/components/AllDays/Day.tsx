import React from "react";
import { Day as IDay } from "src/utils/useWeatherForecast";
import { BottomPart, DayWrapper, TopPart } from "./styles";

interface DayProps {
  day: IDay;
}

const Day: React.FC<DayProps> = ({ day }) => {
  const { date, forecast } = day;

  const temp = Math.max.apply(
    null,
    forecast.map((x) => Math.round(x.main.temp))
  );
  const lowestTemp = Math.min.apply(
    null,
    forecast.map((x) => Math.round(x.main.temp))
  );

  const weekDays = new Date(date);
  const dayOfWeek = weekDays.toDateString().substring(0, 3);

  const dates = date.split("-").reverse().join(".").substring(0, 5);

  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayOfWeek}</h2>
          <h3>{dates}</h3>
        </div>
        <img alt="" />
      </TopPart>
      <BottomPart>
        <h2>{temp}°</h2>
        <h3>{lowestTemp}°</h3>
      </BottomPart>
    </DayWrapper>
  );
};

export default Day;
