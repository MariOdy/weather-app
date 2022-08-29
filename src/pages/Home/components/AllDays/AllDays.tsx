import React from "react";
import { useParams } from "react-router-dom";

import useWeatherForecast from "src/utils/useWeatherForecast";
import Day from "./Day";
import { AllDaysWrapper } from "./styles";

const AllDays: React.FC = () => {
  const { id } = useParams();

  const { days, isLoading } = useWeatherForecast(id ? `${id}` : "Kyiv");

  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day day={day} key={day.date} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
