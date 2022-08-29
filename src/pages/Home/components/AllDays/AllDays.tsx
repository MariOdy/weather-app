import React from "react";
import useWeatherForecast from "src/utils/useWeatherForecast";
import Day from "./Day";
import { AllDaysWrapper } from "./styles";

const AllDays: React.FC = () => {
  const { days, isLoading } = useWeatherForecast("Kyiv");

  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day day={day} key={day.date} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
