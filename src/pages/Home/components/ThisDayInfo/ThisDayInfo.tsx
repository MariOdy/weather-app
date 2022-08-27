import React from "react";
import { InfoItem, ThisDayInfoWrapper } from "./styles";

interface Item {
  id: number;
  icon: string;
  name: string;
  value: string;
}

const infoData: Item[] = [
  {
    id: 1,
    icon: "./images/temperature.svg",
    name: "Температура",
    value: "20° - ощущается как 17°",
  },
  {
    id: 2,
    icon: "./images/pressure.svg",
    name: "Давление",
    value: "765 мм ртутного столба - нормальное",
  },
  {
    id: 3,
    icon: "./images/precipitation.svg",
    name: "Осадки",
    value: "Без осадков",
  },
  {
    id: 4,
    icon: "./images/wind.svg",
    name: "Ветер",
    value: "3 м/с юго-запад - легкий ветер°",
  },
];

interface ThisDayInfoItemProps {
  inf: Item;
}

const ThisDayInfoItem: React.FC<ThisDayInfoItemProps> = ({ inf }) => {
  const { icon, name, value } = inf;

  return (
    <InfoItem>
      <div>
        <img src={icon} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{value}</p>
    </InfoItem>
  );
};

const ThisDayInfo: React.FC = () => {
  return (
    <ThisDayInfoWrapper>
      <img src="./images/cloud.png" alt="" className="cloud" />
      <div>
        {infoData.map((inf) => (
          <ThisDayInfoItem inf={inf} key={inf.id} />
        ))}
      </div>

      
    </ThisDayInfoWrapper>
  );
};

export default ThisDayInfo;
