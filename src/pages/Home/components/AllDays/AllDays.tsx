import React from "react";
import { AllDaysWrapper, DayWrapper } from "./styles";

interface Card {
  id: number;
  dayOfWeek: string;
  date: string;
  icon: string;
  temp: string;
  feelsLike: string;
  weather: string;
}

const cardData: Card[] = [
  {
    id: 1,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
  {
    id: 2,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
  {
    id: 3,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
  {
    id: 4,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
  {
    id: 5,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
  {
    id: 6,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
  {
    id: 7,
    dayOfWeek: "Сегодня",
    date: "28 апр",
    icon: "./images/small_rain_sun.svg",
    temp: "+18°",
    feelsLike: "+15°",
    weather: "Облачно",
  },
];

interface AllDaysProps {
  cards: Card;
}

const Day: React.FC<AllDaysProps> = ({ cards }) => {
  const { id, dayOfWeek, date, icon, temp, feelsLike, weather } = cards;

  return(
    <DayWrapper>
        <h2>{dayOfWeek}</h2>
        <h3>{date}</h3>
        <img src={icon} alt={weather} />
        <h2>{temp}</h2>
        <h3>{feelsLike}</h3>
        <h3>{weather}</h3>
    </DayWrapper>
  )
};

const AllDays: React.FC = () => {
  return (
    <AllDaysWrapper>
      {cardData.map((cards) => (
        <Day cards={cards} key={cards.id} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
