import React, { useMemo } from "react";
import { Day as IDay } from "src/utils/useWeatherForecast";
import WeatherIcon from "../WeatherIcon";
import { BottomPart, DayWrapper, TopPart } from "./styles";

interface DayProps {
  day: IDay;
}

const Day: React.FC<DayProps> = ({ day }) => {
  const { date, forecast } = day;

  const temp = Math.max(...forecast.map((x) => Math.round(x.main.temp)));
  const lowestTemp = Math.min(...forecast.map((x) => Math.round(x.main.temp)));

  const weekDays = new Date(date);
  const dayOfWeek = weekDays.toDateString().substring(0, 3);

  const dates = date.split("-").reverse().join(".").substring(0, 5);

  const dayConditions = useMemo(() => {
    const conditions: Record<
      string,
      {
        [x: string]: any;
      }
    > = {};

    forecast?.forEach?.((f) => {
      const forecastCondition = f.weather[0].icon;
      let condition = conditions[forecastCondition];

      if (!condition) {
        condition = { condition: forecastCondition, forecast: [] };
        conditions[forecastCondition] = condition;
      }

      condition.forecast.push(f);
    });

    return Object.values(conditions);
  }, [forecast]);

  const dominantCondition = useMemo(
    () =>
      Object.values(dayConditions).sort(
        (cond1, cond2) => cond2.forecast.length - cond1.forecast.length
      )?.[0]?.condition,
    [dayConditions]
  );

  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayOfWeek}</h2>
          <h3>{dates}</h3>
        </div>
        <WeatherIcon icon={dominantCondition} />
      </TopPart>
      <BottomPart>
        <h2>{temp}°</h2>
        <h3>{lowestTemp}°</h3>
      </BottomPart>
    </DayWrapper>
  );
};

export default Day;
